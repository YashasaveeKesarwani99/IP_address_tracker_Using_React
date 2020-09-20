import React, { Component } from "react";

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
        <div className="input">
          <input
            type="text"
            placeholder="Enter any IP address"
            value={this.state.search}
            onChange={(e) => this.inputHandler(e)}
          />
          <button className="btn">+</button>
        </div>
      </div>
    );
  }
}
export default InputForm;
