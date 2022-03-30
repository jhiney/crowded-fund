import Alpaca from "@alpacahq/alpaca-trade-api";

const alpaca = new Alpaca({
	keyId: "PKQ3SR8JQ0B9XKWZM28Q",
	secretKey: "IniUvFP7mb1HqSQSbTEHjCgjIR66aFkPqXOTtX53",
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
