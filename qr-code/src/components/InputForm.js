import InputColor from "./InputColor";
import InputField from "./InputField";

const InputForm = () => {
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
      <button className="bg-gray-400 max-w-xs ml-auto px-4 py-2 text-white mt-4 rounded-lg hover:bg-gray-500 hover:scale-105 duration-500 disabled:bg-gray-100">
        Generate QRcode
      </button>
    </div>
  );
};
export default InputForm;
