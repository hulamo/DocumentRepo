import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
/*
<img
              src={process.env.PUBLIC_URL + "documentrepo.jpg"}
              className="img-fluid mx-auto"
              alt="aligment"
            />
*/
class Landing extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow className="mb-4">
          <MDBCol md="6" className="mx-auto" />
        </MDBRow>

        <MDBRow>
          <MDBCol top md="6">
            <MDBRow>
              <MDBCol md="12">
                <h2>¿Do You Need to Organize and Share Your Documents?</h2>
              </MDBCol>
            </MDBRow>
            <br />

            <MDBRow>
              <MDBCol md="12">
                <i
                  className="fas fa-user-friends"
                  style={{ fontSize: "34px", color: "green" }}
                />
                <a style={{ fontSize: "24px" }}>&nbsp; With Your Friends </a>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <i
                  className="fas fa-user-cog"
                  style={{ fontSize: "34px", color: "green" }}
                />
                <a style={{ fontSize: "24px" }}> &nbsp; With Your Team </a>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <i
                  className="fas fa-user"
                  style={{ fontSize: "34px", color: "green" }}
                />
                <a style={{ fontSize: "24px" }}> &nbsp; Make them Public </a>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <i
                  className="fas fa-user-lock"
                  style={{ fontSize: "34px", color: "green" }}
                />
                <a style={{ fontSize: "24px" }}>&nbsp; Keep them Private </a>
              </MDBCol>
            </MDBRow>
            <br />
            <MDBRow>
              <MDBCol md="12">
                <a style={{ fontSize: "44px" }}>
                  You are in the right place...{" "}
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol className="d-sm-block" md="6">
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
/*
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>TeamPencil</b>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Organiza, administra y comparte tu trabajo.
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
*/
export default Landing;
