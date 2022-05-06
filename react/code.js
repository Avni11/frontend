class Login extends React.Component {
  state = {
    txt: true,
  };
  render() {
    if (this.state.txt) {
      return (
        <div>
          <h1>Login home Admin</h1>
          <button onClick={() => this.user()}>click</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>login User</h1>
          <button onClick={() => this.admin()}>click</button>
        </div>
      );
    }
  }
  admin() {
    this.setState({
      txt: true,
    });
  }
  user() {
    this.setState({
      txt: false,
    });
  }
}

ReactDOM.render(<Login />, document.getElementById("root"));
