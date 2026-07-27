import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        backgroundColor: "#1f2937",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>MENU</h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <NavLink
          to="/dashboard"
          style={({ isActive }) => ({
            color: isActive ? "#60a5fa" : "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
          })}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/purchase"
          style={({ isActive }) => ({
            color: isActive ? "#60a5fa" : "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
          })}
        >
          Purchase Orders
        </NavLink>

        <NavLink
          to="/suppliers"
          style={({ isActive }) => ({
            color: isActive ? "#60a5fa" : "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
          })}
        >
          Suppliers
        </NavLink>

        <NavLink
          to="/reports"
          style={({ isActive }) => ({
            color: isActive ? "#60a5fa" : "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
          })}
        >
          Reports
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;