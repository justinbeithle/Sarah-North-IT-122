/*This program is written in JavaScript and demonstrates conditional statements and object usage. Let's break it down step by step:*/

var onSale = true, inventoryLevel = 12, discount = 3; /*declare and initialize three variables*/

/* The first if statement checks two conditions using the logical AND operator */

if (onSale && inventoryLevel > 10) { console.log("We have plenty left");

}

/* The second if statement also checks two conditions using the logical OR operator (‘||”); */

if (onSale || discount > 0) { console.log("On sale!");

} else {

console.log("Full price");

}

/*You declare an object named ‘rect” with two properties: width & Hight*/

var rect = {

width: 100,

height: 50

};

/*Finally, you log the entire ‘rect’ object to the console, will display its properties and values*/

console.log(rect);