//========MOUNTING=================
class Parent extends React.Component {
  constructor(props) {
    super(props); //initialize state and bind event
    this.state = {
      txt: "mounting phase",
    };
    console.log("constructor excecuted");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedState executed");
    console.log(state); //updating state
  }
  render() {
    console.log("Render method executed");
    return <div>{this.state.txt}</div>;
  }
  componentDidMount() {
    console.log("componentDidMount executed"); //checks wheter all methods are mounted if not reexcute and mount all
    //can make side effects calling requests
  }
}
ReactDOM.render(<Parent />, document.getElementById("root"));
//================Updating=====================
class Update extends React.Component {
  constructor(props) {
    super(props); //initialize state and bind event
    this.state = {
      name: "Avi",
    };
    console.log("1.constructor excecuted");
  }
  shouldComponentUpdate() {
    console.log("3.Component should update");
    return true; //avi willl change
  } //if false state won't change
  updateState = () => {
    console.log("at updating phase");
    this.setState({
      name: "ani",
    });
  };
  getSnapShotBeforeUpdate(prevProps, prevState) {
    console.log("4.get snapshot before updateed" + prevState);
    return prevState.name;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("5.componentdidupdate with prevState: "); //checks wheter all methods are updated if not reexcute and mount all
    //can make side effects calling requests
  }
  render() {
    console.log("2.render the state");
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.updateState}>change</button>
      </div>
    );
  }
}
ReactDOM.render(<Update />, document.getElementById("root"));
