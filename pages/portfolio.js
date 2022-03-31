import Position from "../components/position";
import PositionHeader from "../components/positionHeader";
import { getAccountData, getPositionData } from "../pages/api/alpaca";

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

export default function Portfolio(props) {
	return (
		<div className="bg-zinc-900 min-h-screen font-mono">
			<div className="container text-center pb-20">
				<p className="font-semibold text-6xl text-white">
					Portfolio
					<br></br>${parseFloat(props.portfolioEquity).toLocaleString()}
				</p>
			</div>
			<PositionHeader />
			{props.positions.map(({ symbol, qty,market_value }) => {
				return <Position company={symbol} key={symbol} owned={qty} value={market_value} />;
			})}
		</div>
	);
}
