import { Card, Typography, Stack } from "@mui/material";
import { LineChart, Gauge } from "@mui/x-charts";

const Dashboard = () => {
  const RenderCards = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Card className="dash-cards" key={index}>
        <Typography variant="subtitle1">Total Orders</Typography>
        <Typography variant="h4">
          $ {Math.floor(Math.random() * 1000)}k
        </Typography>
      </Card>
    ));
  };

  const RenderLineChart = () => {
    return (
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
          },
        ]}
      />
    );
  };

  return (
    <div className="dashboard-wrapper">
      <Typography variant="h6">Hi! Tapesh</Typography>
      <Stack direction="column" className="dash-cards-wrapper">
        <RenderCards />
      </Stack>
      <Stack direction="row" className="charts-wrapper">
        <div className="line-chart-wrapper">
          <div className="chart-header">
            <Typography variant="subtitle1">January sales</Typography>
          </div>
          <RenderLineChart />
        </div>
        <div className="gauge-chart-wrapper">
          <Gauge value={50} valueMin={10} valueMax={60}   innerRadius="75%"/>
        </div>
      </Stack>
    </div>
  );
};
export default Dashboard;
