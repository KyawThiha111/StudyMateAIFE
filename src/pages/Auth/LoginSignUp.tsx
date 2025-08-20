import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { login } from "@/redux/auth.slice"
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
interface SignUpType {
  name?: string;
  password: string;
  studentid?: string;
  email: string;
  confirmPassword?: string;
}

export const LoginSignUp = () => {
  const [willLogin, setWillLogin] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignUpType>();

  const onSubmit = (data: SignUpType) => {
    if (!willLogin && data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (willLogin) {
      console.log("Logging in with:", data);
       const fakeToken = `fake-token-${Date.now()}`;
       dispatch(login({user:{name:data.email,email:data.email},token:fakeToken}))
      navigate("/")
       // dispatch login API here
    } else {
      console.log("Signing up with:", data);
      navigate("/")
      // dispatch signup API here
    }

    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="max-w-sm mx-auto p-6 border w-[50%]  rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {willLogin ? "Login" : "Sign Up"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Only show Name & Student ID for Sign Up */}
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
                <p className="text-red-500 text-sm">Student ID is required</p>
              )}
            </div>
          </>
        )}

        {/* Email */}
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

        {/* Password */}
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

        {/* Confirm Password for Sign Up */}
        {!willLogin && (
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", { required: !willLogin })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                Confirm Password is required
              </p>
            )}
          </div>
        )}

        {/* Submit */}
        <Button type="submit" className="w-full">
          {willLogin ? "Login" : "Sign Up"}
        </Button>
      </form>

      {/* Toggle form type */}
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
