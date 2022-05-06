//create element
const ele1 = React.createElement("h1", null, "Assignments");
ReactDOM.render(ele1, document.getElementById("root"));
const ele2 = React.createElement("p", null, "hello my allien");
ReactDOM.render(ele2, document.getElementById("root"));

//jsx
const ele3 = <h1>React page</h1>;
ReactDOM.render(ele3, document.getElementById("root"));

const ele4 = (
  <ul>
    <li>thv</li>
    <li>jk</li>
    <li>jm</li>
  </ul>
);
ReactDOM.render(ele4, document.getElementById("root"));
//class component
class Cls1 extends React.Component {
  render() {
    return (
      <ul>
        <li>abcdefghi__klmnopqurstuvz</li>
        <li>rkv</li>
        <li>j.m</li>
        <li>uarmyhope</li>
      </ul>
    );
  }
}
ReactDOM.render(<Cls1 />, document.getElementById("root"));
class Cls2 extends React.Component {
  render() {
    return (
      <p>
        anioyugbhva nvaghds jagutdry hagvtydyr hgtryywd fhdsdfhgji{" "}
        {this.props.name}
      </p>
    );
  }
}
ReactDOM.render(<Cls2 name="Anitha" />, document.getElementById("root"));
//functional component
function Fn1() {
  return (
    <ul>
      <li>abcdefghi__klmnopqurstuvz</li>
      <li>rkv</li>
      <li>j.m</li>
      <li>uarmyhope</li>
    </ul>
  );
}
ReactDOM.render(<Fn1></Fn1>, document.getElementById("root"));
function Fn2(a) {
  return (
    <ul>
      <li>abcdefghi__klmnopqurstuvz {a.name}</li>
      <li>rkv</li>
      <li>j.m</li>
      <li>uarmyhope</li>
    </ul>
  );
}
ReactDOM.render(<Fn2 name="anitha" />, document.getElementById("root"));
