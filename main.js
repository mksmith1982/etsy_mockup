
//   The average price is $23.63

// index the items using a map. 
// take the result and add it together and divide by the
// number of items in the array



////////////////PULLS ALL THE PRICES FROM THE ARRAY/////
function prices(items) {
  var priceList = [];
  for (var i = 0; i < items.length; i++) {
      priceList.push(items[i].price);
  }
  return priceList;
}
///////////////////////////////////////////////
///////////////ADDS THEM TOGETHER/////////////
var priceList = prices(items);
var totalPrice = 0;
for (var i = 0; i < priceList.length; i++) {
    totalPrice = totalPrice + priceList[i];
}

/////////////////////////////////////////////////
//////////////TAKES THE SUM AND DIVIDES/////////

var answer1 = totalPrice/priceList.length;
/////////////////////////////////////////////////
////////////////PLACES THE RESULTS ON THE PAGE////
document.getElementById("answer1")
.innerHTML ="The average price is $" + answer1.toFixed(2);

//////////////////////////////////////////////////////


/////////////////ANSWER 2////USING FUNCTIONS////
/////////////PULLS ITEM LIST////////////////
// function itemsList(items){
// 	var itemsList = [];
	
// 	for (var i = 0; i < items.length; i++) {
// 		items[i].price;
// 	}
// 	return itemsList;
// }
/////////////////////////////////////////////
//////////////FILTERS ITEMS BY PRICE////////
function priceRng(items){
	var result = [];
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
	
		if (item.price > 14 && item.price < 18) {
			result.push(item);
		}
	}

	return result;
}

// var answer2 = itemsList;

// document.getElementById("answer2")
// .innerHTML = answer2;

/////////////////////////////////////////////////
//////////////ANSWER 2 USING HOFS////////////////
//LOCATES THE ITEMS THAT RANGE FROM $14 to $18//////

var prices = items.filter(function(x) {
	return x.price < 18.00 && x.price > 14.00;
});

///////RETURNS THE INDIVIDUAL TITLES FOR THE ITEMS///////
////////////AND JOINS THEM INTO A SINGLE ARRAY//////////

var itemList = prices.map(function (y) {return y.title;});
document.getElementById("answer2").innerHTML = itemList.join("<br> ");

////////////////////////////////////////////////////////////////////


////////////////////ANSWER3////////////////////////////////////
/////////////////////GBP//////////////////////////////////////

// function itemsList(items){
// 	var itemsList = [];

// 	for (var i = 0; i < items.length; i++) {
// 		itemsList.push(items[i].currency_code);
// 	}
// 	return itemsList;
// }

// function gbp(itemsList){
// 	var gbp = [];
// 	for (var i = 0; i < itemsList.length; i++) {
// 		itemsList[i];{
// 	if (gbp.includes( "GBP" [itemsList])
// 		gbp.push items.title	}

// 	}
// 	var answer3 = gbp;
// }
// document.getElementById("answer3").innerHTML = itemList.join("<br> ");

/////////////////////////////////////////////////////////////////////
							//GBP WITH THE HOF//
/////////////////////////////////////////////////////////


var gbpFilter = items.filter(function(x){ 
		return (x.currency_code === "GBP")
	});

var mapPrice = gbpFilter.map(function(y){
		return y.price;
	});
var mapTitle = gbpFilter.map(function(y){
		return y.title;
	});


document.getElementById("answer3")
.innerHTML = mapTitle + ": " +  "Price: " + mapPrice + " GBP";

////////////////////////////////////////////////////////////////////////

						//WOOD ITEMS WITH THE HOF//
////////////////////////////////////////////////////////////////////////
var woodItems = items.filter(function (x) {
 	return x.materials.includes ("wood")
}); 
var woodItemList = woodItems.map(function (y) {
  	return y.title;
});  

var answer4Box = document.getElementById("answer4");

woodItemList.forEach(function (title) {
  answer4Box.innerHTML += "<p>" + title + "</p>";
});

// document.getElementById ("answer4").innerHTML=woodItemList.join("<br>");


//////////////////////////////////////////////////////////////////////////


/////////////////////////////8 OR MORE WITH THE HOF//////////////////////


function formatMaterials(item) {
	return item.title + " has " + item.materials.length + " materials" +
	item.materials.join ("<br/>");

}

var eightMat = items.filter(function (x) {
 	if (x.materials.length >= 8) return true;
 	else return false;
})

var newMatList = eightMat.map(formatMaterials);  
  document.getElementById ("answer5").innerHTML=newMatList.join("<br/>");


 ////////////////////////////////////////////////////////////////////////



 ////////////////////HANDMADE WITH THE HOF//////////////////////////////

var madeItems = items.map(function (x) {
	return x.who_made});
  

var iMade = madeItems.filter(function (y) { 
	return y === "i_did"});
  	
document.getElementById("answer6").innerHTML=iMade.length +(" items were made by their sellers")




///////////////////////////////////////////////////////////////////////////



