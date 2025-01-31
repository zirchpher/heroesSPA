import { useState } from "react";

export const useForm = <T extends Record<string, string>>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState, // Devuelve todas las propiedades del formulario
    formState,
    onInputChange,
    onResetForm,
  };
};
