import React, { Component } from "react";
import ItemComponent from "./Item.component";

export class Homepage extends Component {
  constructor(props) {
    super(props);
  }
  renderItems = () => {
    return this.props.items.map(item => (
      <ItemComponent
        item={item}
        itemIdForEdit={this.props.itemIdForEdit}
        getItemId={this.props.getItemId}
      />
    ));
  };
  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default Homepage;
