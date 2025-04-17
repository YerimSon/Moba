import Link from 'next/link';

const Main = () => {
    return (
        <>
            <main>
                <div className="container">
                    <p className="main-text">
                        오늘 웹툰 뭐 봐?<br />
                        어디까지 봤는지 기록하자!
                    </p>
                    <Link href="/myrecord">
                        <button className="go">기록하러 가기</button>
                    </Link>
                    <div className="slider">
                        <div className="slide-track">
                            <div className="slide">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kakao_page_logo.png/600px-Kakao_page_logo.png" alt="kakao" />
                            </div>
                            <div className="slide">
                                <img src="https://play-lh.googleusercontent.com/xy6aWvOex7gmTkm78wWxw9yebCdVZ1pW8nW-4sf1fBg3kHWpOADKEAAjtQa319Ii9mF6=w240-h480-rw" alt="comico" />
                            </div>
                            <div className="slide">
                                <img src="https://play-lh.googleusercontent.com/EYYjj5gd6Lgl5E5rMS0YZ9DRVjlUZP9w3lRpYtlarf7KVupx_KtoD2dHBaDsGjZ-0e9V=w240-h480-rw" alt="bomtoon" />
                            </div>
                            <div className="slide">
                                <img src="https://play-lh.googleusercontent.com/X4mhP3SjZ2lzzqVB8M74zPkkjnyfdSOt0VHU-QgydG5EH9zIkaKVFN14QCmoPH4T0Q=w240-h480-rw" alt="buff" />
                            </div>
                            <div className="slide">
                                <img src="https://play-lh.googleusercontent.com/Bc8lEroMZCEgyXJNRwbU9ADSAxZWFatOF_WDRfNY9tWTQEjqLjN3sRRJ_sTE2dys19Q=w240-h480-rw" alt="lezhin" />
                            </div>
                            <div className="slide">
                                <img src="https://play-lh.googleusercontent.com/Kj4DyphdPYb6JFjyq8l9fgt357iuLviS0Praq9WAzAxMtHlh8x25f4PJ8756HXGf_Q=w240-h480-rw" alt="mrblue" />
                            </div>
                            <div className="slide">
                                <img src="https://play-lh.googleusercontent.com/8r9Q5s1O6gnmwqmVHz8Wi1nRbrWe26gldYMxSdR8hFXQlKM7-JuVRG1kLAxgX2wCAAc=w240-h480-rw" alt="naver" />
                            </div>
                            <div className="slide">
                                <img src="https://play-lh.googleusercontent.com/DeT5RhpoIGFi8odoca9hFx9OPknaFy7LZ4sRonubFb31wD5YPult0jjIL6B_McbzxuxF=w240-h480-rw" alt="ridi" />
                            </div>
                            <div className="slide">
                                <img src="https://play-lh.googleusercontent.com/DUS5sjyQsaE9Us4WuJ4_CPMyBgdqV4YJGpdWmoiOOQ-3GJALRprXWNlqDTPip6X1JTOw=w240-h480-rw" alt="toomics" />
                            </div>
                            <div className="slide">
                                <img src="https://play-lh.googleusercontent.com/F2GkE5F05auv_vXhWFkPmmKqv1l2SZUEqoUKAgReX89znIInnmGQfsNPkeKjND5Zkg=w240-h480-rw" alt="toptoon" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main; 