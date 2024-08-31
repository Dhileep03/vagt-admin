"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  Search,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import Image from "next/image";

interface Pass {
  id: number;
  vehicleNo: string;
  issueDate: Date;
  expiryDate: Date;
  vehicleType: string;
}

const samplePasses: Pass[] = [
  {
    id: 1,
    vehicleNo: "ABC123",
    issueDate: new Date("2024-08-01"),
    expiryDate: new Date("2025-08-01"),
    vehicleType: "Car",
  },
  {
    id: 2,
    vehicleNo: "DEF456",
    issueDate: new Date("2024-08-15"),
    expiryDate: new Date("2025-08-15"),
    vehicleType: "Bike",
  },
  {
    id: 3,
    vehicleNo: "GHI789",
    issueDate: new Date("2024-09-01"),
    expiryDate: new Date("2025-09-01"),
    vehicleType: "Truck",
  },
  {
    id: 4,
    vehicleNo: "JKL012",
    issueDate: new Date("2024-09-15"),
    expiryDate: new Date("2025-09-15"),
    vehicleType: "Car",
  },
  {
    id: 5,
    vehicleNo: "MNO345",
    issueDate: new Date("2024-10-01"),
    expiryDate: new Date("2025-10-01"),
    vehicleType: "Bike",
  },
  {
    id: 6,
    vehicleNo: "PQR678",
    issueDate: new Date("2024-10-15"),
    expiryDate: new Date("2025-10-15"),
    vehicleType: "Truck",
  },
  {
    id: 7,
    vehicleNo: "STU901",
    issueDate: new Date("2024-11-01"),
    expiryDate: new Date("2025-11-01"),
    vehicleType: "Car",
  },
  {
    id: 8,
    vehicleNo: "VWX234",
    issueDate: new Date("2024-11-15"),
    expiryDate: new Date("2025-11-15"),
    vehicleType: "Bike",
  },
  {
    id: 9,
    vehicleNo: "YZA567",
    issueDate: new Date("2024-12-01"),
    expiryDate: new Date("2025-12-01"),
    vehicleType: "Truck",
  },
  {
    id: 10,
    vehicleNo: "BCD890",
    issueDate: new Date("2024-12-15"),
    expiryDate: new Date("2025-12-15"),
    vehicleType: "Car",
  },
  {
    id: 11,
    vehicleNo: "EFG123",
    issueDate: new Date("2025-01-01"),
    expiryDate: new Date("2026-01-01"),
    vehicleType: "Bike",
  },
  {
    id: 12,
    vehicleNo: "HIJ456",
    issueDate: new Date("2025-01-15"),
    expiryDate: new Date("2026-01-15"),
    vehicleType: "Truck",
  },
];

export default function VehiclePass() {
  const [passes, setPasses] = useState<Pass[]>(samplePasses);
  const [editingPass, setEditingPass] = useState<Pass | null>(null);
  const [newPass, setNewPass] = useState<Omit<Pass, "id">>({
    vehicleNo: "",
    issueDate: new Date(),
    expiryDate: new Date(),
    vehicleType: "Car",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (editingPass) {
      setEditingPass({
        ...editingPass,
        [name]: name.includes("Date") ? new Date(value) : value,
      });
    } else {
      setNewPass({
        ...newPass,
        [name]: name.includes("Date") ? new Date(value) : value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPass) {
      setPasses(
        passes.map((pass) => (pass.id === editingPass.id ? editingPass : pass))
      );
      setEditingPass(null);
    } else {
      setPasses([...passes, { id: passes.length + 1, ...newPass }]);
      setNewPass({
        vehicleNo: "",
        issueDate: new Date(),
        expiryDate: new Date(),
        vehicleType: "Car",
      });
    }
  };

  const handleEdit = (pass: Pass) => {
    setEditingPass(pass);
  };

  const handleDelete = (id: number) => {
    setPasses(passes.filter((pass) => pass.id !== id));
  };

  const filteredPasses = passes.filter(
    (pass) =>
      pass.vehicleNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pass.vehicleType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPasses.length / itemsPerPage);
  const paginatedPasses = filteredPasses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const PassForm = ({
    pass,
    onSubmit,
    isEditing,
  }: {
    pass: Pass | Omit<Pass, "id">;
    onSubmit: (e: React.FormEvent) => void;
    isEditing: boolean;
  }) => (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        name="vehicleNo"
        placeholder="Vehicle Number"
        value={pass.vehicleNo}
        onChange={handleInputChange}
        required
      />
      <Input
        name="issueDate"
        type="date"
        value={format(pass.issueDate, "yyyy-MM-dd")}
        onChange={handleInputChange}
        required
      />
      <Input
        name="expiryDate"
        type="date"
        value={format(pass.expiryDate, "yyyy-MM-dd")}
        onChange={handleInputChange}
        required
      />
      <select
        name="vehicleType"
        value={pass.vehicleType}
        onChange={handleInputChange}
        className="w-full border rounded-md p-2"
      >
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
        <option value="Truck">Truck</option>
      </select>
      <Button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white"
      >
        {isEditing ? "Update" : "Add"}
      </Button>
      {isEditing && (
        <Button
          type="button"
          onClick={() => setEditingPass(null)}
          className="bg-red-500 hover:bg-red-600 text-white ml-2"
        >
          Cancel
        </Button>
      )}
    </form>
  );

  return (
    <div className="h-[90vh] bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <Card className="w-full mx-auto  bg-white rounded-xl overflow-hidden">
        <CardHeader className=" text-blue-700 p-2">
          <CardTitle className="text-lg font-bold">
            Vehicle Pass Management
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Forms Column */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Add New Pass
              </h2>
              <PassForm
                pass={newPass}
                onSubmit={handleSubmit}
                isEditing={false}
              />
            </div>
            {!editingPass && (
              <div className="flex justify-center">
  <Image
    src="/vechilepass.png"
    alt="Vehicle Pass"
    width={300}
    height={200}
  />
</div>

            )}
            {editingPass && (
              <div className="mt-2">
                <h2 className="text-xl font-semibold mb-2 text-blue-700">Edit Pass</h2>
                <PassForm pass={editingPass} onSubmit={handleSubmit} isEditing={true} />
              </div>
            )}
      
          </div>

          {/* Table Column */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="mb-2 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-blue-700">
                Vehicle Passes
              </h2>
              <Input
                type="text"
                placeholder="Search passes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-xs"
              />
            </div>
            <div className="flex-grow overflow-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="bg-blue-100">
                    <TableHead className="font-semibold">Vehicle No.</TableHead>
                    <TableHead className="font-semibold">Issue Date</TableHead>
                    <TableHead className="font-semibold">Expiry Date</TableHead>
                    <TableHead className="font-semibold">Type</TableHead>
                    <TableHead className="font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedPasses.map((pass) => (
                    <TableRow key={pass.id} className="h-8">
                      <TableCell className="py-1">{pass.vehicleNo}</TableCell>
                      <TableCell className="py-1">
                        {format(pass.issueDate, "MM/dd/yyyy")}
                      </TableCell>
                      <TableCell className="py-1">
                        {format(pass.expiryDate, "MM/dd/yyyy")}
                      </TableCell>
                      <TableCell className="py-1">{pass.vehicleType}</TableCell>
                      <TableCell className="py-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(pass)}
                        >
                          <Edit2 className="w-4 h-4 text-blue-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(pass.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <div>
                <Button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="mr-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
