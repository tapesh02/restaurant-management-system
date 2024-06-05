import { Card, Typography, Stack } from "@mui/material";
import { LineChart, Gauge } from "@mui/x-charts";

const Dashboard = () => {
  const RenderCards = () => {
    return ["Total Orders", "Total Sales", "Cash Orders", "Online Orders"].map(
      (cardTitle, index) => (
        <Card className="dash-cards" key={index}>
          <Typography variant="h6">{cardTitle}</Typography>
          <Typography variant="h4">
            $ {Math.floor(Math.random() * 1000)}k
          </Typography>
        </Card>
      )
    );
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
        height={350}
      />
    );
  };

  return (
    <div className="dashboard-wrapper">
      <Typography variant="h6">Hi! Tapesh</Typography>
      <Stack direction="row" className="dash-cards-wrapper">
        <RenderCards />
      </Stack>
      <Stack direction="row" className="charts-wrapper">
        <div className="line-chart-wrapper">
          <div className="chart-header">
            <Typography variant="subtitle2">January sales</Typography>
          </div>
          <RenderLineChart />
        </div>
        <div className="gauge-chart-wrapper">
          <div className="chart-header">
            <Typography variant="subtitle2">Monthly Average</Typography>
          </div>
          <Gauge value={50} valueMin={10} valueMax={60} innerRadius="75%" />
        </div>
      </Stack>
    </div>
  );
};
export default Dashboard;
