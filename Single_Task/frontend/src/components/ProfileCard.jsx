function ProfileCard({ name, role, email, status }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "200px",
          padding: "15px",
          margin: "15px",
          borderRadius: "8px",
          backgroundColor: "#393939ff",
          alignItems: "center",
        }}
      >
        <h2>{name}</h2>
        <p>Role: {role}</p>
        <p>Email: {email}</p>

        {status === "Active" ? (
          <p style={{ color: "green" }}>Active</p>
        ) : (
          <p style={{ color: "red" }}>Inactive</p>
        )}

        {role === "Admin" && (
          <p style={{ color: "blue", fontStyle: "italic" }}>ADMIN</p>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
