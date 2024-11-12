import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/THANHLINHNGUYEN22032/Books/1.0.0',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;