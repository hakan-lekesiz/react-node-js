import { useState, useCallback } from "react";
import Todos from "./Todos";
 
//bir bileşenin değeri değişmedikçe yeniden render etmez

//useMemo returns a memoized value
//useCallback returns a memoized function.

function UseCallBackEx() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  //todos değişkeni diğer fonskiyonlardan izole edildi böylece diğer funclar çalıştığında yani diğer componenetlerde bir değişiklik olduğunda eğer todos değişkenin bir değişiklik yoksa re-render edilmeyecek
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  return (
    <div style={{ background: "blue" }}>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default UseCallBackEx;
