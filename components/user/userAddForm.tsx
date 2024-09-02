/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import {
  MdOutlineKey,
  MdAttachEmail,
  MdDriveFileRenameOutline,
} from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomInputField from "../common/customInputField";
import { UserSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
  FormLabel,
} from "../ui/form";
import { toast } from "sonner";
import { useEffect, useRef, useState, useTransition } from "react";
import { ClockLoader } from "react-spinners";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserData } from "@/types";
import { FaEdit, FaEye, FaPlus } from "react-icons/fa";
import { createUser, updateUser } from "../../action-data/userAction";
import { useSession } from "next-auth/react";

interface UserFormProps {
  type?: string;
  data?: UserData | null;
  lable?: boolean;
}

export function UserForm({
  type = "Add",
  data = null,
  lable = false,
}: UserFormProps) {
  const queryClient = useQueryClient();
  const session = useSession();
  const [messManage_id, setMessManage_id] = useState<string | undefined>();
  const userFormRef = useRef<HTMLButtonElement>(null);
  const [isPending, startTransition] = useTransition();
  const userForm = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phonenumber: "",
    },
  });

  const userDataAction = useMutation({
    mutationFn: async (value: any) => {
      const user =
        type === "Add"
          ? await createUser(value)
          : await updateUser(data?.id!, value);
      return user;
    },
    onSuccess: (value) => {
      if (value.success) {
        toast.success(`${value.message}`, {
          position: "top-right",
          dismissible: true,
        });
        queryClient.invalidateQueries({ queryKey: ["user"] });
        userForm.reset();
        if (userFormRef.current) {
          userFormRef.current.click();
        }
      } else {
        console.log(value);
        toast.error(`${value.message}`, {
          position: "top-right",
          dismissible: true,
        });
      }
    },
    onError: (value) => {
      console.log(value);
      toast.error(`${value.message}`, {
        position: "top-right",
        dismissible: true,
      });
    },
  });

  const handleCancel = () => {
    userForm.reset();
    userForm.clearErrors();
  };

  const userFormSubmit = (values: z.infer<typeof UserSchema>) => {
    if (type !== "Add") {
      delete values.password;
    }
    startTransition(() => {
      userDataAction.mutate(values);
    });
  };

  useEffect(() => {
    if (data) {
      userForm.setValue("username", data.username);
      userForm.setValue("email", data.email);
      userForm.setValue("phonenumber", data.phonenumber);
      userForm.setValue("password",data.password);
    }
  }, [data]);

  return (
    <Dialog>
      <DialogTrigger ref={userFormRef} asChild>
        <Button
          className={`p-1 px-3 ${type === "Add" ? "bg-white text-theme" : ""}`}
          variant={"ghost"}
          onClick={() => {
            type === "Add" && userForm.reset();
          }}
        >
          {type === "Add" && (
            <>
              Add User <FaPlus className="ml-2" />
            </>
          )}
          {type === "Update" && (
            <FaEdit size={14} className="text-black-600 hover:text-blue-600" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader className="border-b-[1px] pb-4">
          <DialogTitle className="flex ">
            {type} User <FaUser className="ml-2" />
          </DialogTitle>
        </DialogHeader>
        <Form {...userForm}>
          <form
            onSubmit={userForm.handleSubmit(userFormSubmit)}
            className="p-2 rounded-xl  bg-gray-50"
          >
            <div className="w-full grid grid-col-1 md:grid-cols-2 gap-4">
              <FormField
                control={userForm.control}
                disabled={isPending}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <CustomInputField
                        placeholder={"Enter UserName"}
                        field={field}
                        className="rounded-[2px] "
                        icon={<FaUser className="h-5 w-5 text-gray-400" />}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={userForm.control}
                disabled={isPending}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <CustomInputField
                        placeholder={"Phone Number"}
                        field={field}
                        className="rounded-[2px] "
                        icon={<FaPhoneAlt className="h-5 w-5 text-gray-400" />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={userForm.control}
                disabled={isPending}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <CustomInputField
                        placeholder={"Email Id"}
                        field={field}
                        className="rounded-[2px]"
                        icon={
                          <MdAttachEmail className="h-5 w-5 text-gray-400" />
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!data && (
                <FormField
                  control={userForm.control}
                  disabled={isPending}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <CustomInputField
                          placeholder={"Password"}
                          field={field}
                          className="rounded-[2px]"
                          icon={
                            <MdOutlineKey className="h-5 w-5 text-gray-400" />
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </div>
            {/* {type !== "View" && ( */}
            <div className="w-full flex p-2 justify-end gap-3 border-t-[1px] pt-5 mt-5">
              <Button
                type="submit"
                className=" bg-black text-white hover:text-white hover:bg-gray-700"
                variant={"default"}
              >
                {isPending ? (
                  <ClockLoader color={"#ffffff"} size={20} />
                ) : type === "Add" ? (
                  "Add User"
                ) : (
                  "Update User"
                )}
              </Button>
              <Button
                className="bg-red-500 text-white rounded-lg  hover:bg-red-600 hover:text-white transition-colors duration-200"
                key="close"
                onClick={handleCancel}
              >
                Clear
              </Button>
            </div>
            {/* )} */}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
