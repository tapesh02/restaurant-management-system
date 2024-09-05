import RenderTableStatus from "./RenderTableStatus";
import RenderTablesCard from "./RenderTablesCard";

const Tables = () => {
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
        <tbody >
        <RenderTableStatus />
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
