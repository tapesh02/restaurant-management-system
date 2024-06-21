import {Card, CardContent, Typography } from "@mui/material";
import {tableCards} from "../../../helpers/dataHelpers"

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

  export default RenderTablesCard;