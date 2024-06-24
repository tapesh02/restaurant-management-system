import { NavLink } from "react-router-dom";
import { menuList } from "../../helpers/dataHelpers";

interface DrawerProps{
    handleMenu : () => void
}

const RenderDrawer = (props: DrawerProps) =>{
    const {handleMenu} = props;

    return menuList.map(({id, menuitem, icon}) => {
        const toPath =
          menuitem.toLowerCase() === "dashboard"
            ? "/"
            : `/${menuitem.toLowerCase()}`;
            const Icon = icon;
        return (
          <div className="menu-list-wrapper" key={id} role="presentation">
            <NavLink to={toPath} className="menu-list" onClick={handleMenu}>
              <span><Icon/></span>
              {menuitem}
            </NavLink>
          </div>
        );
      })
}


export default RenderDrawer;