import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export default () => (
  <BrowserRouter>
    <MDBNav tabs color="indigo">
      <MDBNavItem>
        <MDBNavLink active to="#!">
          Active
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Link 1</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Link 2</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Link 3</MDBNavLink>
      </MDBNavItem>
    </MDBNav>
  </BrowserRouter>
);
