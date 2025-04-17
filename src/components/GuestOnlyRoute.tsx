import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const GuestOnlyRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user, router]);

    return <>{children}</>;
};

export default GuestOnlyRoute;
export {};