import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#f3f4f6",
            minHeight: "100vh",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;