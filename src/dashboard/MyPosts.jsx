import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyPosts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: myPosts = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["myPosts", user?.displayName],
    queryFn: async () => {
      const res = await axiosSecure.get(`/posts/${user?.email}`);
      return res.data;
    },
  });
  if (isPending) {
    return <p>loading ....</p>;
  }
  console.log(myPosts);
  const handleDeletePost = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`posts/${id}`).then((res) => {
          if (res.data)
            Swal.fire({
              title: "Deleted!",
              text: "Your post has been deleted.",
              icon: "success",
            });
          refetch();
        });
      }
    });
  };
  return (
    <div className="max-w-5xl mx-auto">
      <div>
        <h1 className="text-center font-bold text-4xl my-10">My Posts</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>Delete</th>
              <th>Post Title</th>
              <th>Up Vote</th>
              <th>Down Vote</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {myPosts?.map((post) => (
              <tr key={post._id}>
                <th>
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="btn btn-square hover:bg-red-500 btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{post.title}</div>
                    </div>
                  </div>
                </td>
                <td>{post.upVote}</td>
                <td>{post.downVote}</td>
                <button 
                className="btn btn-ghost">Comment</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPosts;
