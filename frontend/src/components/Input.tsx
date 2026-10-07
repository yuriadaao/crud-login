import { type InputHTMLAttributes } from "react";
function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="outline-pink-300  rounded-md p-2 " {...props} />;
}
export default Input;
