exports.handler = async function (event, context) {
    try {
        const response = await fetch("https://swapmeet.atwebpages.com/api/get-all-products.php");

        if (!response.ok) {
            throw new Error(`Backend returned ${response.status}`);
        }

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
};
  