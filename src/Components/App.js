import React ,{useState}from 'react'
import './App.css';
import Operadores from './Operadores'
import Numeros  from './Numeros'


const App = () => {
  const [numero,setNumero] = useState(0)
  const [numero2,setNumero2] = useState(0)
  const [operador,setOperador] = useState(null)

  return(
      <div>
        <div><p>{operador} {numero} {numero2}</p></div>

        <Operadores operador={setOperador}/>
        <Numeros numero={setNumero} numero2={setNumero2}/>
      </div>
  );
}
export default App;
