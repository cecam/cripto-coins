"use client";

import { useState } from "react";
const useForm = (initialState: any = {}) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return { formState, handleChange };
};

export default useForm;
