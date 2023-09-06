import React, { useContext } from 'react'
import { MyContext } from '../Context';

export default function Pi(props) {
    const changeContext = useContext(MyContext);
    const text = props.value.reduce((elem, e) => (e = elem + e), "");

  return (
    <input value="PI" type="button" onClick={function(){
        changeContext.setVal([Math.PI*text]);
        console.log("pi",Math.PI*props.value);
    }}/>
  )
}
