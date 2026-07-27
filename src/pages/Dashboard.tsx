import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div>

      <h1 style={{
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "20px"
      }}>
        Dashboard
      </h1>


      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >

        <DashboardCard
          title="Total Orders"
          value="120"
        />


        <DashboardCard
          title="Pending Orders"
          value="25"
        />


        <DashboardCard
          title="Approved Orders"
          value="95"
        />


      </div>


    </div>
  );
}

export default Dashboard;