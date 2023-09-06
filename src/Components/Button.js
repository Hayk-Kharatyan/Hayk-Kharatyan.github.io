import { MyContext } from "../Context";
import { useContext } from "react";

const Button = (props) => {
    let changeContext = useContext(MyContext);
    const mats = ["+", "-", "*", "/"];

    let a = 1;
    
    function buttonClick() {
      let lastElement = changeContext.val.slice(-1);
      if (mats.includes(lastElement[0])) {
        a++;
      }
      

     
      if (props.value === "="){
        if(lastElement[0]===mats[0] || lastElement[0]===mats[1] ||lastElement[0]===mats[2] || lastElement[0]===mats[3]){
            alert("you haven't finished the calculation")
        }
  else{
    const txt = eval(
      changeContext.val.reduce((elem, e) => (e = elem + e), "")
    );
    changeContext.setVal([txt]);

  }
      
      } 
      else if (a < 2) {
        changeContext.setVal((e) => [...changeContext.val, props.value]);
      }
    }
    


    return(
      
   <input key={props.k} className="btt" value={props.value} type="button" onClick={buttonClick}/>
   
)

    }
export default Button