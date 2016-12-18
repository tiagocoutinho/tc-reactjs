import React from "react";
import ReactDom from "react-dom";
import $ from "jquery";

import Window from "./ui/window";

const app = $("#app")[0];
const title ="Welcome to " + "ESRF - ID31";
ReactDom.render(<Window title={title} />, app)
