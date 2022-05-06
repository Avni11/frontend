function P1(props) {
  const [name, setVal] = React.useState({
    fname: "Anitha",
    lname: "T",
    age: 22,
  });
  const fun = function (data) {
    console.log(name);
    setVal({
      ...name,
      lname: data,
    });
  };
  return (
    <div>
      <h1>{props.name}!</h1>
      <h3>{name.fname}</h3>
      <h3>{name.lname}</h3>
      <h3>{name.age}</h3>
      <C1 action={fun.bind()} />
    </div>
  );
}
function C1(props) {
  const data = "A";
  return (
    <div>
      <button onClick={() => props.action(data)}>submit</button>
    </div>
  );
}
ReactDOM.render(<P1 name="Girl" />, document.getElementById("root"));
