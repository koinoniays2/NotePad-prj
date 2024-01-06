import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import Quote from "./Quote";

export default function App() {
  // 모달창 상태변경(hidden, block)
  const [hidden, setHidden] = useState("hidden");
  // 추가 버튼 클릭시 모달창 block
  const addBtn = () => setHidden("block");
  // input 입력 값 받아오기
  const [value, setValue] = useState({title: "", body: ""});
  const inputValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    }
    );
  }

  // content에 내용 저장
  const [content, setContent] = useState([]);
  console.log(content);
  // Key
  const [key, setKey] = useState(1);
  // 모달창 등록 버튼
  const saveBtn = () => {
    setHidden("hidden");
    const newValue = content.concat({
      key: key,
      title: value.title,
      body: value.body
    })
    setContent(newValue);
    setKey(key + 1);
  }

  return (
    <div className="App">
      {/* 헤더 */}
      <Header title="Memo" />
      {/* 명언 */}
      <article>
        <Quote />
      </article>
      {/* 메인 */}
      <main className="w-1/3 flex flex-col justify-center mt-4">
        <div className="w-full h-10 relative">
          <div className="absolute right-0">
            <Button value="추가" clickEvent={addBtn} />
          </div>
        </div>
        <section className="w-full flex flex-col justify-center items-center p-5 bg-yellow-100">
          <ul>
            {content.map((item) => {
              return (
                <li className="py-1" key={item.key}>{item.title}</li>
              )
            })}
          </ul>
        </section>
      </main>
      {/* 모달창 배경*/}
      <section id="modal" className={`${hidden} absolute top-0 w-full h-screen bg-black bg-opacity-50
    flex items-center justify-center`}>
        {/* 모달창 내용 */}
        <div className="w-1/2 h-1/2 bg-[#F6F6F6] relative flex flex-col items-center justify-center">
          {/* X 버튼 클릭시 모달창 hidden*/}
          <button className="absolute right-5 top-3 px-3 text-[2rem]" onClick={() => `${setHidden("hidden")}`}>X</button>
          {/* 입력 란 */}
          <input className="outline-none w-1/2 p-2 mb-6" onChange={inputValue} type="text" name="title" placeholder="제목" />
          <textarea className="outline-none w-1/2 h-1/2 p-2" onChange={inputValue} name="body" placeholder="내용" />
          <div className="absolute right-0 bottom-0 mr-5 mb-3">
            <Button value="등록" clickEvent={saveBtn} />
          </div>
        </div>
      </section>
    </div>
  );
}