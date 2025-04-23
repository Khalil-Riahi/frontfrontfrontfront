"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const router = useRouter();

  // Error states
  const [generalError, setGeneralError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  async function signUpFun(formData) {
    // Reset errors at start
    setGeneralError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    try {
      const user = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
        passwordConfirm: formData.get("passwordConfirm"),
        phone: formData.get("phone"),
      };

      console.log("Sending signup request:", user);

      const response = await fetch("http://localhost:8000/ELACO/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      // 1) Check if response is JSON or not
      let resData;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        // Attempt to parse JSON
        resData = await response.json();
      } else {
        // Fallback if server returned HTML or something else
        resData = {
          message: "An unexpected error occurred. Please try again later.",
        };
      }

      // 2) If the response is not OK, throw an error with the message
      if (!response.ok) {
        throw new Error(resData.message || "Signup failed! Please check your details.");
      }

      const currentUserId = resData.data.user._id;
      console.log(resData.data.user._id)
      localStorage.setItem("userId", currentUserId);
      console.log("Saved userId:", currentUserId);

      // 3) If successful
      toast.success("Signup successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        router.push("/homepage");
      }, 2000);
      
    } catch (err) {
      console.error("Error:", err);

      // Generic fallback
      const errorMsg = err.message || "Signup failed. Please try again.";

      // 4) Distribute errors based on message content (optional)
      if (errorMsg.toLowerCase().includes("email")) {
        setEmailError(errorMsg);
        toast.error(errorMsg);
      } else if (
        errorMsg.toLowerCase().includes("password") &&
        errorMsg.toLowerCase().includes("confirm")
      ) {
        setConfirmPasswordError(errorMsg);
        toast.error(errorMsg);
      } else if (errorMsg.toLowerCase().includes("password")) {
        setPasswordError(errorMsg);
        toast.error(errorMsg);
      } else {
        setGeneralError(errorMsg);
        toast.error(errorMsg);
      }
    }
  }

  const handleGoogleAuth = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
        <div className="w-11/12 max-w-5xl bg-white shadow-lg rounded-xl flex overflow-hidden">
          {/* Left Side: Image & Text */}
          <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-teal-200 to-blue-600 p-8 text-white" >
            <div className="flex flex-col justify-center items-center gap-28">
              <div className="flex flex-row justify-start w-full">
                <h2 className="text-4xl font-bold mb-4 text-white text-border-white  text-left"   >
                  Start Your <br /> Journey With Us.
                </h2>
              </div>
              <img src="/people-working-drinking-coffee-coworking-area_82574-10622-removebg-preview.png" alt="Sign Up Illustration" className="w-10/8" />
            </div>
          </div>

          {/* Right Side: Sign Up Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6  text-yellow-300">Sign Up</h2>

            {generalError && <p className="text-red-500 mb-4">{generalError}</p>}

            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                await signUpFun(formData);
              }}
            >
              {/* First & Last Name */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-600 text-sm mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-600 text-sm mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-600 text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`w-full border ${
                    emailError ? "border-red-500" : "border-gray-300"
                  } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-600 text-sm mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-600 text-sm mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className={`w-full border ${
                    passwordError ? "border-red-500" : "border-gray-300"
                  } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-gray-600 text-sm mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="passwordConfirm"
                  required
                  className={`w-full border ${
                    confirmPasswordError ? "border-red-500" : "border-gray-300"
                  } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
                {confirmPasswordError && (
                  <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="w-1/2 h-13 bg-green-600  rounded-md text-white font-semibold hover:bg-green-700 transition"
                >
                  Create account
                </button>

                {/* Google Authentication Button */}
                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  className="flex items-center justify-center border border-gray-300 py-2 px-4  h-13 rounded-md font-semibold hover:bg-gray-100 transition"
                >
                  <img src="/google.jpeg" className="w-6 h-6" alt="Google" />
                  <p className="ml-2">Sign up with Google</p>
                </button>
              </div>
            </form>

            {/* Login Link */}
            <p className="text-center text-gray-600 mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
