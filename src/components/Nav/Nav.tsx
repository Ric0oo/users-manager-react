import { NavLink } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/details">Details</NavLink>
      </li>
      <li>
        <NavLink to="/useradd">User Add</NavLink>
      </li>
      <li>
        <NavLink to="/useredit">User Edit</NavLink>
      </li>
    </ul>
  </nav>
);
