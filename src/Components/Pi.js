import React, { useContext } from 'react'
import { MyContext } from '../Context';

export default function Pi(props) {
    const changeContext = useContext(MyContext);

  return (
    <input value="PI" type="button" onClick={function(){
        changeContext.setVal([Math.PI]);
    }}/>
  )
}
