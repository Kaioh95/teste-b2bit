import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const ErrorInterceptor = (error: AxiosError) => {
    const navigate = useNavigate()

    if (error.message === 'Network Error'){
        return Promise.reject(new Error('Network Error'));
    }

    if (error.response?.status === 401){
        localStorage.removeItem('token')
        navigate("/login")
        return Promise.reject(new Error('Token not valid'));
    }

    return Promise.reject('error');
}