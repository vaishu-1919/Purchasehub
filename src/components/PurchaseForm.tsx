import { useState } from "react";
import { useAddPurchaseMutation } from "../services/purchaseApi";
import { useNavigate } from "react-router-dom";

function PurchaseForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("Pending");

  const [addPurchase] = useAddPurchaseMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !quantity) {
      alert("Please fill all fields");
      return;
    }

    await addPurchase({
      title,
      quantity: Number(quantity),
      status,
    });

    setTitle("");
    setQuantity("");
    setStatus("Pending");

    navigate("/purchase");
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>Purchase Item</label>

      <input
        type="text"
        placeholder="Enter item name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />


      <label>Quantity</label>

      <input
        type="number"
        placeholder="Enter quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={inputStyle}
      />


      <label>Status</label>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={inputStyle}
      >
        <option value="Pending">
          Pending
        </option>

        <option value="Approved">
          Approved
        </option>

        <option value="Rejected">
          Rejected
        </option>
      </select>


      <button
        type="submit"
        style={buttonStyle}
      >
        Save Purchase Order
      </button>

    </form>
  );
}


const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "8px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "5px",
};


const buttonStyle = {
  background: "#2563eb",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "6px",
  cursor: "pointer",
};


export default PurchaseForm;