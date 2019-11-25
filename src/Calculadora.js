import React from 'react';
import './Calculadora.css';

class Calculadora extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: '',
      n1: '',
      n2: '',
      operacao: '',
      simbolo: ''
    }
  }

  operacoes = {
    adicionar: function (n1, n2) {
      return n1 + n2;
    },
    subtrair: function (n1, n2) {
      return n1 - n2;
    },
    multiplicar: function (n1, n2) {
      return n1 * n2;
    },
    dividir: function (n1, n2) {
      return n1 / n2;
    }
  }

  handleClickNumero(numero) {
    let displayAtual = this.state.display;
    if (displayAtual.length >= 9)
      return;

    let displayFinal = `${displayAtual}${numero}`;
    this.setState({ display: displayFinal });
  }

  handleClickOperacao(operacao, simbolo) {
    let { display, n1 } = this.state;
    this.setState({ n1: n1 || display, display: '', operacao, simbolo });
  }

  handleClickIgual() {
    let { display } = this.state;
    this.setState({ n2: display, display: '' });

    let operacaoRef = this.operacoes[this.state.operacao];
    let result = operacaoRef(parseFloat(this.state.n1), parseFloat(display));

    this.setState({ display: result });
  }

  handleClickLimpar() {
    this.setState({ display: '', n1: '', n2: '', operacao: '' });
  }

  handleClickPonto() {
    let displayAtual = this.state.display;
    if (displayAtual.indexOf('.') > 0)
      return;

    let displayFinal = `${displayAtual}.`;
    this.setState({display: displayFinal});
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2>Calculadora ReactJS</h2>
          <div className="display">{this.state.display}</div>
          <div className="teclado">
            <div className="grid-area grid-area-1" onClick={() => this.handleClickNumero(1)}>1</div>
            <div className="grid-area grid-area-2" onClick={() => this.handleClickNumero(2)}>2</div>
            <div className="grid-area grid-area-3" onClick={() => this.handleClickNumero(3)}>3</div>
            <div className="grid-area grid-area-4" onClick={() => this.handleClickNumero(4)}>4</div>
            <div className="grid-area grid-area-5" onClick={() => this.handleClickNumero(5)}>5</div>
            <div className="grid-area grid-area-6" onClick={() => this.handleClickNumero(6)}>6</div>
            <div className="grid-area grid-area-7" onClick={() => this.handleClickNumero(7)}>7</div>
            <div className="grid-area grid-area-8" onClick={() => this.handleClickNumero(8)}>8</div>
            <div className="grid-area grid-area-9" onClick={() => this.handleClickNumero(9)}>9</div>

            <div className="grid-area grid-area-na">NA</div>
            <div className="grid-area grid-area-0" onClick={() => this.handleClickNumero(0)}>0</div>
            <div className="grid-area grid-area-ponto" onClick={() => this.handleClickPonto()}>.</div>
            <div className="grid-area grid-area-igual" onClick={() => this.handleClickIgual()}>=</div>

            <div className="grid-area grid-area-ce" onClick={() => this.handleClickLimpar()}>CE</div>
            <div className="grid-area grid-area-c" onClick={() => this.handleClickLimpar()}>C</div>
            <div className="grid-area grid-area-del" onClick={() => this.handleClickLimpar()}>DEL</div>

            <div className="grid-area grid-area-div" onClick={() => this.handleClickOperacao('dividir', '/')}>/</div>
            <div className="grid-area grid-area-mul" onClick={() => this.handleClickOperacao('multiplicar', '*')}>*</div>
            <div className="grid-area grid-area-add" onClick={() => this.handleClickOperacao('adicionar', '+')}>+</div>
            <div className="grid-area grid-area-sub" onClick={() => this.handleClickOperacao('subtrair', '-')}>-</div>
          </div>
          <div className="history">
            <h2>Histórico de Cálculos</h2>
            <p> {this.state.n1}  {this.state.simbolo} {this.state.n2} = {this.state.display} </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculadora;
