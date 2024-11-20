"use client";


import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Login = () => {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loggedIn = async () => {
    if (email === "ejemplo@mail.com" && password === "123"){
        localStorage.setItem("Logged", "true")
        router.push("/dashboard")}
    else {
        alert ("Acceso incorrecto")
      }
    }

  return ( <>
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    <h1 className="font-sans text-3xl font-bold text-center text-black-900 mb-6">Iniciar Sesión</h1>
    
      <div>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value = {email}
          onChange = {((e) => setEmail(e.target.value))}
          className="w-full p-3 border border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-black-500"
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={((p) => setPassword(p.target.value))}
          className="w-full p-3 border border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-black-500"
        />
      </div>
      <button 
        onClick={loggedIn}
        className="w-full p-3 bg-black text-white rounded-3xl hover:bg-black-700 transition duration-300">
        Iniciar Sesión
      </button>
    
  </div>
</div>

  
  </>
    
  )
}

export default Login