"use client";

import { UserData } from "../../types/index";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { UserForm } from "./userAddForm";
import DeleteConfirmationDialog from "@/components/common/deleteConfirmation";
import { deleteUser } from "../../uiconnector/userAction";
import { toast } from "sonner";
import { useTransition } from "react";
import { MdDelete } from "react-icons/md";
import CopyableText from "../common/copyableText";



export const CellFunction = ({ row }: any) => {
  const [isPending, startTransition] = useTransition();
  const queryClient = useQueryClient();

  const user = row.original;
  const deleteItem = useMutation({
    mutationFn: async (value: UserData) => {
      const deleteCode: any = await deleteUser(value.id);
      return deleteCode;
    },
    onSuccess: (value) => {
      if (value?.success) {
        toast.success(`${value.message}`, {
          position: "top-right",
          dismissible: true,
        });
      } else {
        toast.error(`${value.message}`, {
          position: "top-right",
          dismissible: true,
        });
      }
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (value) => {
      toast.error(`${value.message}`, {
        position: "top-right",
        dismissible: true,
      });
    },
  });

  return (
    <main className="w-auto flex justify-start items-center gap-2">
      <UserForm data={user} lable={false} type="Update" />
      <DeleteConfirmationDialog
        onClick={() => {
          startTransition(() => {
            deleteItem.mutate(user);
          });
        }}
        description={user.name}
      />
    </main>
  );
};

export const userColumn: ColumnDef<UserData>[] = [
  {
    accessorKey: "username",
    header:"User Name",
  },
  {
    accessorKey: "email",
    header:"Email",
    cell: ({ row }) => {
      return <div>{row.original.email}</div>;
    },
  },
  {
    accessorKey: "phonenumber",
    header:"Phone Number",
    cell: ({ row }) => {
      return <CopyableText text={row.original.phonenumber} />;
    },
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      return <CellFunction row={row} />;
    },
  },
];


