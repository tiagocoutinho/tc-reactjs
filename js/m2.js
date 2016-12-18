console.log("loading m2...");
var _ = require("lodash");
var $ = require("jquery");

var PEOPLE = [{
  "id": 1,
  "first_name": "Carl",
  "last_name": "Cooper",
  "email": "ccooper0@dailymotion.com",
  "gender": "Male",
  "ip_address": "47.192.178.242"
}, {
  "id": 2,
  "first_name": "Mary",
  "last_name": "Ford",
  "email": "mford1@bing.com",
  "gender": "Female",
  "ip_address": "18.226.49.204"
}, {
  "id": 3,
  "first_name": "Mary",
  "last_name": "Price",
  "email": "mprice2@indiegogo.com",
  "gender": "Female",
  "ip_address": "122.162.186.20"
}, {
  "id": 4,
  "first_name": "Andrea",
  "last_name": "Elliott",
  "email": "aelliott3@furl.net",
  "gender": "Female",
  "ip_address": "123.64.54.188"
}, {
  "id": 5,
  "first_name": "Howard",
  "last_name": "Ruiz",
  "email": "hruiz4@bloglovin.com",
  "gender": "Male",
  "ip_address": "26.71.194.219"
}, {
  "id": 6,
  "first_name": "Judith",
  "last_name": "Meyer",
  "email": "jmeyer5@japanpost.jp",
  "gender": "Female",
  "ip_address": "151.210.2.116"
}, {
  "id": 7,
  "first_name": "Patrick",
  "last_name": "Freeman",
  "email": "pfreeman6@amazon.co.uk",
  "gender": "Male",
  "ip_address": "74.32.24.65"
}, {
  "id": 8,
  "first_name": "Rose",
  "last_name": "Dean",
  "email": "rdean7@indiatimes.com",
  "gender": "Female",
  "ip_address": "51.253.111.221"
}];

function nb_women() {
  return _.filter(PEOPLE, {gender: "Female"}).length;
}

$(".content").html("Found " + nb_women() + " women!");
