import GuestOnlyRoute from "../components/routes/GuestOnlyRoute";
import Signup from "../components/Signup";

export default function SignupPage() {
    return (
        <GuestOnlyRoute>
            <Signup />
        </GuestOnlyRoute>
    )
}