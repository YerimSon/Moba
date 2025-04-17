import Myrecord from "@/src/components/Myrecord";
import ProtectedRoute from "@/src/components/routes/ProtectedRoute";
import { useAuth } from "@/src/context/AuthContext";


export default function MyRecordPage() {
    const user = useAuth();

    return (
        <ProtectedRoute>
            <Myrecord user={user!}/>
        </ProtectedRoute>
    )
}