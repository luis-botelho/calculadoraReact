import React from 'react';
import Numeros  from '../Numeros'
const Operadores = ({operador}) =>{

    return(
        <div>
            <button>/</button>
            <button>-</button>
            <button>+</button>
            <button>x</button>
            <button>=</button>
            <button>C</button>
        </div>
    );
}
export default Operadores