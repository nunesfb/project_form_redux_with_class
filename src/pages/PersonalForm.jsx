import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import { submitPersonalForm } from '../redux/actions/profile';
import { getAddress } from '../services/apiService';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      cep: '',
      address: '',
      city: '',
      uf: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange({ target }) {
    const { name, value } = target;
    const CEP_LENGHT = 8;
    if (name === 'cep' && value.length === CEP_LENGHT) {
      const address = await getAddress(value);
      this.setState({
        address: `${address.street} - ${address.neighborhood}`,
        cep: value,
        city: address.city,
        uf: address.state,
      });
      console.log(address);
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch, history } = this.props;
    dispatch(submitPersonalForm({ ...this.state }));
    history.push('/professional-form');
  }

  render() {
    const { name, email, cpf, cep, address, city, uf } = this.state;

    return (
      <form
        className="box column is-half is-offset-one-quarter"
        onSubmit={ this.handleSubmit }
      >
        <h1 className="title">Informações Pessoais</h1>
        <Input
          label="Nome: "
          type="text"
          onChange={ this.handleChange }
          value={ name }
          name="name"
          required
        />
        <Input
          label="Email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="Cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="Cep: "
          type="text"
          onChange={ this.handleChange }
          value={ cep }
          name="cep"
          required
        />
        <Input
          label="Endereço: "
          type="text"
          onChange={ this.handleChange }
          value={ address }
          name="address"
          required
        />
        <Input
          label="Cidade: "
          type="text"
          onChange={ this.handleChange }
          name="city"
          value={ city }
        />
        <Input
          label="UF: "
          type="text"
          onChange={ this.handleChange }
          name="uf"
          value={ uf }
        />
        <Button
          type="submit"
          label="Próximo"
          moreClasses="is-fullwidth is-info"
          onClick={ this.handleSubmit }
        />
      </form>
    );
  }
}

PersonalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(PersonalForm);
