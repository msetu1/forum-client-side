import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const Comments = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myPosts = [], isPending } = useQuery({
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
  const commentFind = myPosts.find((comment) => comment.id === myPosts._id);
  return (
    <div>
      <div className="max-w-5xl mx-auto my-10">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              src={commentFind.postImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Post Title: {commentFind.title}</h2>
            <p>{commentFind.description}</p>
            <div className="flex items-center gap-4 mt-4">
              <figure>
                <img
                  className="w-[80px] h-[80px] rounded-full "
                  src={commentFind.authorImg}
                />
              </figure>
              <div>
                <h2 className="card-title">{commentFind.authorName}</h2>
                <p>{commentFind.authorEmail}</p>
              </div>
            </div>
            <div className="card-actions mt-4">
              <button className="btn btn-outline border-0 border-[#ea580c] border-b-4 text-xl font-bold px-6">Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
