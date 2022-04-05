import Head from "next/head";

//export async function getServerSideProps() {}

export default function Landing(props) {
	return (
		<div className="bg-zinc-900 min-h-screen font-mono">
			<Head>
				<title>crowded-fund</title>
				<meta name="description" content="crowded-fund" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="font-semibold text-6xl text-white text-center pt-16">crowded fund</h1>
			<div className="container">
				<h1 className="font-semibold text-6xl text-white text-center pt-16">
					Investing in Apple would be a ...
				</h1>
				<div className="container grid grid-cols-5 gap-1 text-center text-3xl text-white p-16">
					<div className="hover:text-red-700 transition ease-in-out">Terrible</div>
					<div className="hover:text-red-400 transition ease-in-out">Bad</div>
					<div className="hover:text-yellow-400 transition ease-in-out">Okay</div>
					<div className="hover:text-lime-400 transition ease-in-out">Decent</div>
					<div className="hover:text-green-700 transition ease-in-out">Good</div>
				</div>
				<h1 className="font-semibold text-6xl text-white text-center">...idea.</h1>
			</div>
		</div>
	);
}
