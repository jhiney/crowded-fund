import RandomPortfolioNumber from "../components/randomPortfolioNumber";
import Position from "../components/position";
import PositionHeader from "../components/positionHeader";

const companies = [{
    name: 'Apple',
    owned: "1"
 },
 {
    name: 'Microsoft',
    owned: '10'
 }
];

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
			<PositionHeader />
			{companies.map(({name, owned}) => {
				return <Position company={name} key={name} owned={owned} />;
			})}
		</div>
	);
}