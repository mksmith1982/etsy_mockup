
function solution1 (items) {

  var avgPrice = items.map(function (items) {
    return items.price;
  });

  var sum = avgPrice.reduce(function (total, nextPrice) {
    return total + nextPrice;
  });

  var average = sum / avgPrice.length;

  var answer1 = document.getElementById("answer1");
  answer1.innerHTML = "The average price is: $" + average.toFixed(2);
}







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
//I need to get a new array for price.... so I take items[0]-[24].price


// var filterPrice = prices.filter(prices)}
// var rng= (prices > 14 && prices < 18)
// return rng;
// myArr.filter(function(singleItem){
// 	return singleItem > 14 && singleItem < 18;
// });

function midPriceItems (items) {
  var rng = items.filter(function(items) {
	return items.price > 14 && items.price < 18;
	})
	return rng;
  };



var answer2 = midPriceItems(items);
var answer2Box = document.getElementById("answer2");


for (var i = 0; i < answer2.length; i++) {

  answer2Box.innerHTML += "Price Range:" + answer2[i].title + "<br>";
}








//Which item has a "GBP" currency code? Display it's name and price.
var gbp=items.filter(function(item){
return item.currency_code !== "USD";

});
var answer3 = gbp
var answer3Box = document.getElementById("answer3");
for (var i = 0; i < answer3.length; i++) {
	
answer3Box.innerHTML += answer3[i].title; + "<br>"
answer3Box.innerHTML += answer3[i].price; + "<br>"
answer3Box.innerHTML += answer3[i].currency_code;


}

// // //Display a list of all items who are made of wood.

//filter
// var woodItems = items.filter(function(items) {
// 	return items.materials === "wood";
//});
// var answer4

///.includes   

/// loop over each object 
var woodItems = items.filter(function (x) {
 return x.materials.includes ("wood")
}); 
var woodItemList = woodItems.map(function (y){
  return y.title;});  
  document.getElementById ("answer4").innerHTML=woodItemList.join("Items are made of wood");










// document.getElementById("answer4");}///  FILTER//
// //Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

// document.getElementById("answer5");}


// //How many items were made by their sellers?
var madeItems = items.map(function (x) {
  return x.who_made.includes ("i_did")
});
var iMade = madeItems.filter(function (y) {
  return y = "i_did";
document.getElementById("answer6").innerHTML=iMade.length;
})

// document.getElementById("answer6");}

// for (var i = 0; i < items.length; i++) {
// 	items[i]; return price;
// }