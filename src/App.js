import {useState , useEffect , useRef , useMemo} from "react";
import './App.css';



function App() {

  const [number , setNumber] = useState(1);
  const [dark , setDark] = useState(true);

  function slowFunction(number){
    console.log("call the slow function " + number);
    for(let i=0;i<1000000;i++){}
    return number*2;
  }

  useMemo(() => {
    const doubleNumber = slowFunction(number);
  } , [number]);

  const colorChange = () => {
    setDark(!dark);
  }


  return (
    <div className="App">
      <input />
      <button onClick={colorChange}>Change Theme</button>
      <p style={{backgroundColor: dark ? "black" : "white"}}>Hello</p>
    </div>
  );
}

export default App;
