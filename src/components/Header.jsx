import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header w-full">
      <div className="navbar">
        <nav className="bg-gray-800 p-4 flex gap-6 justify-center">
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
