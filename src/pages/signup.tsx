import GuestOnlyRoute from "../components/GuestOnlyRoute";
import Signup from "../components/Signup";

export default function SignupPage() {
    return (
        <GuestOnlyRoute>
            <Signup />
        </GuestOnlyRoute>
    )
}