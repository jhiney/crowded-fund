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
	//const jsonData = await getPositionData()
    res.status(200).json("yes")
  }
