import React, { Component } from "react";
import Child from "../Child/Child";

class Parent extends Component {
  state = {
    pjob: "Engineer from parent",
  };
  render() {
    console.log(this.props.products);
    return (
      <div>
        <h1>My age is {this.props.age}</h1>
        <Child pjob={this.state.pjob}/>

        {/* {this.props.products.map((item, index) => (
          <div key={index}>
            <h1>{item.product_name}</h1>
            <p>{item.count}</p>
            <button
              onClick={() => {
                this.props.update_product(index);
              }}
            >
              update content
            </button>
          </div>
        ))} */}
      </div>
    );
  }
}
export default Parent;
