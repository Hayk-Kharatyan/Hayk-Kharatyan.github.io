import { MyContext } from "../Context";
import { useContext } from "react";


function AC(){
    const changeContext = useContext(MyContext);
   
return(
    <input value="AC" type="button" onClick={function(){
        changeContext.setVal([""]);
    }}/>
)
}

export default AC