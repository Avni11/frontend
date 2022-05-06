function Demo() {
  const [name, setName] = React.useState(["Jh ", "JK ", "suga "]);
  const Update = () => {
    console.log(name);

    setName(["HOBIIII ", "Jeonjungkook ", "YOONGI"]);
  };
  return (
    <div>
      <h1>Hlo BTS!</h1>
      <h2>{name}</h2>

      <button onClick={Update}>update</button>
    </div>
  );
}
ReactDOM.render(<Demo />, document.getElementById("root"));
