import { NavLink, Outlet } from "react-router-dom";
import { BiSelectMultiple } from "react-icons/bi";
import { FaWallet, FaHome } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { MdClass } from "react-icons/md";
import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  const isInstructor = true; // Add this line to check if the user is an instructor

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gradient-to-b from-purple-500 to-blue-500 text-black text-xl">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclasses">
                  <MdClass></MdClass> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FcContacts></FcContacts> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? ( // Add this condition to check if the user is an instructor
            <>
              <li>
                <NavLink to="/dashboard/instructorhome">
                  <FaHome></FaHome>Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclasses">
                  <MdClass></MdClass> My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet></FaWallet>Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myselectedclasses">
                  <BiSelectMultiple />
                  My Selected Classes
                  <span className="badge badge-primary badge-lg">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrollclasses">
                  <MdClass></MdClass> My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}

          <br></br>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <FcContacts></FcContacts> Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/sitting">
              <AiFillSetting></AiFillSetting> Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/logout">
              <FiLogOut></FiLogOut> Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
