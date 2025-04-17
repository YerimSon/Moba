# Moba - 웹툰 기록 관리 앱

https://moba-record.vercel.app/



Moba는 웹툰 독자들을 위한 기록 관리 웹 애플리케이션입니다. 자신이 읽은 웹툰의 진행 상황을 쉽게 기록하고 관리할 수 있습니다.


## 주요 기능

- 웹툰 기록 추가/수정/삭제
- 플랫폼별 웹툰 관리 (네이버, 카카오페이지, 레진 코믹스 등)
- 에피소드 진행 상황 기록
- 완결 여부 표시
- 요일별 연재 정보 관리

## 기술 스택

- Frontend: React.js
- Backend: Firebase
- Authentication: Firebase Authentication
- Database: Firestore
- Styling: CSS

## 설치 및 실행 방법

1. 저장소 클론
```bash
git clone https://github.com/YerimSon/moba.git
```

2. 의존성 설치
```bash
cd moba
yarn install
```

3. 개발 서버 실행
```bash
yarn start
```

## 사용 방법

1. 회원가입 또는 로그인
2. '새 기록' 버튼을 클릭하여 웹툰 정보 입력
   - 제목
   - 플랫폼
   - 현재까지 본 에피소드
   - 완결 여부
   - 연재 요일
3. '내 기록'에서 등록한 웹툰 목록 확인 및 관리 
