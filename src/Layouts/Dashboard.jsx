import { Link, Outlet } from "react-router-dom";
import { BiSelectMultiple,BiSelection } from "react-icons/bi";
import { FaWallet,FaHome, } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gradient-to-b from-purple-500 to-blue-500 text-black font-semibold text-xl">
          {/* Sidebar content here */}
          
          <li>
            <Link><FaHome></FaHome>User Home</Link>
          </li>
          <li>
            <Link><FaWallet></FaWallet>Payment</Link>
          </li>
          <li>
            <Link><BiSelectMultiple />My Cart</Link>
          </li>
          <li>
            <Link><BiSelection></BiSelection> Classes</Link>
          </li>
          <br></br>
          <li>
            <Link><FaHome></FaHome> Home</Link>
          </li>
          <li>
            <Link><FcContacts></FcContacts>  Contact</Link>
          </li>
          <li>
            <Link><AiFillSetting></AiFillSetting> Sittings</Link>
          </li>
          <li>
            <Link> <FiLogOut></FiLogOut> Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
