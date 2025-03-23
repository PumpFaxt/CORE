export default function () {
    return (
        <div className="">
            <img
                src="https://png.pngtree.com/png-vector/20221228/ourmid/pngtree-trading-candlestick-pattern-in-red-and-green-colors-png-image_6536057.png"
                alt="chart"
                className="w-full saturate-150 aspect-[10/7]"
            />
            <div className="flex rounded-full border justify-between p-[2px] text-sm">
                <button className="flex-1 rounded-full bg-foreground/10">1H</button>
                <button className="flex-1">4H</button>
                <button className="flex-1">1D</button>
                <button className="flex-1">1W</button>
                <button className="flex-1">1M</button>
                <button className="flex-1">3M</button>
                <button className="flex-1">MAX</button>
            </div>
        </div>
    );
}