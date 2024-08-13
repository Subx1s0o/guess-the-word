"use client";

import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { useModalStore } from "@/hooks/useModalStore";
import { ILogin } from "@/types/types";

import { CircularProgress } from "@mui/material";
import validator from "email-validator";
import { useForm } from "react-hook-form";
import AuthButtons from "../buttons/AuthButtons";

interface LoginFormProps {
  switchMode: () => void;
}

const LoginForm = ({ switchMode }: LoginFormProps) => {
  const { login } = useActions();
  const { isLoading } = useAuth();
  const { closeModal } = useModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const onSubmit = async (data: ILogin) => {
    await login(data);
    closeModal();
  };

  return (
    <div>
      <h2 className="text-2xl text-center font-semibold mb-6">Welcome</h2>
      <AuthButtons />

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
              className={`dark:placeholder:text-gray-600 dark:bg-slate-300 border rounded px-4 py-2 mt-1 w-full outline-none ${
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
              className={`dark:placeholder:text-gray-600 dark:bg-slate-300 border rounded px-4 py-2 mt-1 w-full outline-none ${
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
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex gap-2 items-center">
                <CircularProgress color="inherit" size={15} />
                Logging in...
              </span>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </div>
      </form>

      <div className="flex justify-center">
        <button
          onClick={switchMode}
          className="px-4 py-2 text-black dark:text-white"
        >
          Don’t have an account?{" "}
          <span className="underline font-medium">Sign Up</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
