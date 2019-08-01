import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn
} from "mdbreact";

class Navbar2 extends Component {
  constuctor() {
    this.NewFolder2 = this.NewFolder2.bind(this);
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    misFolders: []
  };

  NewFolder2 = () => {
    console.log("Redirect");
    this.props.history.push("/newfolder");
    //return <Redirect to="/newfolder" />;
  };

  render() {
    var navbarStyle = {
      marginTop: 64
    };
    const { user } = this.props.auth;

    return (
      <MDBNavbar color="black" dark expand="md" style={navbarStyle}>
        <MDBNavbarBrand>
          <strong className="white-text">{user.name}</strong>
        </MDBNavbarBrand>

        <MDBNavbarNav left />
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBBtn color="grey" onClick={this.NewFolder2}>
              + Nueva Carpeta
            </MDBBtn>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}
Navbar2.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar2)
);
