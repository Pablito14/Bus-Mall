'use strict';

var productNames =['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allProducts=[];
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var container = document.getElementById('container');
var totalClicks = 0;

function Product(name){
  this.name = name;

  //
  this.path = `img/${name}.jpg`;

  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}

//
for (var i = 0; i <productNames.length; i++){
  new Product(productNames[i]);
}

function rando(){
  return Math.floor(Math.random() * allProducts.length);
}

function threeRandomImages(){
  var randomIndexes = [];

  randomIndexes[0] = (rando());
  randomIndexes[1] = (rando());

  while(randomIndexes[0] === randomIndexes[1]){
    randomIndexes[1] = rando();
    console.log('Duplicate prevented');
  }

  randomIndexes[2] = rando();

  while(randomIndexes[2] === randomIndexes[0] || randomIndexes[2] === randomIndexes[1]){
    randomIndexes[2] = rando();
    console.log('Last digit duplication prevented');
  }

  //

  left.src = allProducts[randomIndexes[0]].path;
  center.src = allProducts[randomIndexes[1]].path;
  right.src = allProducts[randomIndexes[2]].path;

  left.title = allProducts[randomIndexes[0]].name;
  center.title = allProducts[randomIndexes[1]].name;
  right.title = allProducts[randomIndexes[2]].name;

  allProducts[randomIndexes[0]].views++;
  allProducts[randomIndexes[1]].views++;
  allProducts[randomIndexes[2]].views++;
}

function timesVotedDataset(){
  var testArray = [];
  for(var i =0; i < allProducts.length; i++){
    testArray.push(allProducts[i].votes);
  }
  return testArray;
}
function getTitle(){
  var anotherArray = [];
  for(var i =0; i < allProducts.length; i++){
    anotherArray.push(allProducts[i].name);
  }
  return anotherArray;
}
function handleClick(event){

  if(event.target.id === 'container'){
    console.log('container', totalClicks);
    return alert('Please select a product.');
  }

  console.log(event.target.title);
  for(var i = 0; i < allProducts.length; i++){
    if(event.target.title === allProducts[i].name){
      allProducts[i].votes++;
      console.log(allProducts[i]);
    }
  }

  totalClicks++;
  console.log(totalClicks, 'total clicks');

  if(totalClicks <= 4){
    threeRandomImages();
    console.log('Total clicks < 4', totalClicks);
  }

  //
  if(totalClicks === 5){
    left.removeEventListener('click', handleClick);
    center.removeEventListener('click', handleClick);
    right.removeEventListener('click', handleClick);
    container.removeEventListener('click', handleClick);
    alert('Test');
    renderGraph();
  }

}
function renderGraph(){
  var ctx = document.getElementById('chart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getTitle(),
      datasets: [{
        label: '# of Votes',
        data: timesVotedDataset(),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
threeRandomImages();
container.addEventListener('click', handleClick);