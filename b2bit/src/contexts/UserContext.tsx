import React, { createContext } from "react"

import useAuth from '../hooks/useAuth'

type UserType = {
    name: string,
    email: string,
    image_medium_url: string,
}

type InitialStateType = {
    user: UserType;
    loading: boolean;
    authenticated: boolean;
}

const initialState = {
    user: {
        name: 'Name Name',
        email: 'email@email.com',
        image_medium_url: "../../logob2b.png",
    },
    loading: false,
    authenticated: false,
}

//const Context = createContext<InitialStateType>(initialState);
/*const Context = createContext();

function UserProvider({ children }){
    const { loading, authenticated, login, logout } = useAuth();

    return(
        <Context.Provider
            value={{ loading, authenticated, login, logout }}
        >
            {children}
        </Context.Provider>
    )

} export { Context, UserProvider}*/

