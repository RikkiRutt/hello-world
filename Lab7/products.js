let name1 = "HTC";
let price1 = 40.00;
let image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

let name2 = "Apple";
let price2 = 75.00;
let image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

let name3 = "Nokia";
let price3 = 35.00;
let image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

let name4 = "Samsung";
let price4 = 45.00;
let image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

let name5 = "Blackberry";
let price5 = 10.00;
let image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";

console.log("Product variables loaded....");



//exercise 1.1
console.log("exercise 1.1");
let num_products=5;
let productCount=1;
while (productCount <=num_products){
    console.log(productCount);
    productCount++;
}

//exercise 1.2
console.log();
console.log("exercise 1.2");
productCount=1
while (productCount <= num_products) {
    console.log(productCount+'. '+eval('name'+productCount));
    productCount++;
}

//exercise 1.3
console.log();
console.log("exercise 1.3");