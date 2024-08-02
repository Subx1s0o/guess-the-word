/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const goToRegister = () => {
    router.push("?mode=register");
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">Login</h1>
      <form>
        <label className="block mt-4">
          Email:
          <input type="email" className="border rounded p-2 mt-1 w-full" />
        </label>
        <label className="block mt-4">
          Password:
          <input type="password" className="border rounded p-2 mt-1 w-full" />
        </label>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <button
        onClick={goToRegister}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
      >
        Don't have an account? Register
      </button>
    </div>
  );
};

export default LoginForm;
