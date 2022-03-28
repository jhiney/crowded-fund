import RandomPortfolioNumber from "../components/randomPortfolioNumber";
import Position from "../components/position";

const companies = ["apple", "msft", "3rd company"];

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
			<div className="grid grid-cols-3 gap-4 text-center text-3xl text-white">
				<div>Company</div>
				<div>Shares Owned</div>
				<div>Price of investment</div>
			</div>
			{companies.map((companies) => {
				return <Position company={companies} key={companies} owned="1" />;
			})}
		</div>
	);
}