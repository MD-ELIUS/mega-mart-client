"use client";

import React, { useState, use } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const [googleError, setGoogleError] = useState("");
  const redirectPath = searchParams.get('redirect') || '/';

  const { signInUser, signInGoogleUser, setUser } = use(AuthContext);
  const router = useRouter();

  const handlePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    setSubmitting(true);

    try {
      const result = await signInUser(email, password);
      setUser(result.user);

      toast.success("Logged in successfully");

      setTimeout(() => {
        router.push(redirectPath);
      }, 800);
    } catch (err) {
      setError("Invalid email or password");
      console.log(err)
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleError("");
    setSubmitting(true);

    try {
      const result = await signInGoogleUser();
      setUser(result.user);
      toast.success("Logged in successfully");

      setTimeout(() => {
        router.push(redirectPath);
      }, 800);
    } catch (err) {
      setGoogleError("Google sign-in failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 py-6">
      <div className="w-11/12 max-w-md  bg-white shadow-md hover:shadow-xl border border-primary/20 rounded-xl p-6  animate-fade-in-center">
        <h2 className="text-center text-3xl font-bold mb-5 text-primary">
          Welcome Back
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label font-semibold">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input w-full outline-none border border-primary rounded-full"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="label font-semibold">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input w-full  outline-none border border-primary rounded-full"
              required
            />

            <span
              onClick={handlePasswordShow}
              className="absolute top-8.5 right-5 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          {/* Error */}
          {error && <p className="text-error text-sm">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary rounded-full btn-outline w-full mt-2"
            disabled={submitting}
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Google Sign-in */}
        <button
          onClick={handleGoogleSignIn}
          disabled={submitting}
          className="btn btn-outline btn-primary rounded-full w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={24} /> Login with Google
        </button>

        {/* Google error */}
        {googleError && (
          <p className="text-error text-sm mt-2">{googleError}</p>
        )}

        {/* Register Link */}
        <p className="text-center mt-4 text-sm">
          Do not have an account?{" "}
          <Link href="/register" className="text-primary font-semibold underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
