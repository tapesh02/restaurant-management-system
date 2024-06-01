import { Card, Typography, Stack } from "@mui/material";

const Dashboard = () => {

  const RenderCards = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Card className="dash-cards" key={index}>
        <Typography variant="subtitle1">Total Orders</Typography>
        <Typography variant="h4">{index + 1}</Typography>
      </Card>
    ));
  };
  return (
    <div className="dashboard-wrapper">
      <Typography variant="h6" >
        Hi! Tapesh
      </Typography>
      <Stack direction="column" className="dash-cards-wrapper">
        <RenderCards/>
      </Stack>
    </div>
  );
};
export default Dashboard;
