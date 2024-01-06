import { useEffect, useState } from "react";

export default function Quote() {
    const [quote, setQuote] = useState(""); // 명언
    const [loading, setLoading] = useState(true); // 로딩 상태(true/false)
    const [error, setError] = useState(""); // 에러
    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(response => { // 패치 결과를 받는다.
                if (!response.ok) {
                    throw Error("명언을 불러올 수 없습니다.");
                    /* 결과 받기 실패시, 에러 객체 생성
                    괄호 안의 문자열이 에러 객체 안의 meassage 속성에 저장된다. */
                }
                return response.json()
            })
            .then(json => {
                // 성공시 loading -> false
                setLoading(false);
                setQuote(json.slip.advice);
            })
            .catch(err => {
                // 에러발생 시 loading -> false
                setLoading(false);
                // 에러 발생 시 에러 객체의 meassage로 error상태 변경
                setError(err.message);
            });
    }, []); // 빈 배열 전달 : 리렌더링 될 때마다 명언이 바뀌는 것 방지(처음 렌더링될 때 한번만 API호출)
    return (
        <div className="w-1/3 text-center">
            {loading ? <p>Loading...</p> : <p>{quote}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}