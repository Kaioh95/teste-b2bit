import { useState, useEffect } from 'react';
import UserCard from '../layout/UserCard';
import UserProfile from '../layout/UserProfile';
import { api } from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const defaultUser = {avatar: {image_low_url:""}, name: "Name", last_name: "Last", email: "email@email.com"}
    const [user, setUser] = useState(defaultUser)
    const [token] = useState(localStorage.getItem('token') || JSON.stringify('xxxxx'))
    const navigate = useNavigate()

    useEffect(() => {
        api
            .get('/account/profile/', {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(token)}`,
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch((err)=> {
                console.log(err)
                localStorage.removeItem('token')
                navigate("/login")
                return null
            });
    }, [token])
        
    return(
        <UserCard src={user.avatar.image_low_url}>
            <UserProfile name={`${user.name} ${user.last_name}`} email={user.email}></UserProfile>
        </UserCard>
    )
}