import axios from 'axios';
const axiosBaseurl = axios.create({
    baseURL:'http://localhost:3004/checklistplus/api/'
});

export default axiosBaseurl;