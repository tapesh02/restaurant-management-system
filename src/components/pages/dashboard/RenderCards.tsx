import { Card, Typography } from "@mui/material";
import { FiActivity } from "react-icons/fi";
import IconComponent from "../../iconComponent/IconComponent";

const RenderCards = () => {
    return ["Total Orders", "Total Sales", "Cash Orders", "Online Orders"].map(
      (cardTitle, index) => (
        <Card className="dash-cards" key={index}>
          <IconComponent icon={FiActivity} />
          <Typography variant="h6">{cardTitle}</Typography>
          <Typography variant="h4">
            {Math.floor(Math.random() * 1000)}
          </Typography>
          <Typography variant="body2">
            + {Math.floor(Math.random() * 100)} % from last month
          </Typography>
        </Card>
      )
    );
  };

  export default RenderCards;