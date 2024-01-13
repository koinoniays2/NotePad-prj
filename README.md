## 리액트 연습 : 메모장 만들기
### 프로젝트 소개
리액트 연습을 위한 간단한 메모장 프로젝트 입니다.
### 컴포넌트
```
Quote.jsx : 명언 API
Header.jsx : 헤더
Button.jsx : 버튼
```
### 기능구현
- 랜덤 명언 API
- 추가 버튼 클릭 시 입력 창
- 리스트 클릭 시 입력 창, 업데이트 & 삭제 버튼 활성화
- react-sortablejs 라이브러리를 이용하여 드래그 앤 드롭 기능 추가
- localStorage에 데이터 저장 기능
### 실행화면
[메모장](https://singular-jelly-e99f89.netlify.app/) (PC만 지원합니다.) 
#### 추가 버튼 클릭시(CREATE)
입력창과 등록 버튼 활성화  
![CREATE](https://github.com/koinoniays2/NotePad-prj/assets/150204668/e1178136-88b1-423d-a6b0-045dfff9176f)
#### 리스트 클릭 시(UPDATE)
![UPDATE](https://github.com/koinoniays2/NotePad-prj/assets/150204668/1f3f56b5-499a-4bfc-8861-b2016d429001)
#### 드래그 앤 드롭으로 순서 변경
![SORT](https://github.com/koinoniays2/NotePad-prj/assets/150204668/be721cdb-3420-47a3-a006-7836d134a376)  
#### 로컬스토리지 저장(순서 변경 후 그대로 저장 된 모습)
![SORT](https://github.com/koinoniays2/NotePad-prj/assets/150204668/ecc5e9d8-e89e-48a6-8516-7bf0cecfb0aa)
#### 리스트 클릭 시(DELETE)
![DELETE](https://github.com/koinoniays2/NotePad-prj/assets/150204668/3036983f-dd81-4a78-90b7-54c6df296259)
### 소감 및 자체평가
모달 창을 컴포넌트로 만들지 못해 아쉬움이 남고  
리액트에 익숙해지기 위해 한 프로젝트라 완성하는 데 시간이 걸렸으며 어려운 부분이 많았습니다.  
코드를 작성하면서 아직 리액트에 대한 이해도가 많이 떨어진다고 느껴져서  
이론을 보충하고 새로운 프로젝트를 만들어 볼 생각입니다.

<!-- 예외처리 방법 참고 : https://velog.io/@dom_hxrdy/React-fetch%ED%96%88%EC%9D%84-%EB%95%8C-%EC%98%88%EC%99%B8%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0 -->
