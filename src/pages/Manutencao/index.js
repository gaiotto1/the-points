/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import logo from 'C:/Projetos/Calculadora/Calculadora-ReactJS/src/img/logo.png';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import './styleManu.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

class Calculadora extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    number: '',
    open: false,
    navigate: false,
  };

  render() {
    // const [open, setOpen] = useState(false);
    if (this.state.navigate) {
      return <Redirect to="/" push={true} />
    }

    const handleClickOpen = (valor) => {
      // eslint-disable-next-line no-use-before-define
      handleClickNumber(valor);
      // eslint-disable-next-line react/no-unused-state
      this.setState({ open: true });
    };
    const handleClose = () => {
      // eslint-disable-next-line react/no-unused-state
      this.setState({ open: false });
    };
    const handleClickNumber = (valor) => {
      this.setState({ number: valor });
    };
    return (
      <div className="container">
        <img src={logo} alt="logo" onClick={() => this.setState({ navigate: true })} />
        <h2 className="tipoM">Manutenção</h2>
        <div className="teclado">
          
          <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            onClose={handleClose}
          >
            <DialogContent className="dialogContent">
              <div className="cardNumeroManu">
                <p>
                  {this.state.number}
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <div className="grid-areaManu grid-areaManu-7"   onClick={() => { handleClickOpen('1'); }}>1</div>
          <div className="grid-areaManu grid-areaManu-8"   onClick={() => { handleClickOpen('1'); }}>1</div>
          <div className="grid-areaManu grid-areaManu-9"   onClick={() => { handleClickOpen('1'); }}>1</div>
          <div className="grid-areaManu grid-areaManu-4"   onClick={() => { handleClickOpen('2'); }}>2</div>
          <div className="grid-areaManu grid-areaManu-5"   onClick={() => { handleClickOpen('2'); }}>2</div>
          <div className="grid-areaManu grid-areaManu-6"   onClick={() => { handleClickOpen('2'); }}>2</div>
          <div className="grid-areaManu grid-areaManu-1"   onClick={() => { handleClickOpen('3'); }}>3</div>
          <div className="grid-areaManu grid-areaManu-2"   onClick={() => { handleClickOpen('3'); }}>3</div>
          <div className="grid-areaManu grid-areaManu-3"   onClick={() => { handleClickOpen('3'); }}>3</div>
          <div className="grid-areaManu grid-areaManu-10" onClick={() => { handleClickOpen('5'); }}>5</div>
          <div className="grid-areaManu grid-areaManu-11" onClick={() => { handleClickOpen('5'); }}>5</div>
          <div className="grid-areaManu grid-areaManu-12" onClick={() => { handleClickOpen('5'); }}>5</div>
          <div className="grid-areaManu grid-areaManu-csharp"></div>
          <div className="grid-areaManu grid-areaManu-c">C# </div>
          <div className="grid-areaManu grid-areaManu-del">Uniface </div>
          <div className="grid-areaManu grid-areaManu-div"> API/WS</div>
          <div className="grid-areaManu grid-areaManu-mul">P</div>
          <div className="grid-areaManu grid-areaManu-add">M</div>
          <div className="grid-areaManu grid-areaManu-sub">G</div>
          <div className="grid-areaManu grid-areaManu-igual">GG</div>
        </div>
      </div>
    );
  }
}

export default Calculadora;
