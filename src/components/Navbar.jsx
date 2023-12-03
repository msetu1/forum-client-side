import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch();
  };
  const links = (
    <>
      <li className={`${user ? "hidden" : "block"}`}>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className={`${user ? "block" : "hidden"}`}>
        <NavLink
          to="/dashboard/myPost"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]"
              : ""
          }
        >
          My Posts
        </NavLink>
      </li>
      <li className={`${user ? "hidden" : "block"}`}>
        <NavLink to="/dashboard/cart">
          <button className="btn">
            <MdShoppingCart />
            <div className="badge badge-secondary">+</div>
          </button>
        </NavLink>
      </li>
      <li className={`${user ? "hidden" : "block"}`}>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]"
              : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li className={`${user ? "hidden" : "block"}`}>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-xl font-bold underline underline-offset-2 text-[#ea580c]"
              : ""
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-black bg-opacity-30 md:px-20 px-5 lg:px-28  py-7 fixed z-10 text-white">
        <div className="navbar-start ">
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
              className="menu menu-sm dropdown-content p-2 shadow text-black lg:text-white  w-52 "
            >
              {links}
            </ul>
          </div>
          <div className=" lg:block hidden">
            <div className="flex items-center gap-4">
              <img
                className="w-[80px] h-[80px]"
                src="https://i.ibb.co/kDyHy5C/logo.jpg"
                alt=""
              />
              <h1 className="text-4xl font-berkshire_font font-semibold text-[#ea580c]">
                React Forum
              </h1>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center text-xl font-semibold text-black lg:text-white space-x-5">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <img
                    className="h-[50px] w-[50px] rounded-full"
                    src={user?.photoUrl}
                    alt=""
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="text-xl text-black font-semibold px-3 mb-3">
                    {user?.displayName}
                  </li>
                  <li className="text-black  mb-6 px3 ">
                    <Link
                    to="/dashboard"
                    className="font-semibold text-xl"
                    >Dashboard</Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-outline px-8 border-0 border-b-4 text-black text-2xl"
                    >
                      Sign up
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className={`${user ? "block" : "hidden"}`}>
              <button className="btn btn-outline px-8 border-0 border-b-4 text-white text-2xl">
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
