let x = 50;
let y = x; //copy by vlue
console.log(x, y);
let arr = [1, 2, 5, 4, 5];
let arr1 = arr; //copy by reference
console.log(arr, arr1);
arr1.push(56); //change will reflect in both arrays
console.log(arr, arr1);
arr2 = [...arr]; //shallow copy
console.log(arr, arr2);
arr2.push(3);
console.log(arr, arr2);
let person = {
  name: "Anitha",
  age: 21,
};
let personcpy = { ...person }; //copy the first layer obj
person.age = 22;
console.log(person, personcpy);
personcpy.fav = "choloate";

let movie = {
  name: "radhe sham",
  cast: {
    hero: "prabas",
    heroin: "Pooja",
  },
};
let moviecopy = { ...movie }; //here nested elements will be affect
console.log(movie);
console.log(moviecopy);
movie.cast.heroin = "shanu";
let deepcopy = { ...movie, cast: { ...movie.cast } }; //all layers are copied changes won't affect
console.log(deepcopy);
movie.cast.heroin = "dia";
deepcopy.cast.name = "abi";
//=====REST Operators=====//
function add(...num) {
  //passed parameters are storing as a array
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(`sum->${sum}`);
}
add(56, 3, 12, 89);
add(1, 2);
add(53);
//=======Destructureing=====
let obj = {
  oname: "ani",
  aage: 23,
};
const { oname, aage } = obj;
console.log(oname);
const arra1 = ["dance", "music", "movie", "serial"];
const [h1, h2, h3, h4] = arra1;
console.log(h1);
//======windowobj=======
console.log(window.document); //gives html docmuntation
console.log(window.history);
navigator.geolocation.getCurrentPosition((loc) => {
  console.log("location", loc);
});
let member = {
  name: "Avi",
  age: 22,
  sal: function add() {
    console.log(this);
  },
};
member.sal();
