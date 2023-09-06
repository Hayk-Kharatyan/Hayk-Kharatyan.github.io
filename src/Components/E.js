import React, { useContext } from 'react'
import { MyContext } from '../Context';

export default function E(props) {
    const changeContext = useContext(MyContext);
    const text = props.value.reduce((elem, e) => (e = elem + e), "");
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <input value="E" type="button" onClick={function(){
          changeContext.setVal([text*Math.E]);
          console.log("E",props.value*Math.E);
      }}/>
      </div>
    )
}
