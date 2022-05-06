function Parent1(props) {
  return <Child idl={props.name} />;
}
function Child(a) {
  return (
    <div>
      <h1>{a.idl}</h1>
    </div>
  );
}
ReactDOM.render(<Parent1 name="Thangavel" />, document.getElementById("root"));
function Parent2(pro) {
  return <Child2 ln="Thangavel" id2={pro.nam1} />;
}
function Child2(pro1) {
  return (
    <div>
      <h1>{pro1.ln}</h1>
      <h1>{pro1.id2}</h1>
    </div>
  );
}
ReactDOM.render(<Parent2 nam1="Anitha" />, document.getElementById("root"));
