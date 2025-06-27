// netlify/functions/products.js
export async function handler(event, context) {
    try {
        const response = await fetch("https://swapmeet.atwebpages.com/api/get-all-products.php");

        const data = await response.text(); // use .text() in case it's not valid JSON
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // Optional if only used internally
                "Content-Type": "application/json"
            },
            body: data
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch data", details: err.message })
        };
    }
}
