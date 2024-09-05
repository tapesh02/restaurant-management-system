import { useState } from "react";
import mockInventory from "../../../mockData/mockInventory.json";
import { MdEditLocationAlt } from "react-icons/md";
import IconComponent from "../../iconComponent/IconComponent";
import { MdDeleteForever } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import AddItem from "./AddItem";

const Inventory = () => {
  const [showForm, setShowForm] = useState(false);

  const RenderInventoryTable = () => {
    return mockInventory?.map(({ id, itemName, quantity, price, category }) => (
      <tbody key={id}>
        <tr>
          <td>{id}</td>
          <td>{itemName}</td>
          <td>{quantity} </td>
          <td>{price}</td>
          <td>{category}</td>
          <td>
            <IconComponent icon={MdEditLocationAlt} />
            <IconComponent icon={MdDeleteForever} />
          </td>
        </tr>
      </tbody>
    ));
  };

  return (
    <div className="inventory-wrapper">
      <Typography variant="h4">Inventory</Typography>
      <div className="inventory-buttons-wrapper">
        <Button variant="outlined" onClick={()=> setShowForm(true)}>Add Item</Button>
        <AddItem showForm={showForm} setShowForm={setShowForm}/>
        <Button variant="outlined">Export</Button>
      </div>
      <table cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quntity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <RenderInventoryTable />
      </table>
    </div>
  );
};
export default Inventory;
