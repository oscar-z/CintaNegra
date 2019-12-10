import React from "react";

class formLogin extends React.Component {
  state = {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = e => {
    console.log("Button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Registrarse</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="nombreCompleto"
              value={this.props.formValues.nombreCompleto}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="password"
              value={this.props.formValues.password}
            />
          </div>


          <button onClick={this.handleClick} className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default formLogin;
