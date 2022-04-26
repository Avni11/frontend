var arr = [1, 23, 42, 11, 22, 65];
var mapmethod = arr.map((value, index, array) => {
  console.log(value + 10);
  console.log(index);
  console.log(array);
});
console.log("mapping obj");
var arra = [
  {
    Name: "avi",
    Age: 22,
  },
  {
    Name: "Robin",
    Age: 22,
  },
  {
    Name: "Ajay",
    Age: 27,
  },
];
var m = arra.map((val, index, arrai) => {
  console.log(val.Name);
  console.log(val.Age);
  console.log(index);
});
//filter
console.log("from filter");
var x = arr.filter((val, i) => {
  return val % 2 == 0;
});
console.log(x);
//const can't  redeclare and change value
//const x=78
const z = 12;
//let can't redeclared
//let y=96;
let y = 90; //untill u assign value they will present in temporal dead zone
//Date
let systemDate = new Date();
console.log(systemDate.getDate());
console.log(systemDate.getDay());
console.log(systemDate.getFullYear());
console.log(systemDate.getHours());
console.log(systemDate.getMilliseconds());
console.log(systemDate.getMinutes());
console.log(systemDate.getMonth());
console.log(systemDate.getTime());
console.log("dec/26/2000");
let sD1 = new Date("dec/26/2000");
//console.log(sD1.getMonth() + "/" + sD1.getDate() + "/" + sD1.getFullYear());
let dateval = sD1.getDate();
let monval = sD1.getMonth();
let yearval = sD1.getFullYear();
var fulldate = `${monval + 1}/${dateval}/${yearval}`; //after $ {will cosidered as js} after ` will considered as string
console.log(fulldate);
var months = [
  "Janauary",
  "feburary",
  "march",
  "April",
  "May",
  "June",
  "July",
  "Auguest",
  "September",
  "November",
  "December",
];

var dat = `${months[sD1.getDate()]}/${dateval}/${yearval}`;
