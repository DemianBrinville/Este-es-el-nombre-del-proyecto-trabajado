import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const uno = "";
  const dos = "";
  const tres = "";
  const cuatro = "";
  const cinco = "";
  return (
    <>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{count}</p>
      {count <= 10 ? (
        <p>Este mensaje aparece si count es menor o igual a 10</p>
      ) : (
        <p>Este mensaje aparece si count es mayor a 10</p>
      )}
    </>
  );
}

export default App;
