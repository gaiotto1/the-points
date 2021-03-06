import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './styleHome.css';
import logo from '../../img/logo.png';

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
          <img className="logo" src={logo} alt="logo"/>
          <div className="container-button">
              <button type="button" onClick={() => this.setState({ desenvolvimento: true })} className="buttonDesen">
                Desenvolvimento
              </button>
            </div>

            <div className="container-button">
              <button type="button" onClick={() => this.setState({ melhoria: true })} variant="contained" color="primary" className="buttonMelhoria">
              Melhorias
              </button>
            </div>

            <div className="container-button">
              <button type="button" onClick={() => this.setState({ manutencao: true })} variant="contained" color="primary" className="buttonManu">
              Manutenções
              </button>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
