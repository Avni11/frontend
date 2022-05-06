function Funcname(vari) {
  //function name 1st letter should be caps
  return <h1>hello functional component {vari.username}</h1>;
}

function Content({ sub1, sub2, sub3 }) {
  //destructured
  return (
    <h1>
      {sub1}
      {sub2}
      {sub3}
    </h1>
  );
}
function Footer({ person }) {
  //object
  return (
    <p>
      {person.fname}
      {person.lname}
    </p>
  );
}
ReactDOM.render(
  <div>
    <Funcname username="anitha" />
    <Content sub1="java" sub2="sql" sub3="react" />
    <Footer person={{ fname: "Anitha", lname: "Thangavel" }} />
  </div>,
  document.getElementById("root")
);
//================================================================
class Cls extends React.Component {
  state = {
    name: "Anitha",
  };
  render() {
    //console.log(this.props.uname);
    //this.props.uname = "avi";props can't reinitialized
    return <h1>{this.state.name}</h1>; //goes to web page content
  }
}
ReactDOM.render(<Cls />, document.getElementById("root"));
//============================================================================
class Demo extends React.Component {
  state = {
    name: "V",
  };
  changeName() {
    //don't use function keyword
    this.setState({
      //changing the state value it's asynchronus method
      name: "JK",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeName()}>Clik</button>
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById("root"));
