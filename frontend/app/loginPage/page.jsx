'use client'
import React, {useState} from 'react';
import Image from "next/image"
import leftImage from '../../public/images/rectangle.jpg'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const handleLogin = () => {
    
    if (!email) {
      setEmailError('Por favor, ingresá tu email.');
    } else {
      setEmailError(''); 
    }
    if (!password){
      setPasswordError('Por favor, ingresá tu contraseña.');
    } else {
      setPasswordError('')
    }
    if (!emailError && !passwordError) {
      // nos logueamos
    }
    
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mitad Izquierda */}
      <div className="md:w-1/2">
        <Image
          src={leftImage}
          alt="Imagen"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mitad Derecha */}
      <div className="md:w-1/2 bg-Morado/100 flex flex-col items-center p-8">
        <h1 className="text-title  text-Azul/800 font-bold mb-12 mt-12">Iniciar sesión</h1>

        <div className="bg-Grises/50 p-7 rounded-lg w-84 h-62">
          {/* input de Correo Electrónico */}
          <div className="mb-4">
            <label className="text-Azul/800 text-14px font-bold " htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="Correo electrónico"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>

          {/* Mensaje de Error */}
          {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}

          {/* input de Contraseña */}
          <div className="mb-2">
            <label className="text-Azul/800 text-14px font-bold" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </div>

          {/* Mensaje de Error */}
          {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}

         
          <div className="text-right">
            <a href="#" className="text-Grises/350 text-sm underline">
              Olvidé mi contraseña
            </a>
          </div>

          {/* Botones */}
          <div className="flex mt-4">
            <button
              className="bg-Morado/700 w-22 h-10 rounded-md py-3.5 px-7 flex items-center justify-center text-white"
              onClick={handleLogin}
            >
              Iniciar
            </button>
            <button className=" text-Azul/800 ml-3 font-semibold px-4 py-2 rounded hover:bg-purple-100 transition duration-300">
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
