import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const activeStyle = {
    color: 'orange',
  };

  return (
    <nav className={style.nav}>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/dropdown"
      >
        Dropdown
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/boxes"
      >
        Boxes
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/colorPicker"
      >
        ColorPicker
      </NavLink>

      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/counter"
      >
        Counter
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/alerts"
      >
        Alerts
      </NavLink>
    </nav>
  );
};
export default Navigation;
