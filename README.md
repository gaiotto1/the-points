# Calculadora com ReactJS

Foi criado uma calculadora com ReactJS, para visualizar a calculadora em funcionamento utilize o link abaixo: 

http://calcreactjs.diogoschimm.eti.br

## Template (Layout)

![image](https://user-images.githubusercontent.com/30643035/69389802-79bf3c80-0ca3-11ea-8c13-3e7d6a2f6881.png)


## Código Fonte

As principais operações da calculadora

```js

    constructor(props) {
        super(props);
        this.state = {
        display: '',
        n1: '',
        n2: '',
        operacao: ''
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

    handleClickOperacao(operacao) {
        let { display, n1 } = this.state;
        this.setState({ n1: n1 || display, display: '', operacao });
    }

    handleClickIgual() {
        let { display } = this.state;
        this.setState({ n2: display, display: '' });

        let operacaoRef = this.operacoes[this.state.operacao];
        let result = operacaoRef(parseInt(this.state.n1), parseInt(display));

        this.setState({ display: result });
    }

    handleClickLimpar() {
        this.setState({ display: '', n1: '', n2: '', operacao: '' });
    }

```

Método Render do Componente

```js
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

                    <div className="grid-area grid-area-div" onClick={() => this.handleClickOperacao('dividir')}>/</div>
                    <div className="grid-area grid-area-mul" onClick={() => this.handleClickOperacao('multiplicar')}>*</div>
                    <div className="grid-area grid-area-add" onClick={() => this.handleClickOperacao('adicionar')}>+</div>
                    <div className="grid-area grid-area-sub" onClick={() => this.handleClickOperacao('subtrair')}>-</div>
                </div>
            </div>
        </React.Fragment>
        );
    }
```

O CSS foi baseado nas técnicas do Grid Layout

```css
    ...

    .display {
        background: rgb(40, 44, 52);
        color: #61dafb;
        padding: 15px;
        height: 70px;
        font-size: 44px;
        text-align: right;
    }

    .teclado {
        display: grid;
        grid-gap: 1px;
        grid-template-columns: 100px 100px 100px 100px;
        grid-template-rows: 90px 90px 90px 90px 90px;
        grid-template-areas: 
            'CE C DEL DIV'
            'A7 A8 A9 MUL'
            'A4 A5 A6 SUB'
            'A1 A2 A3 ADD'
            'NA A0 PONTO IGUAL';
        text-align: center;
    }

    .grid-area {
        font-size: 25px;
        border: 1px solid #f1f1f1;
        padding-top: 25px;
        cursor: pointer;
        background: #e0dfdc;
    } 
    .grid-area:hover {
        background: #9009A0;
        color: #FFF;
    }

    .grid-area-1 {
        grid-area: A1;
        background: #FFF;
    }
    .grid-area-2 {
        grid-area: A2;
        background: #FFF;
    }

    ...
```

