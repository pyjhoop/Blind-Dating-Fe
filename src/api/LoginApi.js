import axios from 'axios';
import config from '../config.js';

const API_URL = config.apiUrl;

// 로그인 요청
export const login = async (userId, userPassword) => {
    try {
        const response = await axios.post(`${API_URL}/api/login`, {
            userId,
            userPassword,
        });
        return response.data;
    } catch (error) {
        console.error('Login error', error);
        throw error;
    }
};

// 사용자 목록 가져오기
export const getUserList = async (accessToken) => {
    try {
        const response = await axios.get(`${API_URL}/api/users/all`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Get user list error', error);
        throw error;
    }
};