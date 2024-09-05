import {  Typography, Stack, useTheme, useMediaQuery } from "@mui/material";
import { LineChart, Gauge } from "@mui/x-charts";
import RenderFavFoodTable from "./RenderFavFoodTable";
import RenderCards from "./RenderCards";
import RenderFeedbacks from "./RenderFeedbacks";

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const RenderLineChart = () => {
    return (
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
            color: "#105472",
          },
        ]}
        height={350}
      />
    );
  };

  return (
    <div className="dashboard-wrapper">
      <Stack direction="row" className="dash-cards-wrapper">
        <RenderCards />
      </Stack>
      <Stack direction="row" className="charts-wrapper">
        <div className="line-chart-wrapper">
          <div className="chart-header">
            <Typography variant="h6">January sales</Typography>
          </div>
          <RenderLineChart />
        </div>
        <div className="gauge-chart-wrapper">
          <div className="chart-header">
            <Typography variant="h6">Monthly Average</Typography>
          </div>
          <Gauge
            value={50}
            valueMin={10}
            valueMax={60}
            innerRadius="75%"
            cornerRadius="50%"
            height={ isMobile ? 150 : 300}
          />
        </div>
      </Stack>
      <Stack direction="row" gap={3} className="items-wrapper">
        <Stack direction="column" className="feedback-wrapper-main">
          <Typography variant="h6">Feedbacks(3)</Typography>
          <RenderFeedbacks />
        </Stack>
        <div className="fav-food-wrapper">
          <Typography variant="h6">Most ordered</Typography>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Weekly</th>
                <th>Monthly</th>
                <th>Average</th>
              </tr>
            </thead>
            <RenderFavFoodTable />
          </table>
        </div>
      </Stack>
    </div>
  );
};
export default Dashboard;
