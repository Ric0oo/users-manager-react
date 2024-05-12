import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/user-list">UserList</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
