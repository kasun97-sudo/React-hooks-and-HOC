import {useState , useEffect , useRef , useMemo , useContext} from "react";
import HigherOrderComponent from './HigherOrderComponent';
import FunctionContext from '../Context/FunctionContext';
function Component2(props){

    const func = useContext(FunctionContext);

    return (
        <div>
            <h1>Hello from component 2</h1>
            <button onClick={func.decrement}>Click Component -</button>
        </div>
    )
}

export default HigherOrderComponent(Component2);