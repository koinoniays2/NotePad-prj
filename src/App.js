import { useState, useEffect } from "react";
import Button from "./Button";
import Header from "./Header";
import Quote from "./Quote";
import { ReactSortable } from "react-sortablejs";

export default function App() {
  const [memoKey, setMemoKey] = useState(1); // Key
  const [value, setValue] = useState({ key: memoKey, title: "", body: "" }); // input 입력 값 받아오기
  const [hidden, setHidden] = useState("hidden"); // 모달창 상태변경(hidden, block)
  const [addBtn, setAddBtn] = useState("hidden"); // 등록버튼 상태 변경(hidden, block)
  const [updateBtn, setUpdateBtn] = useState("hidden"); // 추가버튼 상태 변경(hidden, block)
  const [delBtn, setDeleBtn] = useState("hidden"); // 삭제버튼 상태 변경(hidden, block)

  // 추가 버튼 클릭시 모달 창이 뜨면서(모달창 block) 등록만 가능(등록 버튼만 block상태)
  const addClick = () => {
    setHidden("block"); // 모달창 block
    setAddBtn("block"); // 등록 버튼 block
    setUpdateBtn("hidden"); // 수정 버튼 hidden
    setDeleBtn("hidden"); // 삭제 버튼 hidden
    setValue({ key: memoKey, title: "", body: "" }); //초기값 설정
  };
  // input 입력 값 받아오기
  const inputValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }
  
  const [content, setContent] = useState(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const storedContent = localStorage.getItem("memoContent");
    return storedContent ? JSON.parse(storedContent) : [];
  });
  // useEffect를 사용하여 content의 변경을 감지하고 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("memoContent", JSON.stringify(content));
  }, [content]);

  // const [content, setContent] = useState([]);
  // 등록 버튼 클릭 시 content에 내용 저장
  const saveClick = () => {
    setHidden("hidden"); // 모달창 hidden
    const newValue = content.concat({
      key: value.key,
      title: value.title,
      body: value.body
    })
    setContent(newValue);
    setMemoKey(memoKey + 1); // 등록 시 Key 상태를 변경시켜 고유 값으로 만들기
  }

  // 리스트 클릭 시 모달창이 뜨면서 수정, 삭제만 가능
  const showClick = (id) => {
    setHidden("block"); // 모달창 block
    setAddBtn("hidden"); // 등록 버튼 hidden
    setUpdateBtn("block") // 수정 버튼 block
    setDeleBtn("block"); // 삭제 버튼 block
    // 저장 된 리스트(content)중 리스트를 클릭했을 때 인자로 받은 key값의 내용을 찾아서 return
    const body = content.find((item) => {
      return (
        item.key === id && item
      )
    });
    setValue({ key: body.key, title: body.title, body: body.body }); // value값에 찾은 내용을 나타낸다.
  };

  // 수정 클릭 시 업데이트
  const updateClick = () => {
    // 리스트를 클릭했을 때(show될 때) 셋팅한 value값을 가져온다.
    setValue({ key: value.key, title: value.title, body: value.body });
    // content에 저장 된 내용중 셋팅된 value의 key와 일치하는 것만 찾는다.
    const updateList = content.map((item) => {
      // 일치하면 기존 값을 복사 후 수정 된 value값을 넣는다.
      if (item.key === value.key) {
        return {
          ...item,
          key: value.key,
          title: value.title,
          body: value.body
        };
      }
      // 변경되지 않았을 경우 기존 내용 그대로 반환
      return item;
    });
    setContent(updateList); // 리턴값으로 내용 업데이트
    setHidden("hidden");  // 모달창 hidden
    setUpdateBtn("hidden"); // 수정버튼 hidden
    setDeleBtn("hidden") //삭제버튼 hidden
  };
  // 삭제 클릭 시 삭제
  const delClick = () => {
    setValue({ key: value.key, title: value.title, body: value.body });
    // content에 있는 key와 show에서 셋팅된 value의 key가 일치하지 않는 것만 반환
    const delList = content.filter((item) => item.key !== value.key);
    setContent(delList);
    setHidden("hidden"); // 모달창 hidden
    setUpdateBtn("hidden"); // 수정버튼 hidden
    setDeleBtn("hidden"); // 삭제버튼 hidden
  };

  return (
    <div className="App">
      {/* 헤더 */}
      <Header title="Memo" />
      {/* 명언 */}
      <article>
        <Quote />
      </article>
      {/* 메인 */}
      <main className="w-full mt-4">
        {/* 추가 버튼 */}
        <div className="w-1/3 h-10 relative">
          <div className="absolute right-0">
            <Button value="추가" clickEvent={addClick} />
          </div>
        </div>
        {/* 메모장 공간 */}
        <div className="w-full flex mt-4">
          {/* 메모장 */}
          <section className="w-1/3 h-[500px] p-5 bg-yellow-100">
            <ul>
              <ReactSortable list={content} setList={setContent}>
              {/* content에 등록 된 내용 렌더링*/}
              {content.map((item) => {
                return (
                  <li className="py-1 border-b border-[#4C4C4C] cursor-pointer" key={item.key} onClick={() => showClick(item.key)}>
                    <p className="font-bold">{item.title}</p>
                    {/* 공백 & 줄바꿈 입력값 유지하여 출력(whitespace-pre-line) */}
                    <p className="whitespace-pre-line">{item.body}</p>
                  </li>
                )
              })}
              </ReactSortable>
            </ul>
          </section>
        </div>
      </main>
      {/* 모달창 배경*/}
      <section id="modal" className={`${hidden} absolute top-0 w-full h-screen bg-black bg-opacity-50
    flex items-center justify-center`}>
        {/* 모달창 내용 */}
        <div className="w-1/2 h-1/2 bg-[#F6F6F6] relative flex flex-col items-center justify-center">
          {/* X 버튼 클릭시 모달창 hidden*/}
          <button className="absolute right-5 top-3 px-3 text-[2rem]" onClick={() => setHidden("hidden")}>X</button>
          {/* 입력 란 */}
          <input className="outline-none w-1/2 p-2 mb-6" onChange={inputValue} type="text" name="title" value={value.title} placeholder="제목" />
          <textarea className="outline-none w-1/2 h-1/2 p-2" onChange={inputValue} name="body" value={value.body} placeholder="내용" />
          {/* 등록 버튼 */}
          <div className={`${addBtn} absolute right-0 bottom-0 mr-5 mb-3`}>
            <Button value="등록" clickEvent={saveClick} />
          </div>
          {/* 수정 버튼 */}
          <div className={`${updateBtn} absolute right-0 bottom-0 mr-5 mb-3`}>
            <Button value="수정" clickEvent={updateClick} />
          </div>
          {/* 삭제 버튼 */}
          <div className={`${delBtn} absolute right-[90px] bottom-0 mr-5 mb-3`}>
            <Button value="삭제" clickEvent={delClick} />
          </div>
        </div>
      </section>
    </div>
  );
}