import api from '../utils/api'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFlashMessage from './useFlashMessage';

export default function useAuth(){

    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { setFlashMessage } = useFlashMessage()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            //api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }

        setLoading(false)
    }, [])

    async function login(user: object){
        let msgText = 'Succesful Login'
        let msgType = 'success'

        try{
            const data = await api.post('/account/tokens/', user).then((response) => {
                return response.data
            })

            await authUser(data)
        } catch(error: any){
            msgText = error.response.data.detail
            msgType = 'error'
        }

        setFlashMessage(msgText, msgType)

    }

    async function authUser(data: any){
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
        navigate("/")
    }

    function logout(){
        const msgText = 'Succesful Logout'
        const msgType = 'success'

        setAuthenticated(false)
        localStorage.removeItem('token')
        //api.defaults.headers.Authorization = undefined
        navigate('/login')

        setFlashMessage(msgText, msgType)
    }

    return { authenticated, loading, login, logout}
}