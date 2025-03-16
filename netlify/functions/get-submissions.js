import fetch from 'node-fetch';

export const handler = async () => {
    try {
        const API_KEY = process.env.NETLIFY_API_KEY;
        const SITE_ID = process.env.NETLIFY_SITE_ID;
        
        const response = await fetch(`https://api.netlify.com/api/v1/sites/${SITE_ID}/submissions`, {
            headers: { Authorization: `Bearer ${API_KEY}` },
        });

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: "Failed to fetch submissions" }),
                headers: { "Content-Type": "application/json" }
            };
        }
        
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        };
    } catch (error) {
        console.error("Function error:", error.message);
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" }
        };
    }
};