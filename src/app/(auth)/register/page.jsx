"use client";

import React, { useState, use } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";


export default function Register() {
  const [error, setError] = useState("");
  const [googleError, setGoogleError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false); // local loading

  const { createUser, setUser, signInGoogleUser } = use(AuthContext);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setGoogleError("");
    
    try {
      const result = await signInGoogleUser();
      setUser(result.user);
      toast.success("Logged in successfully");
      router.push("/");
    } catch (err) {
      setGoogleError(err.message);
    } finally {
      
    }
  };

  const handlePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasMinLength = /^.{6,}$/;

    if (!hasUppercase.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!hasLowercase.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!hasMinLength.test(password)) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!terms) {
      setError("Please accept the Terms & Conditions");
      return;
    }

    setSubmitting(true); // only start loading after validations pass

    try {
      const result = await createUser(email, password);
      const user = result.user;

      await updateProfile(user, { displayName: name, photoURL });
      setUser(user);

      e.target.reset();
      toast.success("Registered successfully");
      router.push("/");
    } catch (err) {
      if (err.message.includes("auth/email-already-in-use")) {
        setError("This email is already registered"); // show error immediately
      } else {
        setError(err.message);
      }
    } finally {
      setSubmitting(false); // stop loading in all cases
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 py-6">
      <div className="w-11/12 max-w-md  bg-white shadow-md hover:shadow-xl border border-primary/20 rounded-xl p-6  animate-fade-in-center">
        <h2 className="text-center text-3xl font-bold mb-5 text-primary">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label font-semibold">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="input w-full outline-none border border-primary rounded-full "
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              placeholder="Enter your photo URL"
              className="input w-full outline-none border border-primary rounded-full"
              required
            />
          </div>

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

          <div className="relative">
            <label className="label font-semibold">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input w-full  outline-none border border-primary rounded-full "
              required
            />
            <span
              onClick={handlePasswordShow}
              className="absolute top-8.5 right-5 z-10 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <div className="flex items-center">
            <input type="checkbox" name="terms" className="checkbox  border border-primary rounded-full mr-2" />
            <span className="text-sm">
              I accept the{" "}
              <Link href="/terms" className="text-primary underline">
                Terms & Conditions
              </Link>
            </span>
          </div>

          {error && <p className="text-error text-sm">{error}</p>}

          <button
            type="submit"
            className="btn btn-primary rounded-full btn-outline w-full mt-2"
            disabled={submitting}
          >
            {submitting ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-primary rounded-full w-full flex items-center justify-center gap-2"
          disabled={submitting}
        >
          <FcGoogle size={24} /> Sign up with Google
        </button>

        {googleError && (
          <p className="text-error text-sm mt-2">{googleError}</p>
        )}

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold underline">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};


