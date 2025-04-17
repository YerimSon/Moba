import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext<User | null>(null);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({children} : AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
        const authChange = onAuthStateChanged(auth, setUser)
        return () => authChange();
    }, [])

    return ( 
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

};

export const useAuth = () => useContext(AuthContext);