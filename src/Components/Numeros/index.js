import React, { useState } from 'react';


const Numeros = ({ numero,numero2 }) => {
    
    const setNumero = (number)=>{
        if(numero !== 0){
          numero(number);  
        }else{
            numero2(number);
        }
        
        
        
       
    }

    return(
        <div className="numeros">
            <button onClick={() => (setNumero(0))}>0</button>
            <button onClick={() => (setNumero(1))}>1</button>
            <button onClick={() => (setNumero(2))}>2</button>
            <button onClick={() => (setNumero(3))}>3</button>
            <button onClick={() => (setNumero(4))}>4</button>
            <button onClick={() => (setNumero(5))}>5</button>
            <button onClick={() => (setNumero(6))}>6</button>
            <button onClick={() => (setNumero(7))}>7</button>
            <button onClick={() => (setNumero(8))}>8</button>
            <button onClick={() => (setNumero(9))}>9</button>
        </div>
    );
}
export default Numeros
