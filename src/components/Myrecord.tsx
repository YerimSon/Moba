import { collection, getDocs } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react"
import Link from 'next/link';
import { db } from "../firebase";


interface Webtoon {
    id: string;
    date: string;
    end: string;
    episode: number;
    platform: string;
    title: string;
    uid: string;
}

interface MyrecordProps {  
    user: {
        uid: string;
    }
}

const Myrecord = ({ user }: MyrecordProps) => {
    const [date, setDate] = useState<string>('월');
    const [record, setRecord] = useState<Webtoon[]>([]);
    const dates: string[] = ['전체', '월', '화', '수', '목', '금', '토', '일', '완결', '휴재'];

    const getWebtoons = useCallback(async () => {
        try {
            const currentUid = user?.uid;
            const querySnapshot = await getDocs(collection(db, "webtoons"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Webtoon)).filter(doc => doc.uid === currentUid);
            setRecord(data);
        } catch (err) {
            console.error(err instanceof Error && err.message);
        }
    }, [user?.uid]);

    console.log(record);

    useEffect(() => {
        getWebtoons();
    }, [getWebtoons]);

    return (
        <div className='record-page'>
            <h1 className='my-record'>내 기록</h1>
            <ul className='platform'>
                {dates.map(item => (
                    <li 
                        key={item} 
                        onClick={() => setDate(item)} 
                        style={{ fontWeight: date === item ? 'bold' : 'normal'}}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <Link href="/myrecord/newrecord">
                <button className='add-button'>+add</button>
            </Link>
        </div>
    );
};

export default Myrecord; 