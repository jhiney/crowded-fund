import AssetGrid from "../components/assetGrid";
import { useState } from "react";

import { getMultiStockSnapshot } from "../pages/api/alpaca";

export async function getServerSideProps() {
	const multi = await getMultiStockSnapshot(["AAPL", "GS", "NET", "JPM", "F"]);
	return {
		props: {
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
