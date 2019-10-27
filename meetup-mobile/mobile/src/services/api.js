import axios from 'axios';
import { API_IP } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_IP,
});

export default api;
