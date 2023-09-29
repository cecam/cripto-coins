"use client";

import React from "react";

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

import Input from "../Input";
import Button from "../Button";

interface RegisterFormProps {
  name: string;
  user: string;
  email: string;
  password: string;
  setFormState: (formState: React.FormEvent<HTMLInputElement>) => void;
  setFormStatus: (formStatus: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  name,
  user,
  email,
  password,
  setFormState,
  setFormStatus,
}) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usersList = localStorage.getItem("usersList");

    if (!usersList) {
      let newUsersList = [];
      newUsersList.push({ name, user, email, password });
      localStorage.setItem("usersList", JSON.stringify(newUsersList));
    }

    if (usersList) {
      let newUsersList = JSON.parse(usersList);
      newUsersList.push({ name, user, email, password });
      localStorage.setItem("usersList", JSON.stringify(newUsersList));
    }

    setFormStatus("login");
  };
  return (
    <Card className="w-[400px] lg:w-[580px]">
      <CardHeader className="flex gap-3">
        <h1 className="text-3xl mb-3">Crea tu cuenta</h1>
      </CardHeader>
      <Divider className="mx-3" />
      <CardBody>
        <form onSubmit={onSubmit}>
          <Input
            label="Name"
            type="text"
            name="name"
            placeholder="Ej. John Doe"
            value={name}
            onChange={setFormState}
          />
          <Input
            label="User"
            type="text"
            name="user"
            placeholder="Ej. johndoe"
            value={user}
            onChange={setFormState}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Ej. email@email.com"
            value={email}
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
          <Button
            disabled={
              name === "" || user === "" || email === "" || password === ""
            }
            type="submit"
          >
            Crear
          </Button>
          <p className="text-sm text-[#454545]">
            Ya tienes una cuenta?{}
            <span
              className="text-blue-500"
              onClick={() => setFormStatus("login")}
            >
              Inicia sesión
            </span>
          </p>
        </form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
