import { MyContext } from "../Context";
import { useContext } from "react";

const NumberButton = (props) => {
  const changeContext = useContext(MyContext);
  let lastElement=changeContext.val.slice(0,1)
  return (
    <input
      value={props.value}
      type="button"
      key={props.k}
      onClick={function () {

        if(
          (lastElement[0] === 0 || lastElement[0] === "")  
           && changeContext.val.length === 1 ){
          changeContext.setVal(() => [props.value]);
        }
  
        else{
           changeContext.setVal((e) => [...changeContext.val, props.value]);
        }

  
      }}
    />
  );
};

export default NumberButton;
