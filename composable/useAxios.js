import axios from 'axios';

export default function useAxios() {
    const rtConfig = useRuntimeConfig();

    return axios({
        baseURL: rtConfig.public.API_URL,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Authorization': "Bearer" + localStorage.getItem('token'),
        },
        withCredentials: true,
        withXSRFToken: true,
    })
}