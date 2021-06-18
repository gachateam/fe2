import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../component/Firebase'


const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unSubscriber = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })
        return unSubscriber
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


export default AuthProvider
