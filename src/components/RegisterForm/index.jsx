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

  handleChangeName = name => this.setState({ name });
  handleChangeCity = city => this.setState({ city });
  handleChangeEmail = email => this.setState({ email });
  handleChangeCpf = cpf => this.setState({ cpf });
  handleChangePhone = phone => this.setState({ phone });

  handleSubmitForm = () => {
    const { name, city, email, cpf, phone } = this.state;
    if (!name || !city || !email || !cpf || !phone) {
      alert("por favor, preencha todos os campos");
    }
  };

  render() {
    return (
      <form onSubmit={() => this.handleSubmitForm()}>
        <FormInput
          label="nome completo"
          value={this.state.name}
          handleChange={this.handleChangeName}
        />
        <FormInput
          label="cidade"
          value={this.state.city}
          handleChange={this.handleChangeCity}
        />
        <FormInput
          inputType="email"
          label="email"
          placeholder="email@email.com"
          value={this.state.email}
          handleChange={this.handleChangeEmail}
        />
        <FormInput
          label="cpf"
          placeholder="000.000.000-00"
          value={this.state.cpf}
          handleChange={this.handleChangeCpf}
        />
        <FormInput
          label="telefone"
          placeholder="(xx) xxxxx-xxxx"
          value={this.state.phone}
          handleChange={this.handleChangePhone}
        />
        <button>Increver</button>
      </form>
    );
  }
}
