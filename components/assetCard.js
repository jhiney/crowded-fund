import { useState } from "react";
export default function AssetCard({ sideValue, setSideValue, close, open, quote, symbol, cardID }) {
	const [buySell, setBuySell] = useState("");
	const SideButtonClicked = (e) => {
		setSideValue((oldArray) => [
			...oldArray,
			{
				asset: symbol,
				side: e.target.value
			}
		]);

		setBuySell(e.target.value);
	};

	return (
		<div className="max-w-sm rounded overflow-hidden border-2 border-zinc-200 m-auto text-center">
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 text-white">
					${symbol} - ${quote}
				</div>
				<p className=" text-base text-zinc-200">
					Apple, Inc closed yesterday at ${close} and opened today at ${open}
				</p>
				<p className=" text-base text-zinc-200">{buySell}</p>
				{/* opened at {price} (green if greater than last close, red if not) */}
			</div>
			<div className="grid grid-cols-2 gap-2 px-6 pt-4 pb-8">
				<button
					value="buy"
					onClick={SideButtonClicked}
					className="bg-transparent hover:bg-green-600 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded text-center">
					Buy
				</button>
				<button
					value="sell"
					onClick={SideButtonClicked}
					className="bg-transparent hover:bg-red-600 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded text-center">
					Sell
				</button>
			</div>
		</div>
	);
}
