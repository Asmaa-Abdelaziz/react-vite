import React, { Component } from "react";

export default class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* question */}
        <h1>{this.props.ajob}</h1>
        <h1>{this.props.pjob}</h1>
      </div>
    );
  }
}
