import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.push("/products");
  };
  //push adds a new address in the browser history, so you can go back to the previous page. Replace simply replaces the url. Replac eis used for login pages, so users wont be able to go bacl to the login page
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
