import AssetGrid from "../components/assetGrid";
import { useState } from "react";

import { getMultiStockSnapshot, getStockSnapshot } from "../pages/api/alpaca";

export async function getServerSideProps() {
	const snapshot = await getStockSnapshot("AAPL");
	const multi = await getMultiStockSnapshot(["AAPL", "GS", "NET"]);
	const close = snapshot.DailyBar.ClosePrice;
	const open = snapshot.DailyBar.OpenPrice;
	const quote = snapshot.LatestTrade.Price;

	return {
		props: {
			close,
			quote,
			open,
			multi
		}
	};
}

export default function Testing(props) {
	const [sideValue, setSideValue] = useState("");
	return (
		<div className="bg-zinc-900 min-h-screen font-mono flex h-screen">
			<AssetGrid setSideValue={setSideValue} sideValue={sideValue} {...props} />
		</div>
	);
}
