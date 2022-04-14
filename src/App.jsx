import "./styles.css";
import { Count } from "./components/Count.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const data = useSelector((state) => state.value);
  const [count, setCount] = useState(data);
  const dispatch = useDispatch();
  useEffect(() => {
    setCount(data);
  }, [data]);
  return (
    <div className="App">
      <Count count={count} />
      <button onClick={() => dispatch({ type: "incremented" })}>Плюс</button>
      <button onClick={() => dispatch({ type: "decremented" })}>Минус</button>
    </div>
  );
}
