import { Card, CardContent, Typography } from "@mui/material";

const Tables = () => {
  const tableCards = [
    { header: "Total Tables", totalNumber: 20 },
    { header: "Active Tables", totalNumber: 12 },
    { header: "Team Members", totalNumber: 25 },
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

  return (
    <div className="tables-wrapper">
      <RenderTablesCard />
    </div>
  );
};

export default Tables;
