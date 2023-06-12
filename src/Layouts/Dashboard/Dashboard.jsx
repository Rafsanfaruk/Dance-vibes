import { NavLink, Outlet } from "react-router-dom";
import { BiSelectMultiple } from "react-icons/bi";
import { FaWallet, FaHome } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { MdClass } from "react-icons/md";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useInstructor from "../../hooks/useInstructors";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isAdminLoading || isInstructorLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
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
            // Admin section
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclasses">
                  <MdClass /> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FcContacts /> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            // Instructor section
            <>
              <li>
                <NavLink to="/dashboard/instructorhome">
                  <FaHome /> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclasses">
                  <MdClass /> My Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additemclasses">
                  <MdClass /> Add Class
                </NavLink>
              </li>
            </>
          ) : (
            // User section
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet /> Payment
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
                  <MdClass /> My Enrolled Classes
                </NavLink>
              </li>
            </>
          )}

          <div className="divider" />
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <FcContacts /> Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/sitting">
              <AiFillSetting /> Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/logout">
              <FiLogOut /> Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
