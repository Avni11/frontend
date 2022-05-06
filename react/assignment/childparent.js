//==========================================================
class Parent1 extends React.Component {
  state = {
    txt: "Hello",
  };
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Child1 action={this.getData.bind(this)} />
      </div>
    );
  }
  getData(data) {
    console.log(data);
    this.setState({
      txt: data,
    });
  }
}
function Child1(props) {
  const str = "Hii";
  return (
    <div>
      <button onClick={() => props.action(str)}>Send Data</button>
    </div>
  );
}
ReactDOM.render(<Parent1 />, document.getElementById("root"));
//=================================================================
function Parent() {
  const [name, setName] = React.useState("Rajaraja Choza");
  const Update = function (data) {
    console.log(name);
    setName(data);
  };
  return (
    <div>
      <h1>Hlo {name}!</h1>
      <Child action={Update.bind()} />
    </div>
  );
}
function Child(props) {
  const str = "Yaazhan";
  return (
    <div>
      <button onClick={() => props.action(str)}>Send Data</button>
    </div>
  );
}
ReactDOM.render(<Parent />, document.getElementById("root"));
//===Example:3====
function P1(props) {
  const [name, setVal] = React.useState(["Impossible", "Can't", "NotCapable"]);
  const fun = function (data) {
    setVal(data);
  };
  return (
    <div>
      <h1>Hey {props.name}!</h1>
      <h3>{name}</h3>
      <C1 action={fun.bind()} />
    </div>
  );
}
function C1(props) {
  const arr = ["Possible", "Can", "Capable"];
  return (
    <div>
      <button onClick={() => props.action(arr)}>YOU</button>
    </div>
  );
}
ReactDOM.render(<P1 name="Girl" />, document.getElementById("root"));
