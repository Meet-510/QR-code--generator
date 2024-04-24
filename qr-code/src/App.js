import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";
import { createContext, useState } from "react";
import axios from "axios";

export const InputContext = createContext();
function App() {
  const [inputValue, setInputValue] = useState({ url: "", color: "" });

  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: { Authorization: "Bearer 5f15d3d0-022b-11ef-aa41-0fe19f92c54e" },
  };
  const bodyParameters = {
    colorDark: inputValue.color,
    qrCategory: "url",
    text: inputValue.url,
  };
  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://qrtiger.com/api/qr/static",
        bodyParameters,
        config
      );
      setResponse(res.data.url);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error,
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
