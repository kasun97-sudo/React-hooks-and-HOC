import {useState , useEffect} from "react";
import './App.css';



function App() {

  const [name , setName] = useState(() => "tharindu");
  var number = 10;

  const nameChange = () => {
    setName("tharindu");
    console.log("clicked");
  }

  useEffect(() => {
    setName("kasun");
    console.log("in");
  } , [number]);

  return (
    <div className="App">
      <p>{name}</p>
      <button onClick={nameChange}>click here</button>
    </div>
  );
}

export default App;
