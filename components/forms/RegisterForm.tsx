"use client";

import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.push("?mode=login");
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-6">
        Get Started Now
      </h2>
      <div className="flex justify-center gap-2 mb-4">
        <button
          type="submit"
          className=" shadow-button border text-center px-4 py-2 bg-white text-black font-medium rounded-lg "
        >
          Google
        </button>
        <button
          type="submit"
          className=" text-center px-4 py-2 bg-black text-white font-medium rounded-lg "
        >
          GitHub
        </button>
      </div>

      <form className="">
        <label className="block mb-4">
          Username:
          <input
            type="text"
            className="border rounded px-4 py-2 mt-1 w-full outline-none"
          />
        </label>
        <label className="block mb-4">
          Email:
          <input
            type="email"
            className="border rounded px-4 py-2 mt-1 w-full outline-none"
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            type="password"
            className="border rounded px-4 py-2 mt-1 w-full outline-none"
          />
        </label>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" px-4 py-2 bg-black text-white font-medium rounded-lg "
          >
            Register
          </button>
        </div>
      </form>
      <div className="flex justify-center">
        <button onClick={goToLogin} className=" px-4 py-2  text-black ">
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
