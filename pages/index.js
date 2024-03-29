import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>crowded-fund</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>This is a great idea.</h1>
				<div className="container mx-auto p-6 grid grid-cols-3 gap-4 content-start pt-16">
				<Link href={"/landing"} passHref>
					<button className="border-black font-semibold text-black py-2 px-4 border text-center rounded-full hover:bg-black hover:text-white">
						Landing
					</button>
					</Link>
					<Link href={"/testing"} passHref>
					<button className="border-black font-semibold text-black py-2 px-4 border text-center rounded-full hover:bg-black hover:text-white">
						Testing
					</button>
					</Link>
					<Link href={"/portfolio"} passHref>
					<button className="border-black font-semibold text-black py-2 px-4 border text-center rounded-full hover:bg-black hover:text-white">
						Portfolio
					</button>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
