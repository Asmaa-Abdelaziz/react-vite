import React, { Component } from "react";
import Parent from "./assets/Components/Parent/Parent";
import Child from "./assets/Components/Child/Child";

class App extends Component {
  state = {
    name: "Asmaa",
    age: 25,
    ajob: "Engineer from App",
    // products: [
    //   { id: 0, product_name: "Product 1", price: 10000, category: "mobile",count:5 },
    //   { id: 1, product_name: "Product 2", price: 30000, category: "labtop",count:10 },
    // ],
  };
  // update_product = (index) => {
  //   // console.log("hello update " + index);
  //   let new_product = [...this.state.products];
  //   new_product[index].count++;
  //   this.setState({ products: new_product });
  // };
  render() {
    return (
      <div>
        <h1>Welcome {this.state.name} in App Component</h1>
        <Parent age={this.state.age} />
        <Child ajob={this.state.ajob} name={this.state.name} />

        {/* <Parent
          products={this.state.products}
          update_product={this.update_product}
        /> */}
      </div>
    );
  }
}

export default App;
