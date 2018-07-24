'use strict';

var productNames =[];

var allProducts=[];
var left = document.getElementById();
var center = document.getElementById();
var right = document.getElementById();
var container = document.getElementById('container');

function Product(name, path){
  this.name = name;
  this.path = path;
  this.views = 0;
  this.clicks = 0;
  listOfProducts.push(this);
}

for (var i = 0; i <productNames.length; i++){
  new Product(productNames)[i];
}

function rando(){
return Math.floor(Math.random() * allProducts.length);

}


function threeRandomImages(){
left.src = allProducts[rando()].path;
center.src = allProducts[rando()].path;
right.src = allProducts[rando()].path;
}

function handleClick(event){
  console.log(event.target.id, 'was clicked');
  threeRandomImages();
}

