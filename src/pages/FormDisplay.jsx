import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const {
      name,
      email,
      cpf,
      address,
      city,
      resume,
      role,
      description,
      uf,
      url,
    } = this.props;
    console.log(url);
    return (
      <section className="box column is-half is-offset-one-quarter">
        <h1 className="title">Dados Enviados</h1>
        <div>{`Nome: ${name}`}</div>
        <div>{`Email: ${email}`}</div>
        <div>{`CPF: ${cpf}`}</div>
        <div>{`Endereço: ${address}`}</div>
        <div>{`Cidade: ${city}`}</div>
        <div>{`Estado: ${uf}`}</div>
        <div>{`Currículo: ${resume}`}</div>
        <div>{`Cargo: ${role}`}</div>
        <div>{`Descrição do Cargo: ${description}`}</div>
        <img src={ url } alt="Imagem de um Dog" />
      </section>
    );
  }
}
FormDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.profile.personal,
  ...state.profile.professional,
  ...state.profile.dog,
});

export default connect(mapStateToProps)(FormDisplay);
