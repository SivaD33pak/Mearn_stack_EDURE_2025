import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <h1 style={{ color: "black", textAlign: "center", width: "100%" }}>
        User Profile Card
      </h1>

      <ProfileCard
        name="Siva"
        role="Student"
        email="siva@gmail.com"
        status="Inactive"
      />

      <ProfileCard
        name="Deepak"
        role="Student"
        email="deepak@gmail.com"
        status="Active"
      />

      <ProfileCard
        name="Siva Deepak"
        role="Admin"
        email="sivadeepak@gmail.com"
        status="Active"
      />

      <ProfileCard
        name="Siva The Deepak"
        role="Admin"
        email="sivadeepak@gmail.com"
        status="Inactive"
      />
    </div>
  );
}

export default App;
