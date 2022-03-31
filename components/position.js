export default function Position(props) {
	return (
		<div className="grid grid-cols-3 gap-4 text-center text-3xl text-white">
			<div className="rounded-md border border-zinc-200">{props.company}</div>
			<div className="rounded-md border border-zinc-200">{props.owned}</div>
			<div className="rounded-md border border-zinc-200">${parseFloat(props.value).toLocaleString()}</div>
		</div>
	);
}
