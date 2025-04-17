import Newrecord from "@/src/components/Newrecord";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import { useAuth } from "../../../context/AuthContext";


export default function MyRecordPage() {
    const user = useAuth();

    return (
        <ProtectedRoute>
            <Newrecord user={user!}/>
        </ProtectedRoute>
    )
}