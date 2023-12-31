import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successful!");
        reset();
        navigate(from,{replace:true}); 
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed.");
      });

    // console.log(data);
  };


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center mt-20">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email is required.</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={`w-full px-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
              {...register("password", { required: true })}
            />
            <button
              type="button"
              onClick={handlePasswordVisibility}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
            >
              <FaEye
                className={`w-5 h-5 text-gray-500 ${
                  showPassword ? "text-blue-500" : ""
                }`}
              />
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">Password is required.</p>
            )}
          </div>
          <input
            type="submit"
            value="Login"
            className="w-full my-btn"
          />
        </form>
        <div className="text-center mt-4">
          <Link
            to="/registration"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Dont have an account? Register here.
          </Link>
        </div>
      <SocialLogin />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
