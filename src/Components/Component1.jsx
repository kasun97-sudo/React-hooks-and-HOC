import {useState , useEffect , useRef , useMemo , useContext} from "react";
import HigherOrderComponent from './HigherOrderComponent';
import FunctionContext from '../Context/FunctionContext';
function Component1(props){

    const func = useContext(FunctionContext);

    const showR = () => {
        console.log(func.count);
    }

    return (
        <div>
            <h1>Hello from component 1</h1>
            <button onClick={func.increment}>Click Component +</button>
        </div>
    )
}

export default HigherOrderComponent(Component1);