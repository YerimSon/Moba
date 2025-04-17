import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";


const GuestOnlyRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user]);

    return <>{children}</>;
}

export default GuestOnlyRoute;