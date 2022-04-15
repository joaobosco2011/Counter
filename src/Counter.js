import React, { useState } from "react";

import "./Counter.css";
import Template from "./Template";

const Counter = () => {
  const [contador, setContador] = useState(0);


  const handleOnClick = (operador) => {
    if (operador == "-") {
      setContador(contador - 1);
    } else {
      setContador(contador + 1);
    }
  };


  // Retorno do componente
  return (

    <Template title={'Contador'}>

      {/* children */}
      <div className="counter">
        <span>{contador}</span>
        <button onClick={() => handleOnClick("-")}>-</button>
        <button onClick={() => handleOnClick("+")}>+</button>
      </div>
      {/* children */}
    </Template>
  );
};

export default Counter;