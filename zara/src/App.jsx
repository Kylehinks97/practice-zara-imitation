import "./App.css";
import List from "./List.jsx";
import Header from "./Header.jsx";
import {useState} from "react"

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Header count={count} />
      <List />
    </>
  );
}

export default App;
