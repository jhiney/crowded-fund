export default function Position(props) {
	return (
		<div className="grid grid-cols-3 gap-4 text-center text-3xl text-white">
			<div>Company</div>
			<div>Shares Owned</div>
			<div>Price of investment</div>
			<div>{props.company}</div>
			<div>{props.owned}</div>
			<div>$39,000</div>
		</div>
	);
}
