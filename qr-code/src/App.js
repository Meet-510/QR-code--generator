import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";
import { createContext, useState } from "react";

export const InputContext = createContext();
function App() {
  const [inputValue, setInputValue] = useState({ url: "", color: "" });

  const value = {
    inputValue,
    setInputValue,
  };
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-700 h-screen pt-36 px-2">
      <div className="container mx-auto max-w-4xl rounded-md shadow">
        <div className="md:grid md:grid-cols-3 bg-white rounded-md shadow-lg shadow-black  ">
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
