import React from "react";

export default function Testing(props) {
	return (
		<div className="bg-zinc-900 min-h-screen font-mono flex h-screen">
			<div className="max-w-sm rounded overflow-hidden border-2 border-zinc-200 m-auto text-center">
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 text-white">$AAPL</div>
					<p className=" text-base text-zinc-200">
						Apple, Inc.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-2 px-6 pt-4 pb-8">
					<button
						className="bg-transparent hover:bg-green-600 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded text-center">
						Buy
					</button>
					<button
						className="bg-transparent hover:bg-red-600 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded text-center">
						Sell
					</button>
				</div>
			</div>
		</div>
	);
}
