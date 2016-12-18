import React from "react";

import Header from "./header";
import Page from "./page";
import Footer from "./footer";

export default class Window extends React.Component {

  render() {
    return (
      <div>
        <Header title={this.props.title} />
        <Page />
        <Footer />
      </div>);
  }
}
