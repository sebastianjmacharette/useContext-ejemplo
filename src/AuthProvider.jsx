import React, { createContext, useContext, useState } from "react";

// 🔹 Creamos el contexto de autenticación
const AuthContext = createContext();

// 🔹 Definimos el proveedor de autenticación
export function AuthProvider({ children }) {
  // 🟢 Estado para almacenar el usuario autenticado
  const [user, setUser] = useState(null);

  // 🔹 Función para iniciar sesión, establece el usuario
  const login = (username) => {
    setUser({ name: username });
  };

  // 🔹 Función para cerrar sesión, borra el usuario del estado
  const logout = () => {
    setUser(null);
  };

  return (
    // 🔹 Proveedor que expone el estado y las funciones a los componentes hijos
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 🔹 Hook personalizado para acceder al contexto desde otros componentes
export function useAuth() {
  return useContext(AuthContext);
}
