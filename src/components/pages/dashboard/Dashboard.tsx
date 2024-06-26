/* eslint-disable react/prop-types */
import { Card, Typography, Stack } from "@mui/material";
import { LineChart, Gauge } from "@mui/x-charts";
import { IoIosStar } from "react-icons/io";
import IconComponent from "../../iconComponent/IconComponent";
import { FiActivity } from "react-icons/fi";

const Dashboard = () => {
  const favFoods = [
    {
      id: 1,
      dishName: "Chiken Tikka Masala",
      timesOrdered: 25,
      image:
        "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      dishName: "Veg Kolhapuri",
      timesOrdered: 10,
      image:
        "https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      dishName: "Chicken Handi",
      timesOrdered: 55,
      image:
        "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      dishName: "Veg Kolhapuri",
      timesOrdered: 10,
      image:
        "https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      dishName: "Chicken Handi",
      timesOrdered: 55,
      image:
        "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const RenderCards = () => {
    return ["Total Orders", "Total Sales", "Cash Orders", "Online Orders"].map(
      (cardTitle, index) => (
        <Card className="dash-cards" key={index}>
          <IconComponent icon={FiActivity} />
          <Typography variant="h6">{cardTitle}</Typography>
          <Typography variant="h4">
            {Math.floor(Math.random() * 1000)}k
          </Typography>
          <Typography variant="body2">
            + {Math.floor(Math.random() * 100)} % from last month
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
            color: "#105472",
          },
        ]}
        height={350}
      />
    );
  };

  const RenderFavFoodTable = () => {
    return favFoods?.map(({ id, dishName, timesOrdered, image }, index) => (
      <tbody key={id}>
        <tr>
          <td>{index + 1}</td>
          <td>
            <span>
              <img src={image} alt="food image" width={50} height={50} />
            </span>
            {dishName}
          </td>
          <td>{timesOrdered} </td>
          <td>{Math.floor(Math.random() * 100)}</td>
          <td>{Math.floor(Math.random() * 100)}</td>
        </tr>
      </tbody>
    ));
  };

  const RenderFeedbacks = () => {
    return (
      <div className="feedback-wrapper">
        <div className="reviewer-image-wrapper">
          <img src="https://i.pravatar.cc/300" alt="reviewer image" />
        </div>
        <div className="reviewer-wrapper">
          <div className="reviewer-wrapper-top">
            <div className="reviewer-header">
              <Typography variant="h6"> Kuanl Kamra</Typography>
              <span>
                <IconComponent icon={IoIosStar} />
                <IconComponent icon={IoIosStar} />
              </span>
            </div>
            <Typography variant="subtitle1" className="date-time">
              Jan 20, 2021
            </Typography>
          </div>
          <Typography variant="body1" className="reviwe-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos deleniti eius nam? Fuga, et animi. Ipsam enim molestiae
            labore aspernatur voluptate necessitatibus aut! Aspernatur provident
            porro ab voluptate, aliquam quod!
          </Typography>
        </div>
      </div>
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
          />
        </div>
      </Stack>
      <Stack direction="row" gap={3} className="table-wrapper">
        <Stack direction="column" className="feedback-wrapper-main">
          <Typography variant="h6">Feedbacks(3)</Typography>
          <RenderFeedbacks />
          <RenderFeedbacks />
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
