export async function handler(event, context) {
    try {
        const res = await fetch("http://swapmeet.host.adellya.my.id/api/get-all-products.php");
        const data = await res.text(); // or .json() if you're sure it's JSON

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: data,
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch data." }),
        };
    }
}
  