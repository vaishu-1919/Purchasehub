interface ReportTableProps {
  title: string;
  headers: string[];
  data: any[];
}

function ReportTable({
  title,
  headers,
  data,
}: ReportTableProps) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        marginBottom: "25px",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>{title}</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "white" }}>
            {headers.map((header) => (
              <th
                key={header}
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {index + 1}
                </td>

                {Object.values(row)
                  .filter((_, i) => i !== 0)
                  .map((value, i) => (
                    <td
                      key={i}
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      {String(value)}
                    </td>
                  ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length}
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ReportTable;