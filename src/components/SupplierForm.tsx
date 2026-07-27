import { useState } from "react";
import { useAddSupplierMutation } from "../services/supplierApi";
import { useNavigate } from "react-router-dom";


function SupplierForm() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Active");


  const [addSupplier] = useAddSupplierMutation();



  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();


    if (!name || !contact || !email) {
      alert("Please fill all fields");
      return;
    }


    await addSupplier({
      name,
      contact,
      email,
      status,
    });


    setName("");
    setContact("");
    setEmail("");
    setStatus("Active");


    navigate("/suppliers");
  };



  return (

    <form onSubmit={handleSubmit}>


      <label>
        Supplier Name
      </label>

      <input
        type="text"
        placeholder="Enter supplier name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={inputStyle}
      />



      <label>
        Contact Number
      </label>

      <input
        type="text"
        placeholder="Enter phone number"
        value={contact}
        onChange={(e)=>setContact(e.target.value)}
        style={inputStyle}
      />



      <label>
        Email
      </label>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        style={inputStyle}
      />



      <label>
        Status
      </label>

      <select
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
        style={inputStyle}
      >

        <option value="Active">
          Active
        </option>

        <option value="Inactive">
          Inactive
        </option>

      </select>



      <button
        type="submit"
        style={buttonStyle}
      >
        Save Supplier
      </button>


    </form>

  );
}



const inputStyle = {
  width:"100%",
  padding:"10px",
  marginTop:"8px",
  marginBottom:"15px",
  border:"1px solid #ddd",
  borderRadius:"5px",
};


const buttonStyle = {
  background:"#2563eb",
  color:"white",
  border:"none",
  padding:"12px 20px",
  borderRadius:"6px",
  cursor:"pointer",
};


export default SupplierForm;