import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useDateTime from "../hooks/useDateTime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import useAxiosPublic from "../hooks/useAxiosPublic";

const AddPost = () => {
  const currentDateTime = useDateTime();
  const axiosPublic =useAxiosPublic()
  const [selectedTag, setSelectedTag] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const tagOptions = [
    { value: "education", label: "education" },
    { value: "programming", label: "programming" },
    { value: "webDevelopment", label: "webDevelopment" },
    { value: "general", label: "general" },
    { value: "softwareDevelopment", label: "softwareDevelopment" },
    { value: "computer", label: "computer" },
    { value: "technology", label: "technology" },
  ];
  const handleTagChange = (selectedOption) => {
    setSelectedTag(selectedOption);
  };

  const handleAddPost = async(data) => {
    const title =data.title;
    const photo = data.photo;
    const description = data.description;
    const selectedTagValue = selectedTag ? selectedTag.value : null;
    const postInfo = {
      authorName: user?.displayName,
      authorImg: user?.photoURL,
      authorEmail: user?.email,
      title,
      description,
      tag: selectedTagValue,
      postImg: photo,
      postTime: currentDateTime,
      upVote: 0,
      downVote: 0,
      share: 0,
    };
    // console.log(addPost);
    const res=await axiosPublic.post("/posts", postInfo)
      if (res.data.insertedId) {
        reset()
         Swal.fire({
          title: "Success",
          text: "added post Successfully",
          icon: "success",
          confirmButtonText: "Ok",
          
        });
      }
    console.log(postInfo);
  };
  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-5 ">Add Post</h1>
      <div className="border bg-slate-200 mb-20 rounded-lg max-w-4xl mx-auto">
        <form onSubmit={ handleSubmit(handleAddPost)} className="card-body">
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text">Select Tag</span>
            </label>
            <Select
              options={tagOptions}
              value={selectedTag}
              onChange={handleTagChange}
              placeholder="Select a tag"
              required
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-black">
                  Post Title
                </span>
              </label>
              <input
                type="text"
              {...register('title')}
                placeholder="Title"
                className="btn text-left btn-outline border-0 border-[#ea580c] border-b-4 text-sm "
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-black label-text font-semibold text-xl">
                  Image Url
                </span>
              </label>
              <input
                type="text"
                {...register('photo')}
                placeholder="photo url"
                className="btn text-left btn-outline border-0 border-[#ea580c] border-b-4 text-sm "
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-black label-text font-semibold text-xl">
                Description
              </span>
            </label>
            <textarea
              {...register('description')}
              placeholder="Your description"
              className="p-8 rounded "
              id=""
              cols="30"
              rows="2"
            ></textarea>
          </div>
          <div className="form-control mt-6 w-[200px]">
            <button
              type="submit"
              className="btn text-left btn-outline border-0 border-[#ea580c] border-b-4 text-2xl font-bold "
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
