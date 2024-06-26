import axios from 'axios';
import Encuestaraz from '../types/Encuestaraz';

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

export const sendToHubSpot = async (formData: Encuestaraz) => {
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`;

    const body = {
        submittedAt: new Date().getTime(),
        fields: Object.keys(formData).map(key => {
            const param = formData[key as keyof Encuestaraz];
            return {
                name: key === '_id' ? 'idencuestaraz' : key,
                value: typeof param === 'string' ? param.replace(/\n/g, ' ') : param
            }
        }),
        context: {
            pageUri: "http://montaraz.com", // Adjust as necessary
            pageName: "Montaraz"
        }
    };

    try {
        const response = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error submitting to HubSpot', error);
        throw error;
    }
};

export const updateHubSpotSubscription = async (email: string, subscribed: boolean) => {
    const url = `https://api.hubapi.com/contacts/v1/contact/email/${email}/profile`;

    const body = {
        properties: [
            {
                property: "suscrito",
                value: subscribed
            }
        ]
    };

    try {
        const response = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating HubSpot contact', error);
        throw error;
    }
};
