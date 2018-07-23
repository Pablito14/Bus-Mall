'use strict';

var listOfProducts =[];
var totalProducts = 0;
var totalVotes = 0;

function Product(name, path){
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.path = path;
  listOfProducts.push(this);
  totalProducts++;
}






