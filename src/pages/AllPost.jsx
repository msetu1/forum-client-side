import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Post from "./Post";

const AllPost = () => {
  const axiosPublic = useAxiosPublic();
  const { data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/posts");
      return res.data;
    },
  });
  console.log(posts);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto gap-6 mt-20">
      {posts?.map((post) => (
        <Post key={post._id}
        post={post}
        ></Post>
      ))}
    </div>
  );
};

export default AllPost;
