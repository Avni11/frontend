function getName(a, b) {
  //parameter
  //console.log(a + b);
  a = a + b;
}
//getName(5, 6);argument
var annony = function (a, b) {
  a = a - b;
  console.log(a);
};
//annony(5, 3);
function add(a) {
  console.log(a);
}
add(annony(5, 6));
function one() {
  console.log("one");
}
function two() {
  console.log("two");
}
one(two());

function greetings(w) {
  // w("anitha");
}
function welcome(name) {
  console.log("hello", name);
}
greetings(welcome("avi"));
