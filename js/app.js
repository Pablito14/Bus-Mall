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

function uniqueRandomizer(){
  for(var i = 0; i < listOfProducts.length; i++){
    for(var j = i + 1; j < listOfProducts.length; j++){
      if(listOfProducts[i] === listOfProducts[j]){
        return true;
      }
    }
    return false;
  }
}