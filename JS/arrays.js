debugger;
var arr = ["a", 1, "abi,true"];
console.log(arr);
for (var index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}
var arr2 = [10, 20, 30, 40, 50];
console.log("hello");
for (var i = 0; i < arr2.length; i++) {
  console.log(arr2[i] + 10);
}
setTimeout(() => {
  console.log("from time out");
}, 5687);
console.log("from for each");
arr2.forEach((element) => {
  console.log(element + 10);
});
console.log("from for of");
var arr3 = ["23", 90, { a: 3 }];
for (var i of arr3) {
  console.log(i);
}
//Strings
str = "Euphoria";
console.log("index of a" + str.indexOf("a"));
console.log("replace methhod" + str.replace("Euphoria", "utopia"));
console.log("includes  phoria ?" + str.includes("phoria"));
//Math OBJ
var num = [1, 29, 34, 65, 23, 13, 567, 546, 134];
// console.log("min of num " + Math.min(...num));
console.log("min of num " + Math.min(1, 29, 34, 65, 23, 13, 567, 546, 134));
// console.log("max of num" + Math.random(...num));
console.log("random of num" + Math.random());
console.log("" + Math.floor(4.44));
console.log("ceil of 4.44 " + Math.ceil(4.44));
var namearray = ["ani", "abi", "cbi"];
console.log((n = Math.floor(Math.random() * namearray.length)));
console.log(namearray[n]);
var myarray = [
  "Ajay",
  27,
  true,
  undefined,
  null,
  { color: "black" },
  ["balck", "blule", "red"],
];
console.log(myarray[3]);
console.log(myarray[2]);
console.log(typeof myarray[3]);
console.log(myarray[5].length);
console.log(myarray[5].color);
console.log(myarray[5]["color"]);
console.log(myarray[5][2]);
