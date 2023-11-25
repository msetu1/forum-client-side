import { NavLink} from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaAddressCard } from "react-icons/fa6";
import { MdPostAdd } from "react-icons/md";
const Dashboard = () => {
    return (
        <div className="flex gap-8 ">
          <div className="w-72 min-h-screen bg-[#ea580c]  px-3 pt-10">
            <ul className="menu">
              <li>
                <NavLink 
                to="/dashboard/myProfile"
                className="text-slate-200 font-bold text-2xl mb-3"
                ><CgProfile className="text-black text-3xl " /> My Profile</NavLink>
              </li>
              <li>
                <NavLink 
                to="/dashboard/addPost"
                className="text-slate-200 font-bold text-2xl mb-3"
                ><FaAddressCard className="text-black text-3xl" /> Add Post</NavLink>
              </li>
              <li>
                  <NavLink 
                  to="/dashboard/myPost"
                  className="text-slate-200 font-bold text-2xl"
                  ><MdPostAdd className="text-black text-3xl" /> My Posts</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            
          </div>
        </div>
      );
};

export default Dashboard;