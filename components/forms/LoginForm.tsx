"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { CircularProgress } from "@mui/material";
import validator from "email-validator";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ILogin } from "./interfaces";

const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILogin>();

  const onSubmit = async (data: ILogin): Promise<void> => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));
  };
  const goToRegister = () => {
    router.push("?mode=register");
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-6">Welcome</h2>
      <div className="flex justify-center gap-4 mb-4">
        <button
          type="submit"
          className="flex items-center gap-1 shadow-button border text-center px-4 py-2 bg-white text-black font-medium rounded-lg"
        >
          <GoogleIcon />
          <span>Google</span>
        </button>
        <button
          type="submit"
          className="flex items-center gap-1 text-center px-4 py-2 bg-black text-white font-medium rounded-lg"
        >
          <GitHubIcon />
          <span>GitHub</span>
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label>
            Email:
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                validate: (value) =>
                  validator.validate(value) || "Invalid email address",
              })}
              className={`dark:placeholder:text-gray-600
 dark:bg-slate-300 border rounded px-4 py-2 mt-1 w-full outline-none ${
   errors.email ? "border-red-500" : "border-slate-400"
 }`}
            />
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {(errors.email as any).message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label>
            Password:
            <input
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              className={`dark:placeholder:text-gray-600
 dark:bg-slate-300 border rounded px-4 py-2 mt-1 w-full outline-none ${
   errors.password ? "border-red-500" : "border-slate-400"
 }`}
            />
          </label>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {(errors.password as any).message}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 disabled:cursor-not-allowed dark:bg-white dark:text-black dark:font-semibold bg-black text-white font-medium rounded-lg disabled:bg-gray-900"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex gap-2 items-center">
                <CircularProgress color="inherit" size={15} />
                Registering...
              </span>
            ) : (
              <span>Sign-Up</span>
            )}
          </button>
        </div>
      </form>

      <div className="flex justify-center">
        <button
          onClick={goToRegister}
          className="px-4 py-2 text-black dark:text-white"
        >
          Don`t have an account?{"  "}
          <span className="underline font-medium">Sign-Up</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
