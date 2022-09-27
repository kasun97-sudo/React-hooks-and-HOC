import {useState , useEffect} from "react";
import './App.css';



function App() {

  const decrement = () => {
    setState(prevState => {
      return {
        ...prevState,
        count : prevState.count -1
      }
    })
  }

  const [state , setState] = useState({count : 4 , theme : "blue"});


  return (
    <div className="App">
      <button>+</button>
      <p>{state.count}</p>
      <p>{state.theme}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
