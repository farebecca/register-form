import React from "react";
import { FormInput } from "../FormInput";

export const RegisterForm = () => (
  <form>
    <FormInput label="nome completo" />
    <FormInput label="cidade" />
    <FormInput inputType="email" label="email" />
    <FormInput label="cpf" />
    <FormInput inputType="number" label="telefone" />
  </form>
);
