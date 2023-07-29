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
        to="/formikFromHooks"
      >
        FormikFromHooks
      </NavLink>

      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/formikComponent"
      >
        FormikComponent
      </NavLink>

      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/formikWithReusableControls"
      >
        FormikWithReusableControls
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
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/timetable"
      >
        Timetable
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/filter"
      >
        Filter
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/form"
      >
        ProductReviewForm
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/video"
      >
        VideoPlayer
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/reader"
      >
        Reader
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/recipe"
      >
        Recipe
      </NavLink>
    </nav>
  );
};
export default Navigation;
