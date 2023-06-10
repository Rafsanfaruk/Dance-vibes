import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BiSelectMultiple } from "react-icons/bi";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] =useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error logging out.");
      });
  };
  const navOptions = (
    <>
      <li>
        <Link
          to="/"
          className="text-black text-xl hover:text-gray-300 px-2 py-1"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/instructors"
          className="text-black text-xl hover:text-gray-300 px-2 py-1"
        >
          Instructors
        </Link>
      </li>
      <li>
        <Link
          to="/classes"
          className="text-black text-xl hover:text-gray-300 px-2 py-1"
        >
          Classes
        </Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">
          <button className="btn bg-gray-500 gap-2">
            <BiSelectMultiple />
            <div className="badge badge-primary badge-lg">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li className="text-black text-xl px-2 py-1">{user?.displayName}</li>
          <li>
            <button
              onClick={handleLogOut}
              className="text-black text-xl hover:text-gray-300 px-2 py-1"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link
            to="/login"
            className="text-black text-xl hover:text-gray-300 px-2 py-1"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-black">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Dance Vibes
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn my-btn">
          GET MemberShip
        </Link>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default NavBar;
