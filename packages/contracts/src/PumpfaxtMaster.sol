// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "./PumpfaxtFeeController.sol";
import "./PumpfaxtToken.sol";
import "./RelayManager.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PumpfaxtMaster is Ownable {
    ERC20 public immutable frxUsd;
    RelayManager public immutable relayManager;
    PumpfaxtFeeController public immutable feeController;

    mapping(address => uint256) public tokenLaunchedAtBlockNumber;
    mapping(address => uint256) public liquidity;

    uint256 public constant initialSupply = 69_420_420_420;
    uint256 public frxUsdTarget;

    event Launch(address indexed creator, address token);
    event Buy(
        address indexed token,
        address indexed buyer,
        uint256 amount,
        uint256 value
    );
    event Sell(
        address indexed creator,
        address token,
        uint256 amount,
        uint256 value
    );
    event ChangeFrxUsdTarget(uint256 newTarget);

    modifier onlyValidToken(address token) {
        require(tokenLaunchedAtBlockNumber[token] > 0, "Not a valid token");
        _;
    }

    constructor(address frxUsd_) Ownable(msg.sender) {
        frxUsd = ERC20(frxUsd_);
        relayManager = new RelayManager();
        feeController = new PumpfaxtFeeController();
    }

    function frxDecimals() public view returns (uint8) {
        return frxUsd.decimals();
    }

    function frxDECIMALS() public view returns (uint256) {
        return 10 ** frxDecimals();
    }

    function _launchToken(
        address creator_,
        string memory name_,
        string memory symbol_,
        string memory uri_
    ) private {
        uint256 fee = feeController.pumpfaxtTokenLaunchFee_FLAT() * frxDECIMALS();
        frxUsd.transferFrom(creator_, address(feeController), fee);
        feeController.registerFee(creator_, fee, keccak256("launchPumpfaxtToken"));

        PumpfaxtToken newToken = new PumpfaxtToken(
            creator_,
            name_,
            symbol_,
            uri_
        );
        tokenLaunchedAtBlockNumber[address(newToken)] = block.number;

        emit Launch(creator_, address(newToken));
    }

    function launchToken(
        string memory name_,
        string memory symbol_,
        string memory uri_
    ) external {
        _launchToken(msg.sender, name_, symbol_, uri_);
    }

    function metaLaunchToken(
        address creator_,
        string memory name_,
        string memory symbol_,
        string memory uri_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(abi.encodePacked(name_, symbol_, uri_));
        bool validExecution = relayManager.execute(
            creator_,
            "launchToken",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        _launchToken(msg.sender, name_, symbol_, uri_);
    }

    function _buyToken(
        address buyer_,
        address token_,
        uint256 frxUsdIn_,
        uint256 amountOutMin_
    ) private onlyValidToken(token_) {
        PumpfaxtToken token = PumpfaxtToken(token_);
        require(token.isTrading(), "Token is not trading");
        require(
            frxUsdIn_ > 1 * frxDECIMALS() &&
                frxUsdIn_ <= frxUsdTarget - liquidity[token_],
            "invalid frxUsdIn"
        );
        require(amountOutMin_ > 0, "invalid amountOutMin");

        uint256 fee = frxUsdIn_ /
            feeController.pumpfaxtTokenBuySellFee_FRACTION();

        uint256 amountOut = token.calculateAmountOut(frxUsdIn_ - fee);
        require(amountOut >= amountOutMin_, "Slippage tolerance exceeded");

        frxUsd.transferFrom(buyer_, address(this), frxUsdIn_);
        frxUsd.transfer(address(feeController), fee);
        feeController.registerFee(buyer_, fee, keccak256("buyPumpfaxtToken"));

        token.transfer(buyer_, amountOut);
    }

    function buyToken(
        address token_,
        uint256 frxUsdIn_,
        uint256 amountOutMin_
    ) external {
        _buyToken(msg.sender, token_, frxUsdIn_, amountOutMin_);
    }

    function metaBuyToken(
        address buyer_,
        address token_,
        uint256 frxUsdIn_,
        uint256 amountOutMin_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(
            abi.encodePacked(token_, frxUsdIn_, amountOutMin_)
        );
        bool validExecution = relayManager.execute(
            buyer_,
            "buyToken",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        _buyToken(buyer_, token_, frxUsdIn_, amountOutMin_);
    }

    function _sellToken(
        address seller_,
        address token_,
        uint256 amountIn_,
        uint256 frxUsdOutMin_
    ) private onlyValidToken(token_) {
        PumpfaxtToken token = PumpfaxtToken(token_);
        require(token.isTrading(), "Token is not trading");
        require(amountIn_ > 0, "invalid amountIn");
        require(
            frxUsdOutMin_ > 0 && frxUsdOutMin_ <= liquidity[token_],
            "invalid amountOutMin"
        );

        uint256 frxUsdOut = token.calculateFrxUsdOut(amountIn_);
        require(frxUsdOut >= frxUsdOutMin_, "Slippage tolerance exceeded");

        uint256 fee = frxUsdOut /
            feeController.pumpfaxtTokenBuySellFee_FRACTION();

        token.masterTransferFrom(seller_, address(this), amountIn_);
        frxUsd.transfer(address(feeController), fee);
        feeController.registerFee(seller_, fee, keccak256("sellPumpfaxtToken"));

        frxUsd.transfer(seller_, frxUsdOut - fee);
    }

    function sellToken(
        address token_,
        uint256 amountIn_,
        uint256 frxUsdOutMin_
    ) external {
        _sellToken(msg.sender, token_, amountIn_, frxUsdOutMin_);
    }

    function metaSellToken(
        address seller_,
        address token_,
        uint256 amountIn_,
        uint256 frxUsdOutMin_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(
            abi.encodePacked(token_, amountIn_, frxUsdOutMin_)
        );
        bool validExecution = relayManager.execute(
            seller_,
            "launchToken",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        _sellToken(seller_, token_, amountIn_, frxUsdOutMin_);
    }

    function setFrxUsdTarget(uint256 newTarget_) external onlyOwner {
        frxUsdTarget = newTarget_;

        emit ChangeFrxUsdTarget(newTarget_);
    }
}
