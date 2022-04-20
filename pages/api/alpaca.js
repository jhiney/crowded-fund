import Alpaca from "@alpacahq/alpaca-trade-api";

const alpaca = new Alpaca({
	keyId: process.env.ALPACA_KEY,
	secretKey: process.env.ALPACA_SECRET,
	paper: true
});

export async function getAccountData() {
	const account = await alpaca.getAccount();
	return account;
}

export async function getPositionData() {
	const positions = await alpaca.getPositions();
	return positions;
}



export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.status(405).send({ message: "Only POST requests allowed" });
		return;
	}

	const order = await alpaca.createOrder({
        symbol: "AAPL", // any valid ticker symbol
        qty: 1, // qty or notional required, not both
        side: 'buy',
        type: 'market',
        time_in_force: 'day' 
      })
	return order;
}
