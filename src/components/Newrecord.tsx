import { addDoc, collection } from "firebase/firestore";
import { useRouter } from 'next/router';
import { FormEvent } from "react";
import { db } from "../firebase";

interface NewrecordProps {
    user: {
        uid: string;
    }
}

interface WebtoonData {
    uid: string;
    title: string;
    flatform: string;
    episode: number;
    end: string;
    date: string;
}

interface WebtoonFormElements extends HTMLFormControlsCollection {
    title: HTMLInputElement;
    flatform: HTMLSelectElement;
    episode: HTMLInputElement;
    end: HTMLSelectElement;
    date: HTMLSelectElement;
}

interface WebtoonForm extends HTMLFormElement {
    readonly elements: WebtoonFormElements;
}

const Newrecord = ({ user }: NewrecordProps) => {

    const router = useRouter();

    const handleSubmit = async (e: FormEvent<WebtoonForm>) => {
        e.preventDefault(); 
        
        const form = e.currentTarget;
        const data: WebtoonData = {
            uid: user!.uid,
            title: form.elements.title.value,
            flatform: form.elements.flatform.value,
            episode: parseInt(form.elements.episode.value),
            end: form.elements.end.value,
            date: form.elements.date.value,
        }

        try {
            await addDoc(collection(db, "webtoons"), data);
            router.push("/myrecord");
        } catch (err) {
            console.error(err instanceof Error && err.message);
        }
    }

    return (
        <div className='record-page'>
            <h1 className='new-record'>새 기록</h1>
            <hr className='record-line'></hr>
            <div className='record-page-content'>
                <form onSubmit={handleSubmit} className="record-form">
                    <div className="webtoon-title">
                        <h2 className='record-title'>제목</h2>
                        <input type="text" name="title" placeholder='제목' className='title-input' required/>
                    </div>

                    <div className='webtoon-flatform'>
                        <h2 className='record-flatform'>플랫폼</h2>
                        <select name="flatform" className='flatform' required>
                            <option value="">플랫폼 선택</option>
                            <option value="네이버">네이버 웹툰</option>
                            <option value="카카오페이지">카카오페이지</option>
                            <option value="레진 코믹스">레진 코믹스</option>
                            <option value="리디">리디</option>
                            <option value="코미코">코미코</option>
                            <option value="봄툰">봄툰</option>
                            <option value="미스터블루">미스터블루</option>
                            <option value="버프툰">버프툰</option>
                            <option value="투믹스">투믹스</option>
                            <option value="탑툰">탑툰</option>
                        </select>
                    </div>

                    <div className='webtoon-episode'>
                        <h2 className="record-episode">몇화까지 봤나요?</h2>
                        <input type="number" name="episode" placeholder='에피소드' className='episode-input' min="1" max="5000" required/>
                    </div>

                    <div className='webtoon-end'>
                        <h2 className="record-end">완결 여부</h2>
                        <select name="end" className='end' required>
                            <option value="연재중">연재중</option>
                            <option value="휴재">휴재</option>
                            <option value="완결">완결</option>
                        </select>
                    </div>

                    <div className="webtoon-date">
                        <h2 className="record-end">요일</h2>
                        <select name="date" className='date' required>
                            <option value="월">월</option>
                            <option value="화">화</option>
                            <option value="수">수</option>
                            <option value="목">목</option>
                            <option value="금">금</option>
                            <option value="토">토</option>
                            <option value="일">일</option>
                        </select>
                    </div>

                    <button type="submit">저장</button>
                </form>
            </div>
        </div>
    );
};

export default Newrecord; 