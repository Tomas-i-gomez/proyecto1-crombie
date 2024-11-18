import React from 'react'
import Image from 'next/image'
const page = () => {
  return ( <>
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    <h1 className="font-sans text-3xl font-bold text-center text-black-900 mb-6">Iniciar Sesión</h1>
    <form className="space-y-4">
      <div>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          className="w-full p-3 border border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-black-500"
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="w-full p-3 border border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-black-500"
        />
      </div>
      <button 
        type="submit" 
        className="w-full p-3 bg-black text-white rounded-3xl hover:bg-black-700 transition duration-300">
        Iniciar Sesión
      </button>
    </form>
  </div>
</div>

  
  </>
    
  )
}

export default page