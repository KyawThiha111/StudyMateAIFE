import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useSignupMutation } from "@/api/auth.api";

interface SignUpType {
  name: string;
  studentid: string;
  email: string;
  password: string;
}

interface loginType{
  email:string,
  password:string
}

export const LoginSignUp = () => {
  const [willLogin, setWillLogin] = useState(true);
  const navigate = useNavigate();

  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const [signUp, { isLoading: signUpLoading }] = useSignupMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpType>();

  const handleLogin = async (data: loginType) => {
    try {
      console.log("Logging in with:", data);
      const res = await login(data).unwrap();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUp = async (data: SignUpType) => {
    try {
      console.log("Signing up with:", data);
      const res = await signUp(data).unwrap();
      console.log(res);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (data: SignUpType) => {
    if (willLogin) {
      handleLogin(data);
    } else {
      handleSignUp(data);
    }
    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="max-w-sm mx-auto p-6 border w-[50%] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {willLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {!willLogin && (
            <>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  {...register("name", { required: !willLogin })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">Name is required</p>
                )}
              </div>

              <div>
                <Label htmlFor="studentid">Student ID</Label>
                <Input
                  type="text"
                  id="studentid"
                  {...register("studentid", { required: !willLogin })}
                />
                {errors.studentid && (
                  <p className="text-red-500 text-sm">
                    Student ID is required
                  </p>
                )}
              </div>
            </>
          )}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>


          <Button
            type="submit"
            className="w-full"
            disabled={loginLoading || signUpLoading}
          >
            {willLogin
              ? loginLoading
                ? "Logging in..."
                : "Login"
              : signUpLoading
              ? "Signing up..."
              : "Sign Up"}
          </Button>
        </form>

        <p className="mt-4 text-sm text-center">
          {willLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="text-blue-500 underline"
            onClick={() => setWillLogin(!willLogin)}
          >
            {willLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};
