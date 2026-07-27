import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../features/authSlice";


function Navbar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {

    dispatch(logout());

    localStorage.removeItem("user");

    navigate("/login");

  };


  return (

    <div
      style={{
        height: "60px",
        background: "#2563eb",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 25px",
      }}
    >

      <h2 style={{ margin: 0 }}>
        PurchaseHub
      </h2>


      <button
        onClick={handleLogout}
        style={{
          background: "white",
          color: "#2563eb",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>


    </div>

  );
}


export default Navbar;