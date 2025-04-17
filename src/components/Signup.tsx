import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from 'next/router';
import { FormEvent } from "react";

interface SignupFormElements extends HTMLFormControlsCollection {
    nickname: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
}

interface SignupForm extends HTMLFormElement {
    readonly elements: SignupFormElements;
}

const Signup: React.FC = () => {
    const router = useRouter();

    const handleSignUp = async (e: FormEvent<SignupForm>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const nickname = form.elements.nickname.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: nickname
            });
            router.push("/");
        } catch (err) {
            console.error(err instanceof Error && err.message);
        }
    };

    return (
        <section className="login-page">
            <div className="signup-form">
                <form action="/signup" method="POST" className="handleSignup" onSubmit={handleSignUp}>
                    <h2>회원가입</h2>
                    <fieldset className="login-input">
                        <input 
                            type="text"
                            placeholder="닉네임"
                            name="nickname"
                            required/>
                        <input 
                            type="text"
                            placeholder="이메일"
                            name="email"
                            required/>
                        <input 
                            type="password"
                            placeholder="비밀번호"
                            name="password"
                            required/>
                    </fieldset>
                    <button type="submit">회원가입</button>
                </form>
            </div>
        </section>
    );
};

export default Signup; 