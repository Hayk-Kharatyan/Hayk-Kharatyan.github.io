import React, { useContext } from 'react'
import { MyContext } from '../Context';

export default function Sqrt(props) {
    const changeContext = useContext(MyContext);
    const text = props.value.reduce((elem, e) => (e = elem + e), "");

  return (
    <input value="√"
     type="button" onClick={function(){
        changeContext.setVal([Math.sqrt(text)]);
        console.log("armat",Math.sqrt(props.value));
    }}/>
    
  )
}
