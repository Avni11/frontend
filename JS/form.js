// function store() {
//   console.log(document.getElementById("fn").value);
//   console.log(document.getElementById("ln").value);
//   console.log(document.getElementById("mi").value);
//   console.log(document.getElementById("ph").value);
//   console.log(document.getElementById("ge").value);
//   console.log(document.getElementById("nat").value);
// }
function store() {
  event.preventdefault();
  fname = document.getElementById("fn").value;
  localStorage.setItem("firstname", fname);
  localStorage.setItem("lastname", document.getElementById("ln").value);
  localStorage.setItem("mailid", document.getElementById("mi").value);
  localStorage.setItem("phonenum", document.getElementById("ph").value);
  localStorage.setItem("gender", document.getElementById("ge").value);
  localStorage.setItem("nationality", document.getElementById("nat").value);
  console.log(
    localStorage.getItem("firstname") +
      " " +
      localStorage.getItem("lastname") +
      " " +
      localStorage.getItem("mailid") +
      " " +
      localStorage.getItem("phonenum") +
      " " +
      localStorage.getItem("gender") +
      " " +
      localStorage.getItem("nationality") +
      " "
  );
}
