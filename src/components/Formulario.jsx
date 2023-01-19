

function Formulario() {
  return (
    <div className='md:w-2/3 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center text-indigo-600'> Seguimiento IMC</h2>
      <p className=' text-lg mt-5 text-center mb-10'>
        
      
      
      </p>

      <form className='bg-indigo-500 shadow-md rounded-lg py-10 px-5 mb-11 '>
        <div className='mb-5'>
          <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>Nombre deL Paciente</label>
          <input  id='nombre' type="text" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Nombre deL Paciente'/>

        </div>

      

      
        <div className='mb-5'>
          <label htmlFor='edad' className='block text-gray-700 uppercase font-bold'>Edad del Paciente</label>
          <input  id='edad' type="text" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Edad del Paciente'/>

        </div>

      
    
        <div className='mb-5'>
          <label htmlFor='altura' className='block text-gray-700 uppercase font-bold'>Altura de Paciente en CM</label>
          <input  id='altura' type="text" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder='Altura de Paciente en CM'/>

        </div>

        <div className='mb-5'>
          <label htmlFor='kilogramos' className='block text-gray-700 uppercase font-bold'>Peso del Paciente en Kilogramos</label>
          <input  id='kilogramos' type="text" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' placeholder=" Peso del paciente" />

        </div>

        
        <input type="submit" value="Calcular su IMC" className='bg-black w-full p-3
         text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded' />

       



      </form>
      
    </div>

    
    
  )
}

export default Formulario