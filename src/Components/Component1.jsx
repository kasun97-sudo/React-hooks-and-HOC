import {useState , useEffect , useRef , useMemo} from "react";
import HigherOrderComponent from './HigherOrderComponent';
function Component1(props){
    return (
        <div>
            <h1>Hello from component 1</h1>
            <button onClick={props.func}>Click Component 1</button>
        </div>
    )
}

export default HigherOrderComponent(Component1);