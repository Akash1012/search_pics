import axios from 'axios';

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Hc9tnvFDTR9p8kpXf0xESdc3Q74a92E1w1XmFAI9EgA'
    }
})

export default unsplash