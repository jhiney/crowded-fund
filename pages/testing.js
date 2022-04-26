import AssetCard from "../components/assetCard";
import { useState } from "react";

import { getStockSnapshot  } from "../pages/api/alpaca";

export async function getServerSideProps() {
	
	const snapshot = await getStockSnapshot('AAPL');

	const close = snapshot.DailyBar.ClosePrice;
	

	return {
		props: {
			close
		}
	};
}


export default function Testing(props) {
	const [sideValue, setSideValue] = useState('');
	
	return (
		<div className="bg-zinc-900 min-h-screen font-mono flex h-screen">
			<AssetCard setSideValue = {setSideValue} sideValue = {sideValue} closePrice = {props.close} />
		</div>
	);
}
