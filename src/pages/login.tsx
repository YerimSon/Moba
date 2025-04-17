import Login from "../components/Login";
import GuestOnlyRoute from "../components/routes/GuestOnlyRoute";


export default function LoginPage() {
    return (
        <GuestOnlyRoute>
            <Login />
        </GuestOnlyRoute>
)
}