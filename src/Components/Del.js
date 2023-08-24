import { MyContext } from "../Context";
import { useContext } from "react";


function Delete(){
    const changeContext = useContext(MyContext);
    return(
        <input value="DEL" type="button" onClick={function(){
            changeContext.setVal((prev) => prev.slice(0, -1));
        }}/>
    )

}

export default Delete