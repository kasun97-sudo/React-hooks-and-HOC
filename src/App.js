import {useState , useEffect , useRef , useMemo} from "react";
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import './App.css';



function App() {

  const [number , setNumber] = useState(1);
  const [color , setColor] = useState("");

  const colorChange = () => {
    color = "blue";
  }


  return (
    <div className="App">
      <Component1 />
      <Component2 />
    </div>
  );
}

export default App;
