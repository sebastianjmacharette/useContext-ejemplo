import React, { useState } from "react";
import { useAuth } from "./AuthProvider";

export default function LoginForm() {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    logout(); // 🔹 Cerramos la sesión del usuario
    setUsername(""); // 🔹 Limpiamos el campo de entrada
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-xl w-96 mx-auto mt-10 border border-gray-200">
      {user ? (
        <>
          <p className="text-2xl font-semibold text-gray-700 mb-4">Bienvenido, {user.name}!</p>
          <button
            onClick={handleLogout} // 🔹 Usamos la nueva función que también limpia `username`
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all shadow-md"
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Iniciar sesión</h2>
          <input
            type="text"
            placeholder="Escribe tu usuario..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-3 text-gray-800 rounded-lg w-full focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            onClick={() => login(username)}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md"
          >
            Iniciar sesión
          </button>
        </>
      )}
    </div>
  );
}
