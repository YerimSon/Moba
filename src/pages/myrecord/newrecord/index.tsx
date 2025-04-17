import Newrecord from "@/src/components/Newrecord";
import ProtectedRoute from "@/src/components/routes/ProtectedRoute";
import { useAuth } from "@/src/context/AuthContext";


export default function MyRecordPage() {
    const user = useAuth();

    return (
        <ProtectedRoute>
            <Newrecord user={user!}/>
        </ProtectedRoute>
    )
}