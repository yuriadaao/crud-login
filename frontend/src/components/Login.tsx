import { useNavigate } from "react-router";
import Input from "./Input";
import SignUp from "../pages/SignUp";
import Button from "./Button";
function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <form className=" flex flex-col gap-5 w-md mt-20 p-10 border-pink-300 shadow-sm rounded-md">
        <Input type="email" placeholder="email" required />
        <Input type="password" placeholder="Password" required />
        <Button
          type="submit"
          className="bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Button>
        <button
          className=" cursor-alias text-blue-800 text-decoration-line: underline text-sm py-2 "
          onClick={() => navigate(`/signup?${SignUp}`)}
        >
          Click here to sign up
        </button>
      </form>
    </div>
  );
}

export default Login;
