export async function handler(event, context) {
    try {
        const response = await fetch("https://swapmeet.atwebpages.com/api/api/get-all-products.php");
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch data", details: error.message }),
        };
    }
}
