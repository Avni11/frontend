function Myapp() {
  const [name, setName] = React.useState("Allen"); //stores state value,2nd is function name
  //const [name, setName] = React.useState({ fn: "kim", ln: "tae" });
  const update = () => {
    // console.log(name);
    setName("Alice");
    // setName({
    //   ...name, //keeps the obj along with the updated value
    //   ln: "Taehyung",
    // });
  };
  return (
    <div>
      <h1>{name}</h1>
      {/* <h1>{name.fn}</h1>
      <h1>{name.ln}</h1> */}
      <button onClick={update}>click</button>
    </div>
  );
}
ReactDOM.render(<Myapp />, document.getElementById("root"));
