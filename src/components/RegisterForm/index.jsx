import React from "react";
import { FormInput } from "../FormInput";

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("render");
    this.state = {
      name: "",
      city: "",
      email: "",
      cpf: "",
      phone: ""
    };
  }

  handleChange = (name, value) => this.setState({ [name]: value });

  handleSubmitForm = () => {
    const { name, city, email, cpf, phone } = this.state;
    if (!name || !city || !email || !cpf || !phone) {
      return alert("por favor, preencha todos os campos");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <FormInput
          label="nome completo"
          value={this.state.name}
          handleChange={this.handleChange}
          name="name"
        />
        <FormInput
          label="cidade"
          value={this.state.city}
          handleChange={this.handleChange}
          name="city"
        />
        <FormInput
          inputType="email"
          label="email"
          placeholder="email@email.com"
          value={this.state.email}
          handleChange={this.handleChange}
          name="email"
        />
        <FormInput
          label="cpf"
          placeholder="000.000.000-00"
          value={this.state.cpf}
          handleChange={this.handleChange}
          name="cpf"
        />
        <FormInput
          label="telefone"
          placeholder="(xx) xxxxx-xxxx"
          value={this.state.phone}
          handleChange={this.handleChange}
          name="phone"
        />
        <button type="submit">Increver</button>
      </form>
    );
  }
}
