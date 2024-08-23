"use client";
import * as z from "zod";
import { FaUser, FaLock, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { credentialLoginSchema,phoneLoginSchema } from "../../schemas/intex";
import Link from "next/link";
import { Axios } from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Login } from "../../uiconnector/loginAction";

const LoginPage = () => {
  const router = useRouter();
  const [loginWithPhone, setLoginWithPhone] = useState(false);
  const credentialLoginform: any = useForm<
    z.infer<typeof credentialLoginSchema>
  >({
    resolver: zodResolver(credentialLoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const phoneLoginform = useForm<z.infer<typeof phoneLoginSchema>>({
    resolver: zodResolver(phoneLoginSchema),
    defaultValues: {
      phonenumber: "",
    },
  });

  const onCredentialFormSubmit = async (
    values: z.infer<typeof credentialLoginSchema>
  ) => {
    try {
      const user = await Axios.post("/auth/login", values);
      await Login(values).then((callback: any) => {
        if (callback?.error == undefined) {
          toast.success(`Login successful`, {
            position: "top-right",
            dismissible: true,
          });
        } else {
          toast.error(`${callback?.error}`, {
            description:
              "Oops! It seems like the credentials you entered are incorrect. Please double-check your username and password and try again",
            position: "top-right",
            dismissible: true,
          });
        }
      });
      return;
    } catch (error: any) {
      toast.error(`${error.response.data.message}`, {
        position: "top-right",
        dismissible: true,
      });
      return;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <img
          src="/path/to/your/image.jpg"
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Form Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white py-8 px-4 md:px-10" style={{ flex: "0 0 30%" }}>
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-black text-gray-900 font-montserrat-regular">
            Log in
          </h1>
          <p className="text-gray-600">
            Welcome back! Please login to your account.
          </p>
        </div>

        <div className="mt-8 space-y-6 w-full max-w-sm md:max-w-lg">
        <div className="flex items-center space-x-2">
            <input
              id="loginWithPhone"
              type="checkbox"
              checked={loginWithPhone}
              onChange={() => setLoginWithPhone(!loginWithPhone)}
              className="h-4 w-4 text-theme focus:ring-red-400 border-gray-300 rounded"
            />
            <label
              htmlFor="loginWithPhone"
              className="text-sm font-medium text-gray-700"
            >
              Login with phone number
            </label>
          </div>

          {!loginWithPhone ? (
          <Form {...credentialLoginform}>
            <form
              onSubmit={credentialLoginform.handleSubmit(
                onCredentialFormSubmit
              )}
              className="space-y-4"
            >
              <div className="relative">
                <FormField
                  control={credentialLoginform.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="p-4 w-full h-12 rounded-lg pl-12 text-lg focus:outline-none border border-gray-200 font-light"
                          placeholder="Username"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FaUser className="absolute top-3 left-4 text-gray-400" />
              </div>

              <div className="relative">
                <FormField
                  control={credentialLoginform.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="p-4 w-full h-12 rounded-lg pl-12 text-lg focus:outline-none border border-gray-200 font-light"
                          placeholder="Password"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FaLock className="absolute top-3 left-4 text-gray-400" />
              </div>

              <button
                type="submit"
                className="focus:outline-none bg-black focus:bg-theme focus:ring w-full h-12 text-white rounded-lg text-lg transition-all duration-200"
              >
                Log in
              </button>
            </form>
          </Form>
          ):(
            <Form {...phoneLoginform}>
            <form
              onSubmit={phoneLoginform.handleSubmit(() => { })}
              className="space-y-4"
            >
              <div className="relative">
                <FormField
                  control={phoneLoginform.control}
                  name="phonenumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="p-4 w-full h-12 rounded-lg pl-12 text-lg focus:outline-none border border-gray-200 font-light"
                          placeholder="Phone Number"
                          type="tel"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FaPhone className="absolute top-3 left-4 text-gray-400" />
              </div>

              <button
                type="submit"
                className="focus:outline-none bg-black hover:bg-gray-900 focus:bg-theme focus:ring focus:ring-red-200 w-full h-12 text-white rounded-lg text-lg transition-all duration-200"
              >
                Log in with Phone
              </button>
            </form>
          </Form>
          )}

          <div className="flex justify-between w-full">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-theme hover:underline"
            >
              Forgot password?
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium text-theme hover:underline"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
