type Props = {
  title: string;
  value: string;
};


function DashboardCard({ title, value }: Props) {

  return (
    <div
      style={{
        background: "white",
        width: "250px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >

      <h3 style={{
        color: "gray",
        fontSize: "18px"
      }}>
        {title}
      </h3>


      <h1 style={{
        fontSize: "32px",
        fontWeight: "bold",
        marginTop: "10px"
      }}>
        {value}
      </h1>


    </div>
  );
}

export default DashboardCard;