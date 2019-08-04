import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MDBFileInput } from "mdbreact";
import { newFile } from "../../actions/authActions";
import classnames from "classnames";
import DropzoneComponent from "react-dropzone-component";
import axios from "axios";

//const usuario = this.props.auth;
var vusuario = "";

class NewFile extends Component {
  constructor() {
    super();
    this.state = {
      user: vusuario,
      filename: "",
      description: "",
      file: "",
      filelink: ""
    };

    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "image/jpeg,image/png,image/gif"
    };

    this.componentConfig = {
      iconFiletypes: [".jpg", ".png", ".gif"],
      showFiletypeIcon: true,
      postUrl: "/uploadHandler"
    };

    // If you want to attach multiple callbacks, simply
    // create an array filled with all your callbacks.
    this.callbackArray = [() => console.log("Hi!"), () => console.log("Ho!")];

    // Simple callbacks work too, of course
    this.callback = () => console.log("Hello!");

    this.success = file => console.log("uploaded", file);

    this.progress = file => console.log("progress", file);

    this.removedfile = file => console.log("removing...", file);

    this.dropzone = null;

    this.onChangef = this.onChangef.bind(this);
  }

  //onChangef(e) {
  //  this.setState({filelink: e.target.file[0]});
  //}

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/newfile");
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

  onChangef = e => {
    //console.log(e.target.id);
    //console.log(e.target.files[0]);
    //let reader = new FileReader();
    this.setState({ file: e.target.files[0] });
    this.setState({ filelink: e.target.files[0].name });
    //this.setState({ filelink: e.target.value });
    console.log("File" + e.target.files[0]);
    //let file = e.target.files[0];
    //console.log(reader.readAsDataURL(file));
    //this.setState({
    // [e.target.value]: render.readAsDataURL.e.target.files[0].name
    //[e.target.value]: reader.readAsDataURL(file)
    // });
  };

  onSubmit = e => {
    e.preventDefault();
    /*
    const newFile = {
      user: vusuario,
      filename: this.state.filename,
      description: this.state.description,
      file: this.state.file
    };

    const Data = new FormData();
    Data.append("user", vusuario);
    Data.append("filename", this.state.filename);
    Data.append("description", this.state.description);
    Data.append("file", this.state.file);

    console.log("user New File: " + vusuario);
    console.log("description: " + this.state.description);

    console.log("formData: " + Data.get("user"));
*/
    const data = new FormData();
    data.append("file", this.state.file);
    data.append("user", vusuario);
    data.append("filename", this.state.filename);
    data.append("filelink", this.state.filelink);
    data.append("filedescription", this.state.description);

    axios
      .post("/api/files/add", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });

    // this.props.newFile(Data, this.props.history);
  };

  render() {
    //const { errors } = this.state;
    //const config = this.componentConfig;
    //const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    /*const eventHandlers = {
      init: dz => (this.dropzone = dz),
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile,
      uploadprogress: this.progress
    };
    */
    const { user } = this.props.auth;
    vusuario = user.id;
    console.log("usuario:" + vusuario);

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>New File</b>
              </h4>
            </div>
            <form
              encType="multipart/form-data"
              noValidate
              onSubmit={this.onSubmit}
            >
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
                  value={this.state.filename}
                  id="filename"
                  type="text"
                />
                <label htmlFor="name">File Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.description}
                  id="description"
                  type="text"
                />
                <label htmlFor="description">File Description</label>
              </div>

              <div>
                <input
                  onChange={this.onChangef}
                  //value={this.state.file}
                  //id="file"
                  type="file"
                />
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
                  New File
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

NewFile.propTypes = {
  newFile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { newFile }
)(withRouter(NewFile));
