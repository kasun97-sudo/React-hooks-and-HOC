import {useState , useEffect , useRef} from "react";
import './App.css';



function App() {

  const [name , setName] = useState('');
  const prevName = useRef();


  const focus = () => {
    prevName.current = name;
  }


  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={focus}>Focus</button>
      <p>{name}</p>
      {
        prevName.current ? <>{prevName.current}</> : <></>
      }
    </div>
  );
}

export default App;
