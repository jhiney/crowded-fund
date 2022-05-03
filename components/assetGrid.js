import AssetCard from "./assetCard";

export default function AssetGrid(props) {
	let snaps = [];

	props.multi.forEach((element, index) => {
		snaps.push({
			symbol: element.symbol,
			close: element.DailyBar.ClosePrice,
			open: element.DailyBar.OpenPrice,
			quote: element.LatestTrade.Price,
			cardID: index
		});
	});

	return (
		<>
			{snaps.map(({ symbol, close, open, quote, cardID }) => {
				return <AssetCard key={symbol} symbol={symbol} close={close} open={open} quote={quote} cardID={cardID} {...props} />;
			})}
		</>
	);
}
