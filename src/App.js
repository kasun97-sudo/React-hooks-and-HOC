import {useState , useEffect , useRef} from "react";
import './App.css';



function App() {

  const [name , setName] = useState('');
  const inputRef = useRef();


  const focus = () => {
    inputRef.current.focus();
  }


  return (
    <div className="App">
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={focus}>Focus</button>
      <p>{name}</p>
    </div>
  );
}

export default App;
