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
              ? "text-xl font-bold underline underline-offset-2 text-[#dc2626]"
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
              ? "text-xl font-bold underline underline-offset-2 text-[#dc2626]"
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
          <div className="navbar-start">
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
            <div className="flex items-center gap-5">
              <img
                className="h-[90px] w-[100px] rounded-lg"
                src="https://i.ibb.co/kDyHy5C/logo.jpg"
                alt=""
              />
              <h1 className="font-bold text-3xl text-[#dc2626]">React Forum</h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" flex items-center px-1 text-xl font-bold text-slate-600 space-x-5">
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
