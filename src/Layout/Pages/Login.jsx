
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { setLocalStorageChange } = useAuth();
  const homeNavigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  // submit function 
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axiosPublic
      .get(`/registeredUsers?email=${email}&password=${password}`)

      .then((result) => {
        if (result.data.email === email) {

          const { name, email, role, number } = result.data;

          const CurrentInfo = JSON.stringify({ name, role, number, email });

          localStorage.setItem("Current User", CurrentInfo);
          toast.success("Successfully logged in");
          homeNavigate("/dashboard");
          setLocalStorageChange((prevState) => !prevState);

        } else if (result.data.error) {

          toast.error("Invalid Email");

        } else {
          toast.error("Invalid Email or  Password");
        }
      })
      .catch(() => {
        toast.error("Invalid Password");
      });
  };
  return (
    <div className="bg-[#ECF2F9] h-screen flex justify-center items-center p-6 md:p-0">
      <div className="flex h-full md:h-[90%] lg:h-[80%] w-full md:w-[80%] lg:w-[60%] rounded-xl overflow-hidden shadow-md">
        {/* register design side  */}
        <div className="md:w-[60%] lg:w-[40%] h-full bg-[#8EA7E9] relative md:flex justify-center items-center hidden">
          <div className="w-16 h-16 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full  absolute left-[20%] -top-2"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full  absolute left-[20%] bottom-[18%]"></div>
          <div className="w-14 h-14 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full transition-all absolute -right-7 top-[50%] -translate-y-1/2"></div>
          <div className="w-24 h-24 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full  absolute left-[50%] -translate-x-1/2 top-[22%]"></div>
          <div className="text-center space-y-2">
            <h2 className="text-3xl text-white/70 font-medium">Welcome Back</h2>
            <p className="text-white/60 text-sm">
              Please Enter You Information
            </p>
          </div>
        </div>
        {/* input side  */}
        <div className="w-full lg:w-[60%] bg-white py-10 flex flex-col justify-center">
          <h2 className="text-3xl text-[#8EA7E9] font-bold text-center pb-8">
            Login Here
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full  flex flex-col justify-center items-center gap-4"
          >
            <input
              className="border border-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="border border-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="password"
              placeholder="Password"
              name="password"
            />
            <p className="text-[14px] text-gray-400">
              Do not have an account ?{" "}
              <Link to="/register" className="text-[#8EA7E9] ">
                Create one
              </Link>
            </p>
            <input
              className="bg-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg text-white font-medium"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
