import React, { useContext } from 'react'
import { MyContext } from '../Context';
import "./X.css"
export default function X(props) {
    const text = props.value.reduce((elem, e) => (e = elem + e), "");
    const changeContext = useContext(MyContext);
    return(
        <input className='xtwo' value="X2" type="button" onClick={function(){
            changeContext.setVal([text**2]);   
        }}/>
    )

}
