import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-2xl font-bold underline underline-offset-2 text-[#ea580c]"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/membership"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-2xl font-bold underline underline-offset-2 text-[#ea580c]"
              : ""
          }
        >
          Membership
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="">
        <div className="navbar py-5 fixed z-10 max-w-7xl mx-auto">
          <div className="navbar-start text-white">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 z-[1] p-2 shadow "
              >
                {links}
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="flex  items-center gap-5">
                <img
                  className="w-[80px] md:ml-8 lg:ml-20   h-[80px] rounded"
                  src="https://i.ibb.co/kDyHy5C/logo.jpg"
                  alt=""
                />
                <h1 className="font-bold text-3xl text-[#ea580c]">
                  React Forum
                </h1>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" flex items-center px-1 text-2xl font-bold text-[#f1f5f9] space-x-5">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            <a className=" bg-[#15803d] rounded hover:rounded-full hover:bg-slate-700 text-white  text-2xl font-semibold px-8 py-3 ">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
