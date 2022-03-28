import RandomPortfolioNumber from "../components/randomPortfolioNumber";
import Position from "../components/position";

export default function Portfolio() {
	return (
		<div className="bg-black min-h-screen font-mono">
			<div className="container text-center pb-20">
				<p className=" font-semibold text-6xl text-white">
					Portfolio
					<br></br>
					$<RandomPortfolioNumber />
				</p>
			</div>
			<Position company="Apple" owned ="2" />
		</div>
	);
}
