import {
  useDeleteSupplierMutation,
  useGetSuppliersQuery,
} from "../services/supplierApi";

interface Props {
  setEditSupplier?: (supplier: any) => void;
}

function SupplierTable({ setEditSupplier }: Props) {
  const {
    data: suppliers = [],
    isLoading,
    isError,
  } = useGetSuppliersQuery();

  const [deleteSupplier] = useDeleteSupplierMutation();


  if (isLoading) {
    return <p>Loading suppliers...</p>;
  }


  if (isError) {
    return <p>Error loading suppliers</p>;
  }


  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
      }}
    >

      <thead>
        <tr>
          <th style={headerStyle}>ID</th>
          <th style={headerStyle}>Supplier Name</th>
          <th style={headerStyle}>Contact</th>
          <th style={headerStyle}>Email</th>
          <th style={headerStyle}>Status</th>
          <th style={headerStyle}>Action</th>
        </tr>
      </thead>


      <tbody>

        {suppliers.map((supplier: any, index: number) => (

          <tr key={supplier.id}>

            <td style={cellStyle}>
              {index + 1}
            </td>


            <td style={cellStyle}>
              {supplier.name}
            </td>


            <td style={cellStyle}>
              {supplier.contact}
            </td>


            <td style={cellStyle}>
              {supplier.email}
            </td>


            <td style={cellStyle}>
              {supplier.status}
            </td>


            <td style={cellStyle}>

              <button
                onClick={() =>
                  setEditSupplier &&
                  setEditSupplier(supplier)
                }
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "7px 14px",
                  borderRadius: "5px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                Update
              </button>


              <button
                onClick={() =>
                  deleteSupplier(supplier.id)
                }
                style={{
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "7px 14px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}



const headerStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  background: "#2563eb",
  color: "white",
  textAlign: "center" as const,
};


const cellStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "center" as const,
};


export default SupplierTable;