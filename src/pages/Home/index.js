import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './style.css';
import logo from 'C:/Projetos/Calculadora/Calculadora-ReactJS/src/img/logo.png';

class Home extends Component {
  state = {
    desenvolvimento: false,
    manutencao: false,
    melhoria: false,
  }
  render() {
    if (this.state.desenvolvimento) {
      return <Redirect to="/desenvolvimento" push={true} />
    }
    if (this.state.manutencao) {
      return <Redirect to="/manutencao" push={true} />
    }
    if (this.state.melhoria) {
      return <Redirect to="/melhoria" push={true} />
    }
    return (
      
      <div className="home">
        <div className="container-interno">
          <img src={logo} alt="logo"/>
          <div className="container-button">
              <button type="button" onClick={() => this.setState({ desenvolvimento: true })} className="button">
                Desenvolvimento
              </button>
            </div>

            <div className="container-button">
              <button type="button" onClick={() => this.setState({ melhoria: true })} variant="contained" color="primary" className="button">
              Melhorias
              </button>
            </div>

            <div className="container-button">
              <button type="button" onClick={() => this.setState({ manutencao: true })} variant="contained" color="primary" className="button">
              Manutenções
              </button>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
