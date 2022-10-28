import {useState , useEffect , useRef , useMemo} from "react";
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import FunctionContext from './Context/FunctionContext';
import './App.css';



function App() {

  const [number , setNumber] = useState(1);
  const [color , setColor] = useState("");

  const colorChange = () => {
    color = "blue";
  }

  const [count , setCount] = useState(0);

  const increment = () => {
    setCount(prevState => prevState + 1);
  }

  const decrement = () => {
    setCount(prevState => prevState - 1);
  }

  return (
    <div className="App">
      <FunctionContext.Provider value={{count , increment , decrement}}>
      <h1>{count}</h1>
      <Component1 />
      <Component2 />
      </FunctionContext.Provider>
    </div>
  );
}

export default App;
