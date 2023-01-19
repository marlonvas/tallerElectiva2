import Resultados from "./Resultados"


function ResultadosPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        
        <p className=" text-xl mt-5 mb-10 text-center ">
          
          <span className="text-indigo-600 font-bold">Resultados Imc</span>
        </p>
        <Resultados />
        <Resultados />
        <Resultados />
        <Resultados />
        
        
    </div>
    
  )
}

export default  ResultadosPacientes