import PurchaseForm from "../components/PurchaseForm";

function PurchaseDetails() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Purchase Order</h1>

      <div
        style={{
          background: "white",
          padding: "25px",
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          width: "500px",
        }}
      >
        <PurchaseForm />
      </div>
    </div>
  );
}

export default PurchaseDetails;