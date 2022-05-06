localStorage.setItem("email", "ani@123");
console.log(localStorage.getItem("email"));
sessionStorage.setItem("password", 123);
console.log(sessionStorage.getItem("password"));
let a;
function login() {
  const val = localStorage.getItem("a");
  sessionStorage.setItem("sessionid", 123);
  console.log("before click a", a);
  if (val) {
    a = Number(val);
  } else {
    a = 10;
    localStorage.setItem("a", a);
  }
  console.log("after clik a", a);
}
function loginincre() {
  a += 10;
  console.log(a);
}
function logout() {
  localStorage.clear();
  sessionStorage.clear();
}
console.log("hey"); //;required when you have immediate code  after function
console.log(2 + 5 < 7 ? true : false);
// //asynchronous funuction handling
function first(callback) {
  setTimeout(() => {
    console.log("first executed");
    callback();
  }, 5000);
}
function second() {
  setTimeout(() => {
    console.log("second executed");
  }, 2000);
}
first(second);
new Promise(function (resolve, reject) {
  if (10 > 11) {
    resolve("success");
  } else {
    reject("error");
  }
})
  .then(function (d) {
    console.log(d);
  })
  .catch(function (err) {
    console.log(err);
  });
//=====json======
let person = {
  fname: "anitha",
};
const jsnobj = JSON.stringify(person);
console.log(jsnobj);
const jsobj = JSON.parse(jsnobj);
console.log(jsobj);
