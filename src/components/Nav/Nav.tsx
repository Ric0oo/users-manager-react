import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/userList">user list</Link>
      </li>
      <li>
        <Link to="/userList/1">user</Link>
      </li>
    </ul>
  </nav>
);
