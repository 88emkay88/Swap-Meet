import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("https://swapmeet.atwebpages.com/api/login.php", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      login(data.user); // store in context
      if (data.user.role === "seller") {
        navigate("/seller-dashboard");
      } else if (data.user.role === "buyer") {
        navigate("/buyer-dashboard");
      } else if (data.user.role === "admin") {
        login(data.user);
        navigate("/admin");
      }
    } else {
      alert(data.message);
      navigate("/");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="relative bg-gray-200 p-8 md:p-10 space-y-4 rounded-4xl md:w-110 shadow-2xl">
        {/* Back Button  */}
        <Link className="absolute top-8" to="/">
          <IoArrowBack size={20} />
        </Link>

        {/* Logo */}
        <div className="flex justify-center cursor-default">
          <div className="flex items-center space-x-2">
            <ShoppingCart size={35} />
            <p className="text-2xl font-bold">
              Swap<span className="text-sky-400">Meet</span>
            </p>
          </div>
        </div>

        <h2 className="text-2xl cursor-default">Sign in to your account</h2>

        <form className="grid gap-3" method="POST" onSubmit={handleLogin}>
          <label className="font-bold">Email</label>
          <input
            name="email"
            type="email"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          <label className="font-bold">Password</label>
          <input
            name="password"
            type="password"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center cursor-default">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              remember me
            </div>

            <a href="#" className="underline">
              forgot password?
            </a>
          </div>

          <button className="bg-sky-800 text-sky-100 hover:bg-sky-400 transition duration-150 py-2 rounded-full mt-2">
            Login
          </button>
        </form>

        <p className="text-sm cursor-default">
          Don't have an account?
          <Link to="/register" className="font-semibold underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
