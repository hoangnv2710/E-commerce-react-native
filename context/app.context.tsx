import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
    user: any;
    token: string | null;
    login: (token: string, userData: any) => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);
    const login = (token: string, userData: any) => {
        setToken(token);
        setUser(userData);
        console.log("login.....")
    }

    return (
        <AuthContext.Provider value={{ user, token, login }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    console.log("in auth context", context);
    if (context === undefined) {
        console.log('useAuth must be used within an AuthProvider');
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
