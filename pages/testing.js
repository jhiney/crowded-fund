import AssetGrid from "../components/assetGrid";
import { useState } from "react";

import { getMultiStockSnapshot, getCompanyName } from "../pages/api/alpaca";

export async function getServerSideProps() {
	const symbols = ["AAPL", "GS", "JPM", "NET"];
	const names = [];
	const multi = await getMultiStockSnapshot(symbols);

	for (const symbol of symbols) {
		names.push(await getCompanyName(symbol));
	}
	return {
		props: {
			multi,
			names
		}
	};
}

export default function Testing(props) {
	const [sideValue, setSideValue] = useState([]);
	return (
		<div className="bg-zinc-900 min-h-screen font-mono h-screen">
			<p className="bg-zinc-900 text-6xl text-white text-center font-mono pt-4">the crowded fund</p>
			<div>
				<AssetGrid setSideValue={setSideValue} sideValue={sideValue} {...props} />
			</div>
		</div>
	);
}
