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

