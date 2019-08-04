import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newFolder } from "../../actions/authActions";
import classnames from "classnames";

//const usuario = this.props.auth;
var vusuario = "";

class NewFolder extends Component {
  constructor() {
    super();
    this.state = {
      user: vusuario,
      foldername: "",
      description: ""
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/newfolder");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newFolder = {
      user: vusuario,
      foldername: this.state.foldername,
      description: this.state.description
    };

    this.props.newFolder(newFolder, this.props.history);
  };

  render() {
    //const { errors } = this.state;

    const { user } = this.props.auth;
    vusuario = user.id;
    console.log(vusuario);

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Nuevo Folder</b>
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.user}
                  id="user"
                  type="hidden"
                />
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.foldername}
                  id="foldername"
                  type="text"
                />
                <label htmlFor="name">Folder Name</label>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.description}
                  id="description"
                  type="text"
                />
                <label htmlFor="name">Folder Description</label>
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Nuevo Folder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

NewFolder.propTypes = {
  newFolder: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { newFolder }
)(withRouter(NewFolder));
