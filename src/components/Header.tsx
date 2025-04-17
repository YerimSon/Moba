import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { auth } from '../firebase';
import { User } from 'firebase/auth';

interface HeaderProps {
    user: User | null;
}

function Header({ user }: HeaderProps) {
    const router = useRouter();
    const userName = user?.displayName;

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                router.push("/");
            })
            .catch((err) => {
                console.error(err instanceof Error && err.message);
            });
    };

    return (
        <>
            <header className="header">
                <Link href="/"><h1 className="logo">MoBa</h1></Link>
                <div className="login-button">
                    {
                        userName ? 
                        <>
                            <p>{userName}님</p>
                            <p onClick={handleSignOut}>로그아웃</p>
                        </>
                        :
                        <>
                            <Link href="/login"><p>로그인</p></Link>
                            <Link href="/signup"><p>회원가입</p></Link>
                        </>
                    }
                </div>
            </header>
        </>
    );
}

export default Header; 