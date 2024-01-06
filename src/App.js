import Header from "./Header";
import Quote from "./Quote";

export default function App() {
  return (
    <div className="App">
      <Header title="Memo"/>
      <article>
        <Quote />
      </article>
    </div>
  );
}