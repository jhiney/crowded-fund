import AssetCard from "./assetCard";

export default function AssetGrid(props) {
	let snaps = [];

	props.multi.forEach((element) => {
		snaps.push({
			symbol: element.symbol,
			close: element.DailyBar.ClosePrice,
			open: element.DailyBar.OpenPrice,
			quote: element.LatestTrade.Price
		});
	});

	return (
		<>
			{snaps.map(({ symbol, close, open, quote }) => {
				return <AssetCard key={symbol} symbol={symbol} close={close} open={open} quote={quote} {...props} />;
			})}
		</>
	);
}
