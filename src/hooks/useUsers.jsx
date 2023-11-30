import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUsers = () => {
    const axiosPublic=useAxiosPublic()
const {data:users,isPending:loading,refetch:userRefetch}=useQuery({
    
    queryKey:['users','totalUsers'],
    queryFn:async()=>{
        const res=await axiosPublic.get('/users')
        return res.data
    }
})
console.log(users);
    return {users,loading,userRefetch};
};

export default useUsers;