import Alpaca from "@alpacahq/alpaca-trade-api";

const alpaca = new Alpaca({
	keyId: process.env.ALPACA_KEY,
	secretKey: process.env.ALPACA_SECRET,
	paper: true
});

export async function getAccountData() {
	try {
		const account = await alpaca.getAccount();
		return account;
	} catch (err) {
		console.log(err);
	}
	
}

export async function getPositionData() {
	try {
		const positions = await alpaca.getPositions();
		return positions;
	} catch (error) {
		console.log(error);
	}
}

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.status(405).send({ message: "Only POST requests allowed" });
		return;
	}

	try {
		await alpaca.createOrder({
			symbol: req.body.symbol, // any valid ticker symbol
			qty: req.body.qty, // qty or notional required, not both
			side: req.body.side, // 'buy' or 'sell'
			type: "market",
			time_in_force: "day"
		});
		res.status(200).end();
	} catch (error) {
		res.status(error).json({});
	}
}
