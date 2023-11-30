import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";


const Post = ({ post }) => {
  let { authorImg,upVote,downVote
    , authorName,postImg,_id, tag, postTime } = post || {};
    const axiosPublic=useAxiosPublic()
  const [upvote,setUpvotes]=useState(false)
  const [downvote,setDownvotes]=useState(false)
  // handle like
  const handleUpVoteButton = async (id) => {
    if (!upvote) {
        if (downvote) {
            setDownvotes(false);
            if (downVote > 0) {
                downVote--;
            }

        }
        upVote++;

        setUpvotes(true);
    } else {
        if (upVote > 0) {
            upVote--;
        }

        setUpvotes(false);
    }
    // const res = await axiosPublic.patch(`/posts/update/${id}, { upVote, downVote }`);
    // if (res?.data) {
    //     // refetch()
    // }

    console.log(`Upvotes: ${upVote}, Downvotes: ${downVote}`);
};
// handle dislike
const handleDownVoteButton = async (id) => {
    if (!downvote) {
        if (upvote) {
            setUpvotes(false);
            if (upVote > 0) {
                upVote--;
            }
        }
        downVote++;

        setDownvotes(true);
    } else {
        if (downVote > 0) {
            downVote--;
        }
        setDownvotes(false);
    }
    // const res = await axiosPublic.patch(`/posts/update/${id}, { upVote, downVote }`);
    // if (res?.data) {
    //     // refetch()
    // }
    console.log(`Upvotes: ${upVote}, Downvotes: ${downVote}`);
};
  return (
    <div>
      <div className="card px-5 bg-base-100 shadow-xl">
        <div className="flex items-center gap-4">
          <figure>
            <img className="w-[80px] h-[80px] rounded-full " src={authorImg
} />
          </figure>
          <div>
            <h2 className="card-title">{authorName}</h2>
            <p>{postTime}</p>
          </div>
        </div>
        <div className="">
          <p className="text-2xl font-bold mt-5 mb-5">{tag}</p>
          <figure>
            <img className="w-full h-[300px] mb-3" src={postImg} />
          </figure>
          <div className="flex justify-between text-xl my-5">
            <button className="btn"
            onClick={()=>handleUpVoteButton(_id)}
            >up vote</button>
            <button className="btn"
            onClick={()=>handleDownVoteButton(_id)}
            >down vote</button>
            <button className="btn">Comment</button>
            <button className="btn">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
