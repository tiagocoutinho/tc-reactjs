import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";

class Layout extends React.Component {
  render() {
    return (<h1>Hello, World!</h1>);
  }
}

const tcreact_app = $(".tcreact-app")[0];
ReactDom.render(<Layout/>, tcreact_app)
