"use client";

import { useState } from "react";
import useForm from "@/customHooks/useForm";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";

export default function Home() {
  const [formStatus, setFormStatus] = useState<string>("login"); // ["login", "signup"
  const { formState, handleChange } = useForm({
    name: "",
    user: "",
    email: "",
    password: "",
  });
  return (
    <>
      {formStatus === "login" ? (
        <Login
          {...formState}
          setFormState={handleChange}
          setFormStatus={setFormStatus}
        />
      ) : (
        <Register
          {...formState}
          setFormState={handleChange}
          setFormStatus={setFormStatus}
        />
      )}
    </>
  );
}
