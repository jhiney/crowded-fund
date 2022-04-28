import AssetGrid from "../components/assetGrid";
import { useState } from "react";

import { getStockSnapshot } from "../pages/api/alpaca";

export async function getServerSideProps() {
	const snapshot = await getStockSnapshot("AAPL");
	const close = snapshot.DailyBar.ClosePrice;
	const open = snapshot.DailyBar.OpenPrice;
	const quote = snapshot.LatestTrade.Price;

	return {
		props: {
			close,
			quote,
			open
		}
	};
}

export default function Testing(props) {
	const [sideValue, setSideValue] = useState("");
	return (
		<div className="bg-zinc-900 min-h-screen font-mono flex h-screen">
			{sideValue}
			<AssetGrid setSideValue={setSideValue} sideValue={sideValue} {...props} />
		</div>
	);
}
