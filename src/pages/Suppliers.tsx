import { useNavigate } from "react-router-dom";
import SupplierTable from "../components/SupplierTable";

function Suppliers() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <h1>Supplier Management</h1>
          <p>
            Manage suppliers and vendor information
          </p>
        </div>


        <button
          onClick={() => navigate("/supplier-details")}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          + Add Supplier
        </button>

      </div>


      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >

        <h2>Supplier List</h2>

        <SupplierTable />

      </div>

    </div>
  );
}

export default Suppliers;