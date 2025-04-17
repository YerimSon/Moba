import Myrecord from "@/src/components/Myrecord";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import { useAuth } from "../../context/AuthContext";


export default function MyRecordPage() {
    const user = useAuth();

    return (
        <ProtectedRoute>
            <Myrecord user={user!}/>
        </ProtectedRoute>
    )
}