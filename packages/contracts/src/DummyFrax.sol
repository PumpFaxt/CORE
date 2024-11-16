// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DummyFrax is ERC20 {
    constructor() ERC20("FRAX", "FRAX") {
        _mint(msg.sender, 100_000_000 * (10 ** decimals()));
    }
}
