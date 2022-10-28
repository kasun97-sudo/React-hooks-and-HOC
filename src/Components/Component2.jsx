import {useState , useEffect , useRef , useMemo} from "react";
import HigherOrderComponent from './HigherOrderComponent';
function Component2(props){
    return (
        <div>
            <h1>Hello from component 2</h1>
            <button onClick={props.func}>Click Component 2</button>
        </div>
    )
}

export default HigherOrderComponent(Component2);