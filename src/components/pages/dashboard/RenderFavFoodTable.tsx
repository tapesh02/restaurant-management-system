import { favFoods } from "../../../helpers/dataHelpers";

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

  export default RenderFavFoodTable;