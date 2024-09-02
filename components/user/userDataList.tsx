

"use client";
import { useEffect, useMemo, useState } from "react";
import { DataTable } from "../common/commonDataTable";
import { userColumn } from "./column";
import { UserData } from "@/types";
import {
    getAllUser
} from "@/action-data/userAction";
import { useQuery } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";
import { useSession } from "next-auth/react";

const UserDataList = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const data = await getAllUser();
      return data.data as UserData[];
    },
    staleTime: 1,
  });
  console.log("userdata",users)


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <ScaleLoader color="red" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-red-500">
        Error loading users
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4">
      <DataTable
        searchName="phonenumber"
        data={users || []}
        columns={userColumn}
      />
    </div>
  );
};

export default UserDataList;

