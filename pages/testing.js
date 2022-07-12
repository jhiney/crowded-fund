import AssetGrid from "../components/assetGrid";
import { useState } from "react";

import { getMultiStockSnapshot, getCompanyName } from "../pages/api/alpaca";

export async function getServerSideProps() {
	const symbols = ["J", "GS", "AAPL", "NET"];
	let names = [];
	const multi = await getMultiStockSnapshot(symbols);

	for (const symbol of symbols) {
		names.push(await getCompanyName(symbol));
	}

	//Because multi stock snapshot runs in alphabetically order, we have to sort the names because those are pushed in the order of
	//the symbols array above. If we didn't sort, the names would be mishmashed if they didn't happen to be in order already.
	names.sort((a, b) => (a.symbol > b.symbol ? 1 : b.symbol > a.symbol ? -1 : 0));

	return {
		props: {
			multi,
			names
		}
	};
}

export default function Testing(props) {
	//This side value stores which side, Buy/Sell, is selected per CARD.
	//It is initialized here as Testing is the most elevated component.
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
