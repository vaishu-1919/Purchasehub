import { useGetPurchasesQuery } from "../services/purchaseApi";
import { useGetSuppliersQuery } from "../services/supplierApi";

function Reports() {
  const { data: purchases = [] } = useGetPurchasesQuery();
  const { data: suppliers = [] } = useGetSuppliersQuery();

  const pendingOrders = purchases.filter(
    (item: any) => item.status === "Pending"
  ).length;

  const activeSuppliers = suppliers.filter(
    (item: any) => item.status === "Active"
  ).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "25px" }}>Reports</h1>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Orders</h3>
          <h2>{purchases.length}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Pending Orders</h3>
          <h2>{pendingOrders}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Total Suppliers</h3>
          <h2>{suppliers.length}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Active Suppliers</h3>
          <h2>{activeSuppliers}</h2>
        </div>
      </div>

      {/* Purchase Report */}
      <div style={sectionStyle}>
        <h2>Purchase Report</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>ID</th>
              <th style={headerStyle}>Purchase Item</th>
              <th style={headerStyle}>Quantity</th>
              <th style={headerStyle}>Status</th>
            </tr>
          </thead>

          <tbody>
            {purchases.length > 0 ? (
              purchases.map((purchase: any, index: number) => (
                <tr key={purchase.id}>
                  <td style={cellStyle}>{index + 1}</td>
                  <td style={cellStyle}>{purchase.title}</td>
                  <td style={cellStyle}>{purchase.quantity}</td>
                  <td style={cellStyle}>{purchase.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  style={{
                    textAlign: "center",
                    padding: "15px",
                  }}
                >
                  No Purchase Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <br />

      {/* Supplier Report */}
      <div style={sectionStyle}>
        <h2>Supplier Report</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>ID</th>
              <th style={headerStyle}>Supplier Name</th>
              <th style={headerStyle}>Phone Number</th>
              <th style={headerStyle}>Email</th>
              <th style={headerStyle}>Status</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.length > 0 ? (
              suppliers.map((supplier: any, index: number) => (
                <tr key={supplier.id}>
                  <td style={cellStyle}>{index + 1}</td>
                  <td style={cellStyle}>{supplier.name}</td>
                  <td style={cellStyle}>{supplier.contact}</td>
                  <td style={cellStyle}>{supplier.email}</td>
                  <td style={cellStyle}>{supplier.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    textAlign: "center",
                    padding: "15px",
                  }}
                >
                  No Supplier Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center" as const,
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
};

const sectionStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse" as const,
  marginTop: "15px",
};

const headerStyle = {
  background: "#2563eb",
  color: "white",
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "center" as const,
};

const cellStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "center" as const,
};

export default Reports;