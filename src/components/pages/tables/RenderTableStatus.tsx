import {tableData} from "../../../helpers/dataHelpers";
import {Avatar} from "@mui/material";

const RenderTableStatus = () => {
    return tableData.map(
      ({ tableNumber, serverName, orderStatus, customerName }) => (
        <tbody key={tableNumber}>
          <tr>
            <td>{tableNumber}</td>
            <td>
              <span>
                <Avatar
                  alt={serverName}
                  src="https://i.pravatar.cc/300"
                  sx={{ width: 35, height: 35 }}
                />
              </span>
              {serverName}
            </td>
            <td>
              <p data-status={orderStatus}>{orderStatus}</p>
            </td>
            <td>{customerName} </td>
          </tr>
        </tbody>
      )
    );
  };

  export default RenderTableStatus;