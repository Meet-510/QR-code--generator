import { useContext } from "react";
import InputColor from "./InputColor";
import InputField from "./InputField";
import { InputContext } from "../App";

const InputForm = () => {
  const { getQrCode, inputValue } = useContext(InputContext);
  const handleSubmit = () => getQrCode();
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
      <button
        disabled={!inputValue.url}
        onClick={handleSubmit}
        className="bg-gray-400 max-w-xs ml-auto px-4 py-2 text-white mt-4 rounded-lg hover:bg-gray-500 hover:scale-105 duration-500 disabled:bg-gray-100"
      >
        Generate QRcode
      </button>
      <footer className="text-gray-700">Made by Meet</footer>
      <h6>for learning purpose</h6>
    </div>
  );
};
export default InputForm;
