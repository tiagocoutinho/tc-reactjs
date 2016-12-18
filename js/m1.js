console.log("loading m1...");
var $ = require("jquery");

function set_title(title) {
  console.log("changing title to '" + title + "'");
  $(".title").html(title);
}

set_title("Welcome to TC React JS V3");
