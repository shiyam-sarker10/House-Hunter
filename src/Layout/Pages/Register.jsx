import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedOption, setSelectedOption] = useState("");
  const homeNavigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const number = e.target.number.value
    const password = e.target.password.value 
    const role = selectedOption
    const info = {name,email,role,number,password}
    console.log(info)
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain 1 capital letter ");
      return;
    } else if (!specialChars.test(password)) {
      toast.error("Password must contain 1 spacial  character ");
      return;
    } else if (!number.startsWith("880")) {
      toast.error("Provide a Bangladeshi Number");
    } else if (!(number.length === 13)) {
      toast.error("Invalid Number");
    } else {
      axiosPublic
        .post("/register", info)
        .then(() =>{ 
          
          const CurrentInfo = JSON.stringify({ name, role, number, email });
          localStorage.setItem("Current User", CurrentInfo);
          toast.success("Successfully logged in")
          homeNavigate("/")
      })
        .catch(() =>
          toast.error("Email already in use. Please use a different one.")
        );

    }
    

  }
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
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
            <h2 className="text-4xl text-white/70 font-medium">Welcome</h2>
            <p className="text-white/60 text-sm">
              Please register with required data
            </p>
          </div>
        </div>
        {/* input side  */}
        <div className="w-full lg:w-[60%] bg-white py-10">
          <h2 className="text-3xl text-[#8EA7E9] font-bold text-center pb-8">
            Register
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full  flex flex-col justify-center items-center gap-4"
          >
            <input
              className="border border-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="text"
              placeholder="Full name"
              name="name"
              required
            />
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="border border-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded appearance-auto bg-white  focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              name="cars"
              id="cars"
              required
            >
              <option className="py-2 rounded text-gray-400" value="">
                Choose a role
              </option>
              <option className="py-2 rounded text-gray-400" value="House Owner">
                House Owner
              </option>
              <option className="py-2 rounded text-gray-400" value="House Renter">
                House Renter
              </option>
            </select>

            <input
              className="border border-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
              type="tel"
              placeholder="Phone number"
              name="number"
              required
            />
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
              Already have an account ?{" "}
              <Link to="/login" className="text-[#8EA7E9] ">
                login here
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

export default Register;
