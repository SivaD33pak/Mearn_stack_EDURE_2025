function Card(props) {
  console.log(props);

  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          display: "block",
          margin: "20px",
          padding: "20px",
          border: "1px solid #ccc",
        }}
      >
        <img
          src={props.imageURL}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default Card;
