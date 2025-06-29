import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Register = () => {
  const [role, setRole] = useState("buyer");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();
  var [passwordMatch, setPasswordMatch] = useState(true);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    const formData = new FormData(e.target);
    formData.append("role", role);

    try {
      const res = await fetch(
        "https://swapmeet-backend.byethost12.com/api/register.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Registered successfull!");
        navigate("/sign-up");
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (err) {
      console.log("Error: ", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-screen  flex flex-col items-center justify-center p-20">
      <div className="relative flex-grow flex-cols p-10 w-90 md:w-150 bg-gray-200 rounded-4xl shadow-2xl">
        {/* Back Button  */}
        <Link className="absolute md:top-8" to="/">
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

        <form
          method="POST"
          className="grid space-y-2 mt-4"
          onSubmit={handleRegister}
        >
          {/* Name */}
          <label>Name</label>
          <input
            name="name"
            type="text"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* Surname */}
          <label>Surname</label>
          <input
            name="surname"
            type="text"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* Username */}
          <label>Username</label>
          <input
            name="username"
            type="text"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* email field */}
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* Telephone number */}
          <label>Phone Number</label>
          <input
            name="number"
            type="tel"
            className="border-1 rounded-full h-8 p-3"
            required
          />

          {/* Password */}
          <label>Password</label>
          <input
            value={password}
            name="password"
            type="password"
            className={`border-1 rounded-full h-8 p-3 ${
              !passwordMatch ? "border-red-500" : ""
            }
              `}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Password Confirmation */}
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            className={`border-1 rounded-full h-8 p-3 ${
              !passwordMatch ? "border-red-500" : ""
            }
              `}
            onChange={(e) => {
              const value = e.target.value;
              setconfirmPassword(value);
              setPasswordMatch(password === value);
            }}
            required
          />

          <div className="grid mt-3 space-y-2">
            <label>Select your user role</label>
            <select
              required
              className="bg-gray-100 p-2 rounded-xl"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
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
