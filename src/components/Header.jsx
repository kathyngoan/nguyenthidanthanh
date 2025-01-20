import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="bg-gray-800 justify-center">
        <nav className="navbar container px-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-300 underline text-lg"
                : "text-white text-lg hover:text-blue-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/FancyPage"
            className={({ isActive }) =>
              isActive
                ? "text-blue-300 underline text-lg"
                : "text-white text-lg hover:text-blue-400"
            }
          >
            Fancy Page
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
