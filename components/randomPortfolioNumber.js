export default function RandomPortfolioNumber() {
	var random = Math.floor(Math.random()*100000);
	return random.toLocaleString();
}