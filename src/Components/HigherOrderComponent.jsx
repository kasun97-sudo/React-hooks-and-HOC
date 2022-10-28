import {useState , useEffect , useRef , useMemo , Component} from "react";

export default  function HigherOrderComponent(WrappedComponent){

    function NewComponent(){
        const functionCommon = () => {
            console.log("Hello World!!");
        }
        return <WrappedComponent func={functionCommon}/>
    }
    return NewComponent;
    
}