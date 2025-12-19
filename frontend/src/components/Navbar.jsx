function Navbar(props) {
  console.log(props);

  let n = "hfghdfsh";

  return (
    <div>
      <h1>{props.heading}</h1>
      <a href="#">Click me</a>
    </div>
  );
}
export default Navbar;
