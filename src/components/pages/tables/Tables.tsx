import { Card, CardContent, Typography } from "@mui/material";

const Tables = () => {
  const tableCards = [
    { header: "Total Tables", totalNumber: 20 },
    { header: "Active Tables", totalNumber: 12 },
    { header: "Team Members", totalNumber: 25 },
  ];

  const tableData = [
    {
      tableNumber: 1,
      serverName: "Kunal Kamra",
      orderStatus: "served",
      customerName: "Jane Smith",
    },
    {
      tableNumber: 2,
      serverName: "Think Tank",
      orderStatus: "preparing",
      customerName: "John Smith",
    },
    {
      tableNumber: 3,
      serverName: "Cool Dude",
      orderStatus: "waiting",
      customerName: "Joe Smith",
    },
  ];

  const RenderTablesCard = () => {
    return tableCards?.map(({ header, totalNumber }, index) => (
      <Card className="tables-card" key={index}>
        <Typography variant="h5" className="tables-card-header">
          {header}
        </Typography>
        <CardContent className="tables-card-content">
          <Typography variant="h4">{totalNumber}</Typography>
        </CardContent>
      </Card>
    ));
  };

  const RenderTableStatus = () => {
    return tableData.map(
      ({ tableNumber, serverName, orderStatus, customerName }) => (
        <tbody key={tableNumber}>
          <tr>
            <td>{tableNumber}</td>
            <td>{serverName}</td>
            <td>
              <p data-status={orderStatus}>{orderStatus}</p>
            </td>
            <td>{customerName} </td>
          </tr>
        </tbody>
      )
    );
  };

  return (
    <div className="tables-wrapper">
      <div className="tables-card-wrapper">
        <RenderTablesCard />
      </div>
      <table>
        <thead>
          <tr className="active-table-row">
            <th colSpan={4}>Active Table</th>
          </tr>
          <tr>
            <th>Table</th>
            <th>Server</th>
            <th>Order Status</th>
            <th>Customer</th>
          </tr>
        </thead>
        <RenderTableStatus />
      </table>
    </div>
  );
};

export default Tables;
