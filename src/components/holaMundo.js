import React from 'react';

class HolaMundo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mostrarMensaje: false };
  }

  toggleMostrarMensaje(mostrar) {
      this.setState({
          mostrarMensaje: mostrar
      });
  }

  render() {
      return (
          <div>
            <button onClick={() => this.toggleMostrarMensaje(true) }>
              Mostrar mensaje
            </button>
            <button onClick={() => this.toggleMostrarMensaje(false) }>
                Ocultar mensaje
            </button>
            <div>
                { this.state.mostrarMensaje && this.props.mensaje }
            </div>
          </div>
      );
  }
}

export default HolaMundo;
