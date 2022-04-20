import Position from "../components/position";
import { useState } from "react";
import PositionHeader from "../components/positionHeader";
import { getAccountData, getPositionData } from "../pages/api/alpaca";




export async function getServerSideProps() {
	const accountValue = await getAccountData();
	const positions = await getPositionData();

	const buyingPower = accountValue.buying_power;
	const portfolioEquity = accountValue.equity;

	return {
		props: {
			buyingPower,
			portfolioEquity,
			positions
		}
	};
}

async function sendOrder(symbol, qty, side) {
	const objectWithData = {
		symbol: symbol,
		qty: qty,
		side: side
	};

	//console.log(objectWithData.symbol);
	fetch("/api/alpaca", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(objectWithData)
	});

	console.log(objectWithData);
}

export default function Portfolio(props) {
	const [symbol, setSymbol] = useState("");
	const [qty, setQty] = useState("");
	const [side, setSide] = useState("buy");


	return (
		<div className="bg-zinc-900 min-h-screen font-mono">
			<div className="container text-center pb-20">
				<p className="font-semibold text-6xl text-white pt-16">
					Portfolio
					<br></br>${parseFloat(props.portfolioEquity).toLocaleString()}
				</p>
				<div className="grid grid-cols-3 gap-4">
					<div>
						<label htmlFor="symbol" className="block text-lg font-bold text-white">
							Symbol
						</label>
						<input
							type="text"
							name="symbol"
							id="symbol"
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							value={symbol}
							onInput={(e) => setSymbol(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="quantity" className="block text-lg font-bold text-white">
							Quantity
						</label>
						<input
							type="text"
							name="Quantity"
							id="Quantity"
							className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							value={qty}
							onInput={(e) => setQty(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="bs" className="block text-lg font-bold text-white">
							Buy/Sell
						</label>
						<select
							value={side}
							onChange={(e) => setSide(e.target.value)}
							id="bs"
							name="bs"
							className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							>
							<option>buy</option>
							<option>sell</option>
						</select>
					</div>
				</div>
			</div>
			<PositionHeader />
			{props.positions.map(({ symbol, qty, market_value }) => {
				return <Position company={symbol} key={symbol} owned={qty} value={market_value} />;
			})}
			<button onClick={() => sendOrder(symbol.toUpperCase(), qty, side)} className="rounded-ful bg-white">
				Save Changes
			</button>
		</div>
	);
}
