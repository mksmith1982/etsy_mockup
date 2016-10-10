
//question 1// The average prices of the items//
 var avgPrice = items.map(function (items) {
   return items.price;
 });
 var sum = avgPrice.reduce(function (total, nextPrice) {
   return total + nextPrice;
 });
 var average = sum / avgPrice.length;
 var answer1 = document.getElementById("answer1");
 answer1.innerHTML = "The average price is: $" + average.toFixed(2);


//avgPrice(items);

//Show me how to get an array of items that cost between $14.00 and $18.00 USD//



  
var prices = [];
    price = items.price;{
for(var i in items)
if (price > 14 && price <18); 

  answer2.innerHTML = "Priced Between :$";
  

document.getElementById("answer2");}




//Which item has a "GBP" currency code? Display it's name and price.



document.getElementById("answer3");}

//Display a list of all items who are made of wood.

document.getElementById("answer4");}
//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

document.getElementById("answer5");}


//How many items were made by their sellers?


document.getElementById("answer6");}