const e1 = React.createElement("h1", null, "1st element"); //1st element(tag),attribute,text value
ReactDOM.render(e1, document.getElementById("root"));
const e2 = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "car"),
  React.createElement("li", null, "bike")
);
ReactDOM.render(e2, document.getElementById("root")); //at a time we can use single render only that'swhy react is single page application
const mobiles = ["redmi", "realme", "poco", "samsung"];
const ele = React.createElement(
  "ul",
  null,
  mobiles.map((mob, index) => {
    //iterate through array
    return React.createElement("li", { key: index }, mob); //key attribute is for identify the elements uniquely
  })
);
ReactDOM.render(ele, document.getElementById("root"));
//=====jsx====used to increase the performance & readability
// browser won't understand jsx , babel is the one who translate to browser understandable language
const fruites = ["apple", "orange", "mango", "pine apple"];
const data = (
  <ul>
    {fruites.map((fruite, index) => {
      return <li key={index}>{fruite}</li>;
    })}
  </ul>
);

ReactDOM.render(data, document.getElementById("root"));
//===Component===
class Header extends React.Component {
  //after extending from react.component Header will become component
  render() {
    return <h1>Header Component</h1>; //one element returning
    console.log(this.props.name); //this(current obj).property.variablename
    return (
      <div>
        <h1>HEllo </h1>
        <h2>my allien</h2>
        <p>we are mystery to eachother {this.props.name}</p>
      </div>
    );
  } //to returning more then one element then you have to give it inside any root tag
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.fname}
          {this.props.lname}
        </h1>
      </div>
    );
  }
}
class Footer extends React.Component {
  render() {
    return <p>Bye</p>;
  }
}
ReactDOM.render(<Header />, document.getElementById("root"));
//calling_header_component (passing value at the calling part),saying where to print
ReactDOM.render(
  <div>
    <Header></Header>
    <Content fname="th" lname="v" />
    <Footer></Footer>
  </div>,
  document.getElementById("root")
);
