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
		<div className="container mx-auto p-6 grid grid-cols-4 gap-4 content-center">
			{snaps.map(({ symbol, close, open, quote, cardID }) => {
				return (
					<AssetCard
						key={symbol}
						symbol={symbol}
						close={close}
						open={open}
						quote={quote}
						cardID={cardID}
						{...props}
					/>
				);
			})}
		</div>
	);
}
