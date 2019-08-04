import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newFriend } from "../../actions/authActions";
import classnames from "classnames";
import { MDBInput, MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";

//const usuario = this.props.auth;
var vusuario = "";

class NewFriend extends Component {
  constructor() {
    super();
    this.state = {
      id1: vusuario,
      foldername: "",
      description: ""
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/newfriend");
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

    const newFriend = {
      id1: vusuario,
      friendname: this.state.friendname,
      friendemail: this.state.friendemail
    };

    this.props.newFriend(newFriend, this.props.history);
  };

  render() {
    //const { errors } = this.state;

    const { user } = this.props.auth;
    vusuario = user.id;
    console.log(vusuario);

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form noValidate onSubmit={this.onSubmit}>
              <p className="h4 text-center mb-4">New Contact</p>
              <MDBInput
                label="Contact Name"
                onChange={this.onChange}
                value={this.state.friendname}
                id="friendname"
                type="text"
              />
              <MDBInput
                hint="Contact Email"
                type="email"
                onChange={this.onChange}
                value={this.state.friendemail}
                id="friendemail"
              />
              <div className="text-center mt-4">
                <MDBBtn color="green" type="submit">
                  Add New Contact
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

NewFriend.propTypes = {
  newFriend: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { newFriend }
)(withRouter(NewFriend));
