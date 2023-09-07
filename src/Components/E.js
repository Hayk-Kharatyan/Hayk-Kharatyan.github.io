import React, { useContext } from 'react'
import { MyContext } from '../Context';

export default function E(props) {
    const changeContext = useContext(MyContext);
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <input value="E" type="button" onClick={function(){
          changeContext.setVal([Math.E]);
      }}/>
      </div>
    )
}
