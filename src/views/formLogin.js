import React from "react";
import formLogin from "../components/formLogin";


class loginNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <loginNew
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>

            <div className="col-6">
              <formLogin
                firstName={this.state.form.nombreCompleto}
                email={this.state.form.email}
                password={this.state.form.password}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default loginNew;
