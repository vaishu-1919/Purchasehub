import { useNavigate } from "react-router-dom";
import PurchaseTable from "../components/PurchaseTable";

function Purchase() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div>
          <h1>Purchase Management</h1>
          <p>
            Manage purchase requests and orders
          </p>
        </div>

        <button
          onClick={() => navigate("/purchase-details")}
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
          + Add Purchase Order
        </button>
      </div>


      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          marginTop: "20px",
        }}
      >
        <h2>Purchase Orders</h2>

        <PurchaseTable />
      </div>
    </div>
  );
}

export default Purchase;