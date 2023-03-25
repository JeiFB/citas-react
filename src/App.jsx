import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes]=useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  // useEffect(()=>{
  //   const obtenerLS = () =>{
  //     const pacientesLS =  JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS)
  //   }
  //   obtenerLS();
  // },[]);

  //si el arreglo esta vacio, se ejecutara una sola vez
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])



  const eliminarPaciente = id =>{
    const pacienteActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacienteActualizados);
  }
  return (
    <div className="container mx-auto mt-20">
    <Header />
      <div className="mt-12 md:flex">
        <Formulario
         // pacientes = {pacientes}//tuve un problema con eso y era que no habia puesto esta linea ahi, y resultaba que esa mandaba el array de pacientes a formulario y me tenia con dolor de cabeza pq no entendia pq no se agregaba pacientes y era pq no le pasaba el array
         //aunque hacer de esta manera es opcional ya que setPcientes manda directamente un array y se puede usar una arrow funtion, se pasa la varaible del hook en este caso pacientes setPacientes((pacientes) => [...pacientes, objetoPaciente]) este codigo lo encuentras en formulario
         pacientes={pacientes}
         setPacientes = {setPacientes}
         paciente = {paciente}
         setPaciente={setPaciente}
          
        />
          
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    
    </div>
  )
}

export default App
