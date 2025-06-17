import axios from 'axios' ;

const axiosInstance  = axios.create({
    baseURL:'baserurl',
    headers:{
        'Content-Type':'application/json'
    }
})


export default axiosInstance