import { useState } from "react";

export default function App() {
  const [loginPage, setLoginPage] = useState(false);
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center text-white">
        <button
          className="bg-blue-500 px-4 py-2 rounded-lg mx-2"
          onClick={() => setLoginPage(!loginPage)}
        >
          Login
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded-lg"
          onClick={() => setLoginPage(!loginPage)}
        >
          Signup
        </button>
      </div>
    </>
  );
}
