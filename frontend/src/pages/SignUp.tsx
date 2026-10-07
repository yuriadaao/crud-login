import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import type { FormEvent } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    birthDate: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  function passwordValidation() {
    const numeros = /\d/.test(formData.password);
    const minusculas = /[a-z]/.test(formData.password);
    const maiusculas = /[A-Z]/.test(formData.password);
    const especiais = /[^a-zA-Z0-9\s]/.test(formData.password);

    if (formData.password.length < 8) {
      console.log("Sua senha precisa ter ao menos 8 caracteres");
      return false;
    } else if (!numeros) {
      console.log("A senha precisa conter números");
      return false;
    } else if (!minusculas || !maiusculas) {
      console.log(
        "A senha deve conter ao menos uma letra maíuscula e uma minuscula",
      );
      return false;
    } else if (!especiais) {
      console.log("sua senha deve conter ao menos um caractér especial");
      return false;
    } else if (formData.password !== formData.confirmPassword) {
      console.log("As senhas não coincidem");
      return false;
    }
    return true;
  }

  function registerUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!passwordValidation()) {
      return;
    }
    console.log(formData);
  }

  return (
    <form
      onSubmit={registerUser}
      className=" flex flex-col gap-5 w-md mx-auto mt-20 p-15 border-pink-300 shadow-sm rounded-md"
    >
      <Input
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
        type="email"
        placeholder="Email"
        required
      />
      <Input
        value={formData.fullName}
        onChange={(e) =>
          setFormData({
            ...formData,
            fullName: e.target.value,
          })
        }
        type="text"
        placeholder="Full Name"
        required
      />
      <Input
        value={formData.birthDate}
        onChange={(e) =>
          setFormData({
            ...formData,
            birthDate: e.target.value,
          })
        }
        type="date"
        placeholder="Birth Date"
        required
      />
      <Input
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
        type="text"
        placeholder="Phone Number"
        required
      />
      <Input
        value={formData.address}
        onChange={(e) =>
          setFormData({
            ...formData,
            address: e.target.value,
          })
        }
        type="text"
        placeholder="Address"
        required
      />
      <Input
        value={formData.password}
        onChange={(e) =>
          setFormData({
            ...formData,
            password: e.target.value,
          })
        }
        type="password"
        placeholder="Password"
        required
      />
      <Input
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({
            ...formData,
            confirmPassword: e.target.value,
          })
        }
        type="password"
        placeholder="Confirm Password"
        required
      />
      <Button
        type="submit"
        className="bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded"
      >
        Sign Up
      </Button>
    </form>
  );
}

export default SignUp;
