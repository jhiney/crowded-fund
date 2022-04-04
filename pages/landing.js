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
			<h1 className="font-semibold text-6xl text-white text-center pt-16">
				crowded fund
			</h1>
		</div>
	);
}
