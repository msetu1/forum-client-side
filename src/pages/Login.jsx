import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

// import { Helmet } from "react-helmet-async";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
    const {login}=useAuth()
    const location =useLocation()
    const navigate=useNavigate()
  const from=location.state?.from?.pathname||"/"
    useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // logged in
    login(email, password)
    .then(result => {
        console.log(result.user);
        Swal.fire({
            title: 'Success',
            text: 'user Login Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          navigate(from,{replace:true})
      })
      .catch(error=>{
        console.error(error);
        Swal.fire({
            title: 'Error!',
            text: 'Invalid Email and Password',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
      })
  };
  const handleValidate = (e) => {
    const user_captcha_value =e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
   <div className="bg-[#ecfdf5] min-h-screen">
    {/* <Helmet>
        <title>Bistro Boss | Login</title>
   </Helmet> */}
    <div className="max-w-7xl mx-auto pt-20">
      <div className=" border border-black px-10 w-[500px] mx-auto  rounded-lg">
       <form onSubmit={handleSubmit} className="card-body">
       <div>
                <h1 className=" text-4xl m5-8 mb-4 text-center font-bold">Please Login Now</h1>
              </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input
              type="text"
              name="captcha"
              onBlur={handleValidate}
              placeholder="type the captcha above "
              className="input input-bordered"
              
            />
            
          </div>
          <div className="form-control my-6">
            <input
              disabled={false}
              className="btn btn-outline border-0 border-[#ea580c] border-b-4 text-xl font-bold"
              type="submit"
              value="Login"
            />
          </div>
          <div>
            <p className="text-center text-gray-600 text-xl">
              Dont have an account? <Link
                to="/register"
                className="text-[#ea580c] font-bold text-2xl"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Login;
