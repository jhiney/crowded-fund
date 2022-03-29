import Alpaca from "@alpacahq/alpaca-trade-api";

const alpaca = new Alpaca({
	keyId: "PKQ3SR8JQ0B9XKWZM28Q", // REPLACE with your API credentials
	secretKey: "IniUvFP7mb1HqSQSbTEHjCgjIR66aFkPqXOTtX53", // REPLACE with your API credentials
	paper: true
});

export async function getData() {
    const account = await alpaca.getAccount();
    return account;
}


export default async function handler(req, res) {
	const jsonData = await getData()
    res.status(200).json(jsonData)
  }
