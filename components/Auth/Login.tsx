"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

import { AuthContext } from "@/context/AuthContext";

import Input from "@/components/Input";
import Button from "../Button";

interface LoginProps {
  user: string;
  password: string;
  setFormState: (formState: React.FormEvent<HTMLInputElement>) => void;
  setFormStatus: (formStatus: string) => void;
}

const Login: React.FC<LoginProps> = ({
  user,
  password,
  setFormState,
  setFormStatus,
}) => {
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (login) {
      const response = login(user, password);

      if (response) {
        router.push("/dashboard");
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    } else {
      console.error("Login function is undefined");
    }
  };

  return (
    <Card className="w-[400px] lg:w-[580px]">
      <CardHeader className="flex gap-3">
        <h1 className="text-3xl mb-3">¡Inicia sesión!</h1>
      </CardHeader>
      <Divider className="mx-3" />
      <CardBody>
        <form onSubmit={handleSubmit}>
          <Input
            label="User"
            type="text"
            name="user"
            placeholder="Ej. johndoe"
            value={user}
            onChange={setFormState}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="******"
            value={password}
            onChange={setFormState}
          />
          <Button disabled={user === "" || password === ""} type="submit">
            Login
          </Button>
          <p className="text-sm text-[#454545]">
            Aún no tienes una cuenta?{" "}
            <span
              className="text-blue-500"
              onClick={() => setFormStatus("signup")}
            >
              Regístrate
            </span>
          </p>
        </form>
      </CardBody>
    </Card>
  );
};

export default Login;
