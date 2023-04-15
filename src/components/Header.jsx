import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <span>Context API Practice</span>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/cart">Cart Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
