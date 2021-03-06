/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './styleDesen.css';
import logo from '../../img/logo.png';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

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
        <img src={logo} alt="logo"  onClick={() => this.setState({ navigate: true })} />
        <h2 className="tipoD">Desenvolvimento</h2>
        <div className="tecladoD">
          <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            onClose={handleClose}
          >
            <DialogContent className="dialogContent">
              <div className="cardNumeroDesen">
                <p>
                  {this.state.number}
                </p>
              </div>
            </DialogContent>
          </Dialog>
          
          <div className="grid-areaD grid-areaD-13" onClick={() => { handleClickOpen('2'); }}>2</div>
          <div className="grid-areaD grid-areaD-14" onClick={() => { handleClickOpen('2'); }}>2</div>
          <div className="grid-areaD grid-areaD-15" onClick={() => { handleClickOpen('1'); }}>1</div>
          <div className="grid-areaD grid-areaD-7"   onClick={() => { handleClickOpen('3'); }}>3</div>
          <div className="grid-areaD grid-areaD-8"   onClick={() => { handleClickOpen('3'); }}>3</div>
          <div className="grid-areaD grid-areaD-9"   onClick={() => { handleClickOpen('2'); }}>2</div>

          <div className="grid-areaD grid-areaD-4"   onClick={() => { handleClickOpen('5'); }}>5</div> 
          <div className="grid-areaD grid-areaD-5"   onClick={() => { handleClickOpen('5'); }}>5</div>
          <div className="grid-areaD grid-areaD-6"   onClick={() => { handleClickOpen('3'); }}>3</div>
          
          <div className="grid-areaD grid-areaD-1"   onClick={() => { handleClickOpen('8'); }}>8</div>
          <div className="grid-areaD grid-areaD-2"   onClick={() => { handleClickOpen('8'); }}>8</div>
          <div className="grid-areaD grid-areaD-3"   onClick={() => { handleClickOpen('5'); }}>5</div>

          <div className="grid-areaD grid-areaD-10" onClick={() => { handleClickOpen('13'); }}>13</div>
          <div className="grid-areaD grid-areaD-11" onClick={() => { handleClickOpen('13'); }}>13</div>
          <div className="grid-areaD grid-areaD-12" onClick={() => { handleClickOpen('8'); }}>8</div>

          <div className="grid-areaD grid-areaD-csharp"></div>
          <div className="grid-areaD grid-areaD-c">C# </div>
          <div className="grid-areaD grid-areaD-del">Uniface </div>
          <div className="grid-areaD grid-areaD-div"> API/WS</div>
          <div className="grid-areaD grid-areaD-mul2">PP</div>
          <div className="grid-areaD grid-areaD-mul">P</div>
          <div className="grid-areaD grid-areaD-add">M</div>
          <div className="grid-areaD grid-areaD-sub">G</div>
          <div className="grid-areaD grid-areaD-igual">GG</div>
        </div>
      </div>
    );
  }
}

export default Calculadora;
