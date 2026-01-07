function BillSplitter() {
  return (
    <div
      style={{
        width: "400px",
        height: "600px",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: "30px",
      }}
    >
      <h1>Bill Splitter</h1>
      <div style={{ textAlign: "left", padding: "10px" }}>
        <div>
          <p style={{ fontSize: "20px" }}>Total Bill Amount:</p>
          <input
            type="number"
            placeholder="Enter total bill amount"
            size="100px"
            style={{ width: "90%", padding: "10px", borderRadius: "10px" }}
          />
        </div>
        <div>
          <p style={{ fontSize: "20px" }}>Tip Percentage (%)</p>
          <input
            type="number"
            placeholder="Enter tip percentage"
            style={{ width: "90%", padding: "10px", borderRadius: "10px" }}
          />
        </div>
        <div>
          <p style={{ fontSize: "20px" }}>Number of People:</p>
          <input
            type="number"
            placeholder="Enter number of people"
            style={{ width: "90%", padding: "10px", borderRadius: "10px" }}
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              width: "95%",
              height: "50px",
              marginTop: "20px",
              borderRadius: "5px",
              border: "1px solid black",
              fontSize: "18px",
              color: "white",
              backgroundColor: "purple",
            }}
          >
            Calculate
          </button>

          <button
            style={{
              width: "95%",
              height: "50px",
              marginTop: "20px",
              borderRadius: "5px",
              border: "1px solid black",
              fontSize: "18px",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillSplitter;
