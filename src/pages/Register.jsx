import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Register = () => {
  return (
    <div className="w-screen  flex flex-col items-center justify-center p-20">
      <div className="relative flex-grow flex-cols p-10 w-90 md:w-150 bg-gray-200 rounded-4xl shadow-2xl">
        {/* Back Button  */}
        <Link className="absolute md:top-8" to="/sign-up">
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

        <h2 className="text-2xl cursor-default my-5">Create your account</h2>

        <form method="POST" className="grid space-y-2 mt-4">
          {/* Name */}
          <label>Name</label>
          <input
            type="text"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* Surname */}
          <label>Surname</label>
          <input
            type="text"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* Username */}
          <label>Username</label>
          <input
            type="text"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* email field */}
          <label>Email</label>
          <input
            type="email"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* Telephone number */}
          <label>Phone Number</label>
          <input
            type="tel"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* Password */}
          <label>Password</label>
          <input
            type="password"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* Password Confirmation */}
          <label>Confirm Password</label>
          <input
            type="password"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          <div className="grid mt-3 space-y-2">
            <label>Select your user role</label>
            <select required className="bg-gray-100 p-2 rounded-xl">
              <option>Buyer</option>
              <option>Seller</option>
            </select>
          </div>

          <input
            type="submit"
            value="Create Account"
            className="mt-4 bg-sky-800 text-sky-100 hover:bg-sky-400 transition duration-150 py-2 rounded-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
