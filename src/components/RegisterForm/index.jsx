import React from "react";
import { FormInput } from "../FormInput";
import { RadioInput } from "../RadioInput";

export const RegisterForm = () => (
  <form>
    <FormInput label="nome completo" />
    <FormInput label="cidade" />
    <FormInput inputType="email" label="email" />
    <FormInput label="cpf" />
    <FormInput inputType="number" label="telefone" />
    <h4>se identifica com o gênero feminino?</h4>
    <RadioInput id="yes" label="sim" value="0" />
    <RadioInput id="no" label="não" value="1" />
  </form>
);
