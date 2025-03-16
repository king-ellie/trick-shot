export const handler = async () => {
    const API_KEY = process.env("NETLIFY_API_KEY")
    const SITE_ID = process.env("NETLIFY_SITE_ID")

    const response = await fetch(`https://api.netlify.com/api/v1/sites/${SITE_ID}/submissions`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
    });

    if (!response.ok) {
        return new Response(JSON.stringify({ error: "Failed to fetch submissions" }), {
            status: response.status,
            headers: { "Content-Type": "application/json" },
        });
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });

};