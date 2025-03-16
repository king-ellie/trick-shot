import axios from 'axios';

export const handler = async () => {
    try {
        const API_KEY = process.env.NETLIFY_API_KEY;
        const SITE_ID = process.env.NETLIFY_SITE_ID;
        
        const response = await axios.get(`https://api.netlify.com/api/v1/sites/${SITE_ID}/submissions`, {
            headers: { Authorization: `Bearer ${API_KEY}` },
        });
        
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
            headers: { "Content-Type": "application/json" }
        };
    } catch (error) {
        console.error("Function error:", error.message);
        return {
            statusCode: error.response?.status || 500,
            body: JSON.stringify({ 
                error: error.message,
                details: error.response?.data || "Unknown error"
            }),
            headers: { "Content-Type": "application/json" }
        };
    }
};