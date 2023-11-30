import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaAddressCard } from "react-icons/fa6";
import { MdPostAdd } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const Dashboard = () => {
  const {user}=useAuth();
  const axiosPublic=useAxiosPublic()
const {data:admin,isPending}=useQuery({
  queryKey:['isadmin'],
  queryFn:async()=>{
    const res=await axiosPublic.get(`/users/${user.email}`)
    return res.data;

  }
})
if(isPending){
  return
}
console.log(admin);
const isAdmin=admin?.admin


  return (
    <div className="flex gap-8 ">
      {/* dashboard side bar */}
      {isAdmin ? (
        <div className="w-72 min-h-screen bg-[#ea580c]  px-3 pt-10">
        <ul className="menu">
        <li>
        <NavLink 
        to="/"
        className="text-slate-200 font-bold text-2xl mb-3"
        ><IoHomeOutline className="text-black text-3xl " />Home</NavLink>
      </li>
          <li>
            <NavLink 
            to="/dashboard/adminProfile"
            className="text-slate-200 font-bold text-2xl mb-3"
            ><CgProfile className="text-black text-3xl " /> Admin Profile</NavLink>
          </li>
          <li>
            <NavLink 
            to="/dashboard/menageUsers"
            className="text-slate-200 font-bold text-2xl mb-3"
            ><FaAddressCard className="text-black text-3xl" />Menage Users</NavLink>
          </li>
          <li>
              <NavLink 
              to="/dashboard/announcements"
              className="text-slate-200 font-bold text-2xl"
              ><MdPostAdd className="text-black text-3xl" /> Announcements</NavLink>
          </li>
        </ul>
      </div>
      ) : (
        <div className="w-72 min-h-screen bg-[#ea580c]  px-3 pt-10">
          <ul className="menu">
            <li>
              <NavLink
                to="/"
                className="text-slate-200 font-bold text-2xl mb-3"
              >
                <IoHomeOutline className="text-black text-3xl " />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/myProfile"
                className="text-slate-200 font-bold text-2xl mb-3"
              >
                <CgProfile className="text-black text-3xl " /> My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addPost"
                className="text-slate-200 font-bold text-2xl mb-3"
              >
                <FaAddressCard className="text-black text-3xl" /> Add Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/myPost"
                className="text-slate-200 font-bold text-2xl"
              >
                <MdPostAdd className="text-black text-3xl" /> My Posts
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {/* dashboard content  */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
