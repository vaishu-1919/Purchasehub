import {
  useDeletePurchaseMutation,
  useGetPurchasesQuery,
} from "../services/purchaseApi";

interface Props {
  setEditPurchase?: (purchase: any) => void;
}

function PurchaseTable({ setEditPurchase }: Props) {
  const {
    data: purchases = [],
    isLoading,
    isError,
  } = useGetPurchasesQuery();

  const [deletePurchase] = useDeletePurchaseMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading purchases</p>;
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
          <th style={headerStyle}>Purchase Item</th>
          <th style={headerStyle}>Quantity</th>
          <th style={headerStyle}>Status</th>
          <th style={headerStyle}>Action</th>
        </tr>
      </thead>

      <tbody>
        {purchases.map((purchase: any, index: number) => (
          <tr key={purchase.id}>
            <td style={cellStyle}>{index + 1}</td>

            <td style={cellStyle}>
              {purchase.title}
            </td>

            <td style={cellStyle}>
              {purchase.quantity}
            </td>

            <td style={cellStyle}>
              {purchase.status}
            </td>

            <td style={cellStyle}>
              <button
                onClick={() =>
                  setEditPurchase &&
                  setEditPurchase(purchase)
                }
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "7px 14px",
                  marginRight: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Update
              </button>

              <button
                onClick={() =>
                  deletePurchase(purchase.id)
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

export default PurchaseTable;