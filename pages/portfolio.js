import Position from "../components/position";
import PositionHeader from "../components/positionHeader";
import { getAccountData } from "../pages/api/alpaca";

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
	const buyingPower = accountValue.buying_power;

	// Pass data to the page via props
	return { props: { buyingPower } };
}

export default function Portfolio(props) {
	return (
		<div className="bg-zinc-900 min-h-screen font-mono">
			<div className="container text-center pb-20">
				<p className="font-semibold text-6xl text-white">
					Portfolio
					<br></br>${parseFloat(props.buyingPower).toLocaleString()}
				</p>
			</div>
			<PositionHeader />
			{companies.map(({ companyName, amountOwned }) => {
				return <Position company={companyName} key={companyName} owned={amountOwned} />;
			})}
		</div>
	);
}
