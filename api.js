import 'dotenv/config'

export async function getStockPrice(ticker) {
    try {
        const response = await fetch (`https://financialmodelingprep.com/api/v3/quote-short/${ticker}?apikey=${process.env.FMP}`);
        const data = await response.json();
        return (data[0].price);
    } catch (error) {
        console.error(error);
    }

}









