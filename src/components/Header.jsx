import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="justify-center">
        <nav className="navbar container sm:px-4 oxanium-font">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-300 underline text-sm sm:text-lg"
                : "text-white text-sm sm:text-lg hover:text-blue-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/WayToSumPage"
            className={({ isActive }) =>
              isActive
                ? "text-blue-300 underline text-sm sm:text-lg"
                : "text-white text-sm sm:text-lg hover:text-blue-400"
            }
          >
            Way To Sum
          </NavLink>
          <NavLink
            to="/FancyPage"
            className={({ isActive }) =>
              isActive
                ? "text-blue-300 underline text-sm sm:text-lg"
                : "text-white text-sm sm:text-lg hover:text-blue-400"
            }
          >
            Fancy Form
          </NavLink>
          <NavLink
            to="/MessyReactPage"
            className={({ isActive }) =>
              isActive
                ? "text-blue-300 underline text-sm sm:text-lg"
                : "text-white text-sm sm:text-lg hover:text-blue-400"
            }
          >
           Messy React 
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
