import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Resultados from "./components/Resultados"
import ResultadosPacientes from "./components/ResultadosPacientes"




function App() {
  
 

 
  return (
    
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        
      <Formulario />
      
      <ResultadosPacientes />
      

      </div>
      
      
    </div>
  )
}

export default App
