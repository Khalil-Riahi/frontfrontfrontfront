"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Login() {
  const [responseStatus, setResponseStatus] = useState(null);
  const [error, setError] = useState(null);
  const [error1, setError1] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const numtable = searchParams.get("numtable");

  useEffect(() => {
    console.log("Extracted numtable:", numtable);
  }, [numtable]);

  const gett = async (formData) => {
    const obj = { email: formData.get("email"), password: formData.get("password") };

    try {
      const response = await fetch("http://localhost:8000/ELACO/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      return { status: response.status, data: await response.json() };
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      throw new Error("Login failed. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      setEmailError("");
      setPasswordError("");
      setError(null);

      const result = await gett(formData);
      setResponseStatus(result.status);

      if (result.status === 200) {
        // Extract user id from the login response and save it into localStorage
        const currentUserId = result.data.data.user._id;
        localStorage.setItem("userId", currentUserId);
        console.log("Saved userId:", currentUserId);

        toast.success("Login successful! Redirecting...", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setTimeout(() => {
          if (!numtable) {
            router.push("/homepage");
          } else {
            router.push(`/booking?numtable=${numtable}`);
          }
        }, 500);
      }
    } catch (error) {
      console.error(error);

      if (error.message.includes("Invalid email")) {
        setEmailError("Invalid email address.");
        toast.error("Invalid email address.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else if (error.message.includes("Invalid password")) {
        setPasswordError("Incorrect password.");
        toast.error("Incorrect password.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        setError("Login failed. Please try again.");
        toast.error("Login failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
        <div className="w-220 max-w-5xl bg-white shadow-lg rounded-xl flex overflow-hidden h-[450px]">
          {/* Left Side: Image & Text */}
          <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-teal-200 to-blue-600 p-8 text-white">
            <div className="flex flex-col justify-center items-center h-full">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Start Your <br /> Journey With Us.
              </h2>
              <img
                src="/people-working-drinking-coffee-coworking-area_82574-10622-removebg-preview.png"
                alt="Sign Up Illustration"
                className="w-80"
              />
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6 text-black">Login</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600 text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  className={`w-full border ${
                    emailError ? "border-red-500" : "border-gray-300"
                  } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                  required
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>

              <div>
                <label className="block text-gray-600 text-sm mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  className={`w-full border ${
                    passwordError ? "border-red-500" : "border-gray-300"
                  } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                  required
                />
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="w-160 bg-green-600 py-2 rounded-md text-white font-semibold hover:bg-green-700 transition"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link href="signup" className="text-blue-600 font-semibold">
                Sign Up
              </Link>
            </p>

            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
