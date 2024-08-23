"use client"

import React from "react";
import CommonPage from "@/components/common/commonView";
import { HiUsers } from "react-icons/hi2";
import UserDataList from "@/components/user/userDataList";
import { UserForm } from "@/components/user/userAddForm";

const UserPage = () => {
  return (
    <CommonPage 
      iconName="Users"
      iconComponent={HiUsers}
      formComponent={<UserForm />}
      cardContent={<UserDataList />}
    />
  );
};

export default UserPage;