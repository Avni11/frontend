function App(props) {
  return <Home txt="BTS" idol={props.Name} />; //props sent from one func to another func
}

function Home(props) {
  return (
    <div>
      <h1>
        <marquee direction="left">{props.txt}</marquee>
      </h1>
      <h2>{props.idol}</h2>
    </div>
  );
}
ReactDOM.render(<App Name="THV" />, document.getElementById("root"));
//ReactDOM.render(<Home txt="THVVVV" />, document.getElementById("root"));
//Child to parent
class Parent extends React.Component {
  state = { txt: "Hello" };
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Child action={this.getChilddata.bind(this)} />
      </div>
    );
  }
  getChilddata(a) {
    this.setState({
      txt: a,
    });
  }
}
function Child(props) {
  const str = "Welcome";
  return <button onClick={() => props.action(str)}>click</button>;
}
ReactDOM.render(<Parent />, document.getElementById("root"));
