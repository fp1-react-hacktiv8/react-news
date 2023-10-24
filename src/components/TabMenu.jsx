import { NavLink } from "react-router-dom";

const TabMenu = () => {
  function isActive({ isActive }) {
    return isActive ? "tab-active" : "tab-inactive";
  }

  return (
    <div className="tabs-content">
      <NavLink className={isActive} to="/" end>
        Indonesia
      </NavLink>
      <NavLink className={isActive} to="/programming">
        Programming
      </NavLink>
      <NavLink className={isActive} to="/covid">
        Covid
      </NavLink>
    </div>
  );
};

export default TabMenu;
