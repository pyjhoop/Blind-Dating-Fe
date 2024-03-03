import axios from 'axios';
import config from '../config.js';

const API_URL = config.apiUrl;

// 이메일 중복 요청
export const checkEmail = async (email) => {
    try {
        const response = await axios.post(`${API_URL}/api/check-email`, {
            email
        });
        return response.data;
    } catch (error) {
        console.error('Login error', error);
        throw error;
    }
};