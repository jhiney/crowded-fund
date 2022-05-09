import { useState } from "react";
export default function AssetCard({
	sideValue,
	setSideValue,
	close,
	open,
	quote,
	symbol,
	cardID,
	names
}) {
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

	const name = names[cardID].name;

	return (
		<div className="col-span-1 flex flex-col border-zinc-200 border-2 p-4 rounded overflow-hidden">
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 text-white">
					${symbol} - ${quote}
				</div>
				<p className=" text-base text-zinc-200">
					{name.substring(0, name.indexOf(".") + 1)} closed yesterday at ${close} and opened today
					at ${open}
				</p>
			</div>
			<div className="grid grid-cols-2 gap-2 px-6 py-2">
				<button
					value="buy"
					onClick={SideButtonClicked}
					className={
						(buySell == "buy" ? "bg-white text-black" : "bg-transparent text-white ") +
						"bg-transparent hover:bg-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded text-center"
					}>
					Buy
				</button>
				<button
					value="sell"
					onClick={SideButtonClicked}
					className={
						(buySell == "sell" ? "bg-white text-black" : "bg-transparent text-white ") +
						"hover:bg-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded text-center"
					}>
					Sell
				</button>
			</div>
		</div>
	);
}
