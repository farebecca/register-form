import React from "react";
import { FormInput } from "../FormInput";

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      email: "",
      cpf: "",
      phone: ""
    };
  }
  render() {
    return (
      <form>
        <FormInput label="nome completo" value={this.state.name} />
        <FormInput label="cidade" value={this.state.city} />
        <FormInput
          inputType="email"
          label="email"
          placeholder="email@email.com"
          value={this.state.email}
        />
        <FormInput
          label="cpf"
          placeholder="000.000.000-00"
          value={this.state.cpf}
        />
        <FormInput
          label="telefone"
          placeholder="(xx) xxxxx-xxxx"
          value={this.state.phone}
        />
      </form>
    );
  }
}
