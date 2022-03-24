export default function Portfolio() {
	return (
		<div className="bg-black min-h-screen font-mono">
			<div className="container text-center pb-20">
				<p className=" font-semibold text-6xl text-white">
					Portfolio
					<br></br>
					$50,000
				</p>
			</div>
			<div className="grid grid-cols-3 gap-4 text-center text-3xl text-white">
				<div>Company</div>
				<div>Shares Owned</div>
				<div>Price of investment</div>
				<div>Apple, Inc.</div>
				<div>112</div>
				<div>$39,000
				</div>
			</div>
		</div>
	);
}
