import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { auth } from '../firebase';

interface LoginFormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
}

interface LoginForm extends HTMLFormElement {
    readonly elements: LoginFormElements;
}

function Login() {
    const router = useRouter();

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.currentTarget as LoginForm;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/");
        } catch (err) {
            console.error(err instanceof Error && err.message);
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/");
        } catch (err) {
            console.error(err instanceof Error && err.message);
        }
    };

    return (
        <section className="login-page">
            <div className="login-form">
                <form action="/login" method="POST" className="handleLogin" onSubmit={handleLogin}>
                    <h2>로그인</h2>
                    <fieldset className="login-input">
                        <input 
                            type="text"
                            placeholder="이메일"
                            name="email"
                            required
                        />
                        <input 
                            type="password"
                            placeholder="비밀번호"
                            name="password"
                            required
                        /> 
                    </fieldset>
                    <button type='submit' className='regular-login'>로그인</button>
                    <button type='button' onClick={handleGoogleLogin} className='google-login'>
                        <img src='/google_icon.png' alt="google icon"/>
                        구글 로그인
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Login; 