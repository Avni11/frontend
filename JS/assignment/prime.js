a = function (x) {
  //annonymous function
  p = true;
  for (i = 2; i < x / 2; i++) {
    if (x % i == 0) {
      p = false;
      break;
    }
  }
  console.log("the given nujmber is prime" + p);
};
a(29);
function Prime(x) {
  //named function
  p = true;
  for (i = 2; i < x / 2; i++) {
    if (x % i == 0) {
      p = false;
      break;
    }
  }
  console.log("the given number is prime " + p);
}
Prime(65);
var v = (x) => {
  //arrow function
  p = true;
  for (i = 2; i < x / 2; i++) {
    if (x % i == 0) {
      p = false;
      break;
    }
  }
  console.log("the given number is prime " + p);
};
v(56);
var v = (function Prim(x) {
  p = true;
  for (i = 2; i < x / 2; i++) {
    if (x % i == 0) {
      p = false;
      break;
    }
  }
  console.log("the given number is prime " + p);
})(23);
