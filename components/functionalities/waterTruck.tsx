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

interface WaterTruck {
  id: number;
  truckId: string;
  timeIn: Date;
  timeOut: Date;
  quantity: number;
}

const sampleTrucks: WaterTruck[] = [
  { id: 1, truckId: "WT001", timeIn: new Date("2024-08-29T08:00"), timeOut: new Date("2024-08-29T10:00"), quantity: 5000 },
  { id: 2, truckId: "WT002", timeIn: new Date("2024-08-29T11:00"), timeOut: new Date("2024-08-29T13:00"), quantity: 4500 },
  { id: 3, truckId: "WT003", timeIn: new Date("2024-08-29T09:30"), timeOut: new Date("2024-08-29T11:30"), quantity: 5200 },
  { id: 4, truckId: "WT004", timeIn: new Date("2024-08-29T12:00"), timeOut: new Date("2024-08-29T14:00"), quantity: 4800 },
  { id: 5, truckId: "WT005", timeIn: new Date("2024-08-29T14:30"), timeOut: new Date("2024-08-29T16:30"), quantity: 4700 },
  { id: 6, truckId: "WT006", timeIn: new Date("2024-08-29T10:00"), timeOut: new Date("2024-08-29T12:00"), quantity: 5100 },
  { id: 7, truckId: "WT007", timeIn: new Date("2024-08-29T13:00"), timeOut: new Date("2024-08-29T15:00"), quantity: 5300 },
  { id: 8, truckId: "WT008", timeIn: new Date("2024-08-29T07:30"), timeOut: new Date("2024-08-29T09:30"), quantity: 4900 },
  { id: 9, truckId: "WT009", timeIn: new Date("2024-08-29T15:00"), timeOut: new Date("2024-08-29T17:00"), quantity: 4600 },
  { id: 10, truckId: "WT010", timeIn: new Date("2024-08-29T08:30"), timeOut: new Date("2024-08-29T10:30"), quantity: 5200 },
  { id: 11, truckId: "WT011", timeIn: new Date("2024-08-29T11:30"), timeOut: new Date("2024-08-29T13:30"), quantity: 4400 },
  { id: 12, truckId: "WT012", timeIn: new Date("2024-08-29T09:00"), timeOut: new Date("2024-08-29T11:00"), quantity: 5000 },
  { id: 13, truckId: "WT013", timeIn: new Date("2024-08-29T12:30"), timeOut: new Date("2024-08-29T14:30"), quantity: 4700 },
  { id: 14, truckId: "WT014", timeIn: new Date("2024-08-29T10:30"), timeOut: new Date("2024-08-29T12:30"), quantity: 5300 },
  { id: 15, truckId: "WT015", timeIn: new Date("2024-08-29T13:30"), timeOut: new Date("2024-08-29T15:30"), quantity: 4900 },

];


