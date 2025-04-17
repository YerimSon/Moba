import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useAuth();
    const router = useRouter();


    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user]);

    return <>{children}</>;
    
}

export default ProtectedRoute; 