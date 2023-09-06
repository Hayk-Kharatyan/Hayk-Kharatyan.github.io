import "./App.css";
import Button from "./Components/Button";
import AC from "./Components/AC";
import Input from "./Components/Input";
import NumberButton from "./Components/NuberButton";
import { MyContext } from "./Context";
import { useState } from "react";
import Delete from "./Components/Del";
import Pi from "./Components/Pi";
import X from "./Components/X";
import Sqrt from "./Components/Sqrt";
import E from "./Components/E";
let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(i);
}

const signs = ["+", "-", "*", "/", "="];

function App() {
  const [val, setVal] = useState([]);
  return (
    <div className="App">
      <MyContext.Provider value={{ val: val, setVal: setVal }}>
        <Input value={val} />
        {arr.map((item, i) => (
          <NumberButton value={item} k={i} />
        ))}
        {signs.map((item, i) => (
          <Button value={item} k={i} />
        ))}
        <AC/>
        <Delete/>
        <Pi value={val}/>
        <X value={val}/>
        <Sqrt value={val}/>
        <E value={val}/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
