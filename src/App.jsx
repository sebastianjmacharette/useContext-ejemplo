import React from "react";
import { AuthProvider } from "./AuthProvider";
import LoginForm from "./LoginForm";

export default function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 text-white">
        <h1 className="text-3xl font-bold mb-6 shadow-lg p-4 bg-white text-gray-800 rounded-lg">Sistema de Login con useContext</h1>
        <LoginForm />
      </div>
    </AuthProvider>
  );
}
