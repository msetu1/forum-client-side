import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.photoURL)
          .then(async () => {
            const userInfo = {
              name: data.name,
              photoURL: data.photoURL,
              email: data.email,
            };
            const res = await axiosPublic.post("/users", userInfo);
            console.log(res.data);
            console.log("user profile info update");
            reset();
            Swal.fire({
              title: "Success",
              text: "User created successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
          })
          .catch((error) => {
            console.error(error);
           Swal.fire({
              title: "Error!",
              text: "Something went wrong!!",
              icon: "error",
              confirmButtonText: "Ok",
            });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-[#ecfdf5] min-h-screen">
      {/* <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet> */}
      <div className="max-w-7xl mx-auto pt-10 pb-4">
        <div className=" border px-10 border-black rounded-lg w-[500px] mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div>
              <h1 className=" text-4xl mt-8 text-center font-bold">
                Please Register Now
              </h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="photo url"
                className="input input-bordered"
                required
              />
              {errors.photoURL && (
                <span className="text-red-600">photo URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* )/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less then 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one uppercase one lowercase and one special
                  characters
                </p>
              )}
            </div>
            <div className="form-control mt-6 mb-4">
              <input
                className="btn btn-outline border-0 text-xl font-bold border-[#ea580c] border-b-4 "
                type="submit"
                value="Sign Up"
              />
            </div>
            <div>
              <p className="text-center text-gray-600 text-xl">
                Already have an account?{" "}
                <Link to="/login" className="text-[#ea580c] font-bold text-2xl">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
