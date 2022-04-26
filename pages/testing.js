import AssetCard from "../components/assetCard";
import { useState } from "react";


export default function Testing(props) {
	const [sideValue, setSideValue] = useState('');
	
	return (
		<div className="bg-zinc-900 min-h-screen font-mono flex h-screen">
			<h1 className="text-white">{sideValue}</h1>
			<AssetCard setSideValue = {setSideValue} />
		</div>
	);
}
