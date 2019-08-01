import React, { Component } from "react";
import { MDBDataTable, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "./../../actions/API";
import { logoutUser } from "../../actions/authActions";

//var userp = "";

//const misFolders = [];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      misFolders: []
    };
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  //when this component mounts, grab all books that were save to the database
  componentDidMount() {
    API.getFolder()
      .then(res => this.setState({ misFolders: res.data }))
      .catch(err => console.log(err));
  }

  /* handleRowClick(nid) {
    console.log("nid");
    console.log(nid);
  }
*/

  NewFolder = () => {
    console.log("Redirect");
    this.props.history.push("/newfolder");
    //return <Redirect to="/newfolder" />;
  };

  handleRowClick = nid => {
    console.log(nid);
  };

  render() {
    const { user } = this.props.auth;

    //  console.log(misFolders);
    //console.log(this.state.savedFolders);
    //userp = user.id;

    const sFolders = { ...this.state.misFolders };
    console.log("this.state.misFolders");
    console.log(this.state.misFolders);

    let FoldersRow = [];
    var n;
    var click = "";
    var temporal = {};
    let varp = "";
    for (n = 0; n < this.state.misFolders.length; n++) {
      temporal = {};
      click =
        "clickEvent: this.handleRowClick(" + this.state.misFolders[n]._id + ")";
      let varp = "";
      varp = this.state.misFolders[n]._id;
      console.log(varp);
      temporal = {
        foldername: this.state.misFolders[n].foldername,
        description: this.state.misFolders[n].description,
        handle: (
          <MDBBtn color="green" rounded size="sm">
            Abrir
          </MDBBtn>
        ),
        clickEvent: () => this.handleRowClick(varp)
      };
      console.log("temporal");
      console.log(temporal);
      FoldersRow.push(temporal);
    }

    console.log("FoldersRow");
    console.log(FoldersRow);

    const data = {
      columns: [
        {
          label: "Nombre del Folder",
          field: "foldername",
          sort: "asc",
          width: 150
        },
        {
          label: "Descripción",
          field: "description",
          sort: "asc",
          width: 270
        },
        {
          label: "Accion",
          field: "accion",
          sort: "asc",
          width: 150
        }
      ],
      rows: FoldersRow
      /* [
        //  FoldersRow

        {
          name2: "Tiger Nixon",
          position: "System Architect"
        }
      ]*/
    };

    return (
      <div style={{ height: "45vh" }} className="container valign-wrapper">
        <MDBContainer>
          <MDBRow className="row justify-content-end">
            <div className="row justify-content-end">
              <MDBCol>
                <MDBBtn color="elegant" onClick={this.NewFolder}>
                  + Nueva Carpeta
                </MDBBtn>
              </MDBCol>
            </div>
          </MDBRow>

          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You are logged into a full-stack{" "}
                  <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                </p>
              </h4>
              <MDBDataTable btn striped bordered small data={data} />
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
              </button>
            </div>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
