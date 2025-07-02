import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

// const API_BASE = "http://localhost:5000/api/dailylogs";

// export const saveDailyLog = async (logData) => {
//   return axios.post(`${API_BASE}/log`, logData);
// };

// export const getDailyLog = async (userId, date) => {
//   return axios.get(`${API_BASE}/log`, {
//     params: { userId, date }
//   });
// };

// export const getWeeklyStats = async (userId, endDate) => {
//   return axios.get(`${API_BASE}/weekly`, {
//     params: { userId, endDate }
//   });
// };

// Add token to all requests (if available)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Export individual API calls
export const getBackendStatus = () => axios.get('http://localhost:5000/'); // for testing only

export const registerUser = (formData) => API.post('/register', formData);
export const loginUser = (formData) => API.post('/login', formData);
export const getProtectedData = () => API.get('/protected'); // example
export const getProfile = () => API.get('/profile');
export const logWater = (data) => API.post('/water/log', data);
export const logCalorie= (data) => API.post('/calorie/log',data);
export const logSleep = (data) => API.post('/sleep/log', data);

