import RandomPortfolioNumber from "../components/randomPortfolioNumber";
import Position from "../components/position";
import PositionHeader from "../components/positionHeader";

const companies = [
	{
		companyName: "Apple",
		amountOwned: "1"
	},
	{
		companyName: "Microsoft",
		amountOwned: "10"
	}
];

export default function Portfolio() {
	return (
		<div className="bg-zinc-900 min-h-screen font-mono">
			<div className="container text-center pb-20">
				<p className="font-semibold text-6xl text-white">
					Portfolio
					<br></br>
					$<RandomPortfolioNumber />
				</p>
			</div>
			<PositionHeader />
			{companies.map(({ companyName, amountOwned }) => {
				return <Position company={companyName} key={companyName} owned={amountOwned} />;
			})}
		</div>
	);
}