export default function WaterTruck() {
  const [trucks, setTrucks] = useState<WaterTruck[]>(sampleTrucks);
  const [editingTruck, setEditingTruck] = useState<WaterTruck | null>(null);
  const [newTruck, setNewTruck] = useState<Omit<WaterTruck, "id">>({
    truckId: "",
    timeIn: new Date(),
    timeOut: new Date(),
    quantity: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (editingTruck) {
      setEditingTruck({
        ...editingTruck,
        [name]: name.includes("time") ? new Date(value) : name === "quantity" ? Number(value) : value,
      });
    } else {
      setNewTruck({
        ...newTruck,
        [name]: name.includes("time") ? new Date(value) : name === "quantity" ? Number(value) : value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTruck) {
      setTrucks(
        trucks.map((truck) => (truck.id === editingTruck.id ? editingTruck : truck))
      );
      setEditingTruck(null);
    } else {
      setTrucks([...trucks, { id: trucks.length + 1, ...newTruck }]);
      setNewTruck({
        truckId: "",
        timeIn: new Date(),
        timeOut: new Date(),
        quantity: 0,
      });
    }
  };

  const handleEdit = (truck: WaterTruck) => {
    setEditingTruck(truck);
  };

  const handleDelete = (id: number) => {
    setTrucks(trucks.filter((truck) => truck.id !== id));
  };

  const filteredTrucks = trucks.filter(
    (truck) =>
      truck.truckId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      truck.quantity.toString().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredTrucks.length / itemsPerPage);
  const paginatedTrucks = filteredTrucks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const TruckForm = ({
    truck,
    onSubmit,
    isEditing,
  }: {
    truck: WaterTruck | Omit<WaterTruck, "id">;
    onSubmit: (e: React.FormEvent) => void;
    isEditing: boolean;
  }) => (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        name="truckId"
        placeholder="Truck ID"
        value={truck.truckId}
        onChange={handleInputChange}
        required
      />
      <Input
        name="timeIn"
        type="datetime-local"
        value={format(truck.timeIn, "yyyy-MM-dd'T'HH:mm")}
        onChange={handleInputChange}
        required
      />
      <Input
        name="timeOut"
        type="datetime-local"
        value={format(truck.timeOut, "yyyy-MM-dd'T'HH:mm")}
        onChange={handleInputChange}
        required
      />
      <Input
        name="quantity"
        type="number"
        placeholder="Quantity (Liters)"
        value={truck.quantity}
        onChange={handleInputChange}
        required
      />
      <Button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white"
      >
        {isEditing ? "Update" : "Add"}
      </Button>
      {isEditing && (
        <Button
          type="button"
          onClick={() => setEditingTruck(null)}
          className="bg-red-500 hover:bg-red-600 text-white ml-2"
        >
          Cancel
        </Button>
      )}
    </form>
  );

  return (
    <div className="h-[90vh] bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <Card className="w-full mx-auto bg-white rounded-xl overflow-hidden">
        <CardHeader className="text-blue-700 p-2">
          <CardTitle className="text-lg font-bold">
            Water Truck Management
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Forms Column */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Add New Water Truck Entry
              </h2>
              <TruckForm
                truck={newTruck}
                onSubmit={handleSubmit}
                isEditing={false}
              />
            </div>
            {!editingTruck && (
              <div className="flex justify-center">
                <Image
                  src="/watertruck.png"
                  alt="Water Truck"
                  width={300}
                  height={200}
                />
              </div>
            )}
            {editingTruck && (
              <div className="mt-2">
                <h2 className="text-xl font-semibold mb-2 text-blue-700">Edit Water Truck Entry</h2>
                <TruckForm truck={editingTruck} onSubmit={handleSubmit} isEditing={true} />
              </div>
            )}
          </div>

          {/* Table Column */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="mb-2 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-blue-700">
                Water Truck Entries
              </h2>
              <Input
                type="text"
                placeholder="Search entries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-xs"
              />
            </div>
            <div className="flex-grow overflow-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="bg-blue-100">
                    <TableHead className="font-semibold">Truck ID</TableHead>
                    <TableHead className="font-semibold">Time In</TableHead>
                    <TableHead className="font-semibold">Time Out</TableHead>
                    <TableHead className="font-semibold">Quantity (L)</TableHead>
                    <TableHead className="font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedTrucks.map((truck) => (
                    <TableRow key={truck.id} className="h-8">
                      <TableCell className="py-1">{truck.truckId}</TableCell>
                      <TableCell className="py-1">
                        {format(truck.timeIn, "MM/dd/yyyy HH:mm")}
                      </TableCell>
                      <TableCell className="py-1">
                        {format(truck.timeOut, "MM/dd/yyyy HH:mm")}
                      </TableCell>
                      <TableCell className="py-1">{truck.quantity}</TableCell>
                      <TableCell className="py-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(truck)}
                        >
                          <Edit2 className="w-4 h-4 text-blue-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(truck.id)}
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