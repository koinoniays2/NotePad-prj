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
- 랜덤 명언 API 초기 렌더링시 한번만 출력
- 추가 버튼 클릭 시 입력 창 띄우기
- 리스트 클릭 시 입력 창 띄워서 업데이트 & 삭제
- react-sortablejs 라이브러리를 이용하여 드래그 앤 드롭 기능 추가
- localStorage에 데이터 저장 기능
### 실행화면
[메모장](https://singular-jelly-e99f89.netlify.app/) (PC만 지원합니다.) 
#### API(실패, 로딩, 성공시 화면)
API를 불러오는 데 실패했을 경우 에러 메세지 출력  
![API-error](https://github.com/koinoniays2/NotePad-prj/assets/150204668/1c9724ab-dd78-4c2a-a09b-ea5fb9a88d4a)  
로딩중일 경우 로딩 메세지 출력  
![API-loading](https://github.com/koinoniays2/NotePad-prj/assets/150204668/f3b011ce-f35a-4188-846c-c05a1af51a0d)  
성공했을 경우 랜덤 명언 렌더링  
![API-ok](https://github.com/koinoniays2/NotePad-prj/assets/150204668/94db438e-21f9-49f3-8664-f3877e245016)  
#### 추가 버튼 클릭시(CREATE)
입력창과 등록 가능한 버튼 활성화  
![add](https://github.com/koinoniays2/NotePad-prj/assets/150204668/fc33bb1f-fa4d-4bcd-b42d-d3ae06e458f0)  
화면에 추가되는 모습  
![add-print](https://github.com/koinoniays2/NotePad-prj/assets/150204668/cebc8cb9-bb5b-4d15-afe3-13eceb37ffd4)  
#### 드래그 앤 드롭, 로컬스토리지 저장
드래그 앤 드롭으로 순서 변경  
![sort](https://github.com/koinoniays2/NotePad-prj/assets/150204668/d3ea8d7e-8394-41d0-9c48-12faa1f7e631)  
로컬 스토리지에 반영되어 저장 된 모습  
![storage](https://github.com/koinoniays2/NotePad-prj/assets/150204668/abe4fa51-f200-4c90-9f95-4949c5961428)  
#### 리스트 클릭 시(UPDATE, DELETE)
입력창과 삭제, 수정 가능한 버튼 활성화  
![update](https://github.com/koinoniays2/NotePad-prj/assets/150204668/62d8fd96-79df-4a0b-bae0-b7d6fac1d9ea)  
삭제, 수정 후 화면  
![del-update](https://github.com/koinoniays2/NotePad-prj/assets/150204668/081053ef-b383-44e0-a9a3-716a18babd6a)  
로컬 스토리지에 반영 된 모습  
![storage-del-update](https://github.com/koinoniays2/NotePad-prj/assets/150204668/9b69ff4f-c724-48e5-b458-7f181b877629)  
### 소감 및 자체평가
모달 창을 컴포넌트로 만들지 못해 아쉬움이 남고  
공백 & 줄바꿈 입력값을 유지하여 출력(whitespace-pre-line)하는 css속성을 새롭게 알게 되었습니다.  
리액트에 익숙해지기 위해 한 프로젝트라 완성하는 데 시간이 걸렸으며 어려운 부분이 많았습니다.  
코드를 작성하면서 아직 리액트에 대한 이해도가 많이 떨어진다고 느껴져서  
이론을 보충하고 새로운 프로젝트를 만들어 볼 생각입니다.

<!-- 예외처리 방법 참고 : https://velog.io/@dom_hxrdy/React-fetch%ED%96%88%EC%9D%84-%EB%95%8C-%EC%98%88%EC%99%B8%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0 -->
