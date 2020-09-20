import React, { Component } from "react";
import "./styles.css";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  inputHandler(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    return (
      <div className="inputForm">
        <h3>IP Address Tracker</h3>
        <div className="in">
          <input
            className="input"
            type="text"
            placeholder="   Enter any IP address"
            value={this.state.search}
            onChange={(e) => this.inputHandler(e)}
          />
          <div className="btn">Open</div>
        </div>
      </div>
    );
  }
}
export default InputForm;
