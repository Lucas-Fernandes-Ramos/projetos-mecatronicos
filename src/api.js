import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.thingspeak.com/channels/1222661/feeds.json?api_key=W8PTP7RD0QZHLNWC&results=10'
});

export default api;