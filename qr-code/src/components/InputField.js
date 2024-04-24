import { useContext } from "react";
import { InputContext } from "../App";

const InputField = () => {
  const { inputValue, setInputValue } = useContext(InputContext);
  const handleOnChange = (e) =>
    setInputValue({ ...inputValue, url: e.target.value });
  return (
    <div>
      <label className="font-semibold txet-md">Your URL</label>
      <input
        type="url"
        className="w-full border-2 py-1 px-3 text-gray-900 rounded-sm"
        placeholder="https://github.com/Meet-510"
        value={inputValue.url}
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default InputField;
