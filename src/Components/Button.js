import { Fragment ,useRef} from "react";

export function MyButton(){
    const buttonStyle = {margin:'10px',border:'2px solid black',height:'300px',width:'300px'}
    const btn ={backgroundColor:'red',borderRadius:'5px',color:'white'}
    const inputRef = useRef(null);
    console.log(inputRef.current)


    function handleClick(){
        inputRef.current.click();
    }

    return (
        <Fragment>
            <div style={buttonStyle}>
            <input type="file" id='inputField' ref={inputRef}/><br/>
            <button onClick={handleClick} style={btn}>Pick the File</button>
            </div>
        </Fragment>
    )
}