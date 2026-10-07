import type { ButtonHTMLAttributes } from "react";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bg-pink-700 hover:bg-pink-900 mt-6 text-white font-bold py-2 px-4 rounded"
    >
      {props.children}
    </button>
  );
}

export default Button;
