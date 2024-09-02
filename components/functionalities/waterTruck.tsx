// "use client";
// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   PlusCircle,
//   Search,
//   Edit2,
//   Trash2,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { format, parseISO } from "date-fns";
// import Image from "next/image";
// import { toast } from "sonner";
// import {
//   getAllWatertanker,
//   createWatertanker,
//   updateWatertanker,
//   deleteWatertanker
// } from "@/action-data/watertankerAction";

// interface WaterTruck {
//   id?: string;
//   timeIn: string;
//   timeOut: string;
//   quantity: number;
// }

// export default function WaterTruck() {
//   const [trucks, setTrucks] = useState<WaterTruck[]>([]);
//   const [editingTruck, setEditingTruck] = useState<WaterTruck | null>(null);
//   const [newTruck, setNewTruck] = useState<WaterTruck>({
//     timeIn: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
//     timeOut: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
//     quantity: 0,
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     fetchTrucks();
//   }, []);

//   const fetchTrucks = async () => {
//     try {
//       const response = await getAllWatertanker();
//       if (response.error) {
//         throw new Error(response.error);
//       }
//       setTrucks(response);
//     } catch (error) {
//       console.error('Error fetching water trucks:', error);
//       toast.error('Failed to load water trucks');
//     }
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { name, value } = e.target;
//     if (editingTruck) {
//       setEditingTruck({
//         ...editingTruck,
//         [name]: name === "quantity" ? Number(value) : value,
//       });
//     } else {
//       setNewTruck({
//         ...newTruck,
//         [name]: name === "quantity" ? Number(value) : value,
//       });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const truckData = editingTruck || newTruck;
//       const formattedTruck = {
//         ...truckData,
//         timeIn: new Date(truckData.timeIn).toISOString(),
//         timeOut: new Date(truckData.timeOut).toISOString(),
//       };

//       if (editingTruck && editingTruck.id) {
//         const response = await updateWatertanker(editingTruck.id, formattedTruck);
//         if (response.error) {
//           throw new Error(response.error);
//         }
//         toast.success('Water truck updated successfully');
//         setEditingTruck(null);
//       } else {
//         const response = await createWatertanker(formattedTruck);
//         if (response.error) {
//           throw new Error(response.error);
//         }
//         toast.success('Water truck added successfully');
//         setNewTruck({
//           timeIn: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
//           timeOut: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
//           quantity: 0,
//         });
//       }
//       fetchTrucks();
//     } catch (error) {
//       console.error('Error submitting water truck:', error);
//       toast.error('Failed to save water truck');
//     }
//   };

//   const handleEdit = (truck: WaterTruck) => {
//     setEditingTruck({
//       ...truck,
//       timeIn: format(parseISO(truck.timeIn), "yyyy-MM-dd'T'HH:mm"),
//       timeOut: format(parseISO(truck.timeOut), "yyyy-MM-dd'T'HH:mm"),
//     });
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       const response = await deleteWatertanker(id);
//       if (response.error) {
//         throw new Error(response.error);
//       }
//       toast.success('Water truck deleted successfully');
//       fetchTrucks();
//     } catch (error) {
//       console.error('Error deleting water truck:', error);
//       toast.error('Failed to delete water truck');
//     }
//   };

//   const filteredTrucks = trucks.filter(
//     (truck) =>
//       truck.id?.toString().includes(searchTerm) ||
//       truck.quantity.toString().includes(searchTerm) ||
//       format(parseISO(truck.timeIn), "yyyy-MM-dd").includes(searchTerm) ||
//       format(parseISO(truck.timeOut), "yyyy-MM-dd").includes(searchTerm)
//   );

//   const totalPages = Math.ceil(filteredTrucks.length / itemsPerPage);
//   const paginatedTrucks = filteredTrucks.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm]);

//   const TruckForm = ({
//     truck,
//     onSubmit,
//     isEditing,
//   }: {
//     truck: WaterTruck;
//     onSubmit: (e: React.FormEvent) => void;
//     isEditing: boolean;
//   }) => (
//     <form onSubmit={onSubmit} className="space-y-4">
//       <Table>
//         <TableBody>
//           <TableRow>
//             <TableCell>Time In</TableCell>
//             <TableCell>
//               <Input
//                 name="timeIn"
//                 type="datetime-local"
//                 value={truck.timeIn}
//                 onChange={handleInputChange}
//                 required
//               />
//             </TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>Time Out</TableCell>
//             <TableCell>
//               <Input
//                 name="timeOut"
//                 type="datetime-local"
//                 value={truck.timeOut}
//                 onChange={handleInputChange}
//                 required
//               />
//             </TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell>Quantity (Liters)</TableCell>
//             <TableCell>
//               <Input
//                 name="quantity"
//                 type="number"
//                 value={truck.quantity}
//                 onChange={handleInputChange}
//                 required
//               />
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//       <div className="flex justify-end space-x-2">
//         <Button
//           type="submit"
//           className="bg-green-500 hover:bg-green-600 text-white"
//         >
//           {isEditing ? "Update" : "Add"}
//         </Button>
//         {isEditing && (
//           <Button
//             type="button"
//             onClick={() => setEditingTruck(null)}
//             className="bg-red-500 hover:bg-red-600 text-white"
//           >
//             Cancel
//           </Button>
//         )}
//       </div>
//     </form>
//   );

//   return (
//     <div className="h-[90vh] bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
//       <Card className="w-full mx-auto bg-white rounded-xl overflow-hidden">
//         <CardHeader className="text-blue-700 p-2">
//           <CardTitle className="text-lg font-bold">
//             Water Truck Management
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-5 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
//           {/* Forms Column */}
//           <div className="w-full lg:w-1/3 flex flex-col">
//             <div className="mb-4">
//               <h2 className="text-xl font-semibold mb-2 text-blue-700">
//                 {editingTruck ? "Edit Water Truck Entry" : "Add New Water Truck Entry"}
//               </h2>
//               <TruckForm
//                 truck={editingTruck || newTruck}
//                 onSubmit={handleSubmit}
//                 isEditing={!!editingTruck}
//               />
//             </div>
//             {!editingTruck && (
//               <div className="flex justify-center">
//                 <Image
//                   src="/watertruck.png"
//                   alt="Water Truck"
//                   width={300}
//                   height={200}
//                 />
//               </div>
//             )}
//           </div>

//           {/* Table Column */}
//           <div className="w-full lg:w-2/3 flex flex-col">
//             <div className="mb-2 flex justify-between items-center">
//               <h2 className="text-xl font-semibold text-blue-700">
//                 Water Truck Entries
//               </h2>
//               <Input
//                 type="text"
//                 placeholder="Search entries..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="max-w-xs"
//               />
//             </div>
//             <div className="flex-grow overflow-auto">
//               <Table className="w-full">
//                 <TableHeader>
//                   <TableRow className="bg-blue-100">
//                     <TableHead className="font-semibold">Date In</TableHead>
//                     <TableHead className="font-semibold">Time In</TableHead>
//                     <TableHead className="font-semibold">Date Out</TableHead>
//                     <TableHead className="font-semibold">Time Out</TableHead>
//                     <TableHead className="font-semibold">Quantity (L)</TableHead>
//                     <TableHead className="font-semibold">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {paginatedTrucks.map((truck) => (
//                     <TableRow key={truck.id} className="h-8">
//                       <TableCell className="py-1">
//                         {format(parseISO(truck.timeIn), "MM/dd/yyyy")}
//                       </TableCell>
//                       <TableCell className="py-1">
//                         {format(parseISO(truck.timeIn), "HH:mm")}
//                       </TableCell>
//                       <TableCell className="py-1">
//                         {format(parseISO(truck.timeOut), "MM/dd/yyyy")}
//                       </TableCell>
//                       <TableCell className="py-1">
//                         {format(parseISO(truck.timeOut), "HH:mm")}
//                       </TableCell>
//                       <TableCell className="py-1">{truck.quantity}</TableCell>
//                       <TableCell className="py-1">
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           onClick={() => handleEdit(truck)}
//                         >
//                           <Edit2 className="w-4 h-4 text-blue-500" />
//                         </Button>
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           onClick={() => truck.id && handleDelete(truck.id)}
//                         >
//                           <Trash2 className="w-4 h-4 text-red-500" />
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//             {/* Pagination */}
//             <div className="flex justify-between items-center mt-4">
//               <span>
//                 Page {currentPage} of {totalPages}
//               </span>
//               <div>
//                 <Button
//                   onClick={() =>
//                     setCurrentPage((prev) => Math.max(prev - 1, 1))
//                   }
//                   disabled={currentPage === 1}
//                   className="mr-2"
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </Button>
//                 <Button
//                   onClick={() =>
//                     setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//                   }
//                   disabled={currentPage === totalPages}
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import { toast } from "sonner";
import {
  getAllWatertanker,
  createWatertanker,
  updateWatertanker,
  deleteWatertanker
} from "@/action-data/watertankerAction";

interface WaterTruck {
  id?: string;
  timeIn: string;
  timeOut: string;
  quantity: number;
}

export default function WaterTruck() {
  const [trucks, setTrucks] = useState<WaterTruck[]>([]);
  const [editingTruck, setEditingTruck] = useState<WaterTruck | null>(null);
  const [newTruck, setNewTruck] = useState<WaterTruck>({
    timeIn: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    timeOut: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    quantity: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchTrucks();
  }, []);

  const fetchTrucks = async () => {
    try {
      const response = await getAllWatertanker();
      if (response.error) {
        throw new Error(response.error);
      }
      setTrucks(response);
    } catch (error) {
      console.error('Error fetching water trucks:', error);
      toast.error('Failed to load water trucks');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isEditForm: boolean
  ) => {
    const { name, value } = e.target;
    if (isEditForm) {
      setEditingTruck(prev => ({
        ...prev!,
        [name]: name === "quantity" ? Number(value) : value,
      }));
    } else {
      setNewTruck(prev => ({
        ...prev,
        [name]: name === "quantity" ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent, isEditForm: boolean) => {
    e.preventDefault();
    try {
      const truckData = isEditForm ? editingTruck! : newTruck;
      const formattedTruck = {
        ...truckData,
        timeIn: new Date(truckData.timeIn).toISOString(),
        timeOut: new Date(truckData.timeOut).toISOString(),
      };

      if (isEditForm && editingTruck?.id) {
        const response = await updateWatertanker(editingTruck.id, formattedTruck);
        if (response.error) {
          throw new Error(response.error);
        }
        toast.success('Water truck updated successfully');
        setEditingTruck(null);
        setIsDialogOpen(false);
      } else {
        const response = await createWatertanker(formattedTruck);
        if (response.error) {
          throw new Error(response.error);
        }
        toast.success('Water truck added successfully');
        setNewTruck({
          timeIn: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
          timeOut: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
          quantity: 0,
        });
      }
      fetchTrucks();
    } catch (error) {
      console.error('Error submitting water truck:', error);
      toast.error('Failed to save water truck');
    }
  };

  const handleEdit = (truck: WaterTruck) => {
    setEditingTruck({
      ...truck,
      timeIn: format(parseISO(truck.timeIn), "yyyy-MM-dd'T'HH:mm"),
      timeOut: format(parseISO(truck.timeOut), "yyyy-MM-dd'T'HH:mm"),
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await deleteWatertanker(id);
      if (response.error) {
        throw new Error(response.error);
      }
      toast.success('Water truck deleted successfully');
      fetchTrucks();
    } catch (error) {
      console.error('Error deleting water truck:', error);
      toast.error('Failed to delete water truck');
    }
  };

  const filteredTrucks = trucks.filter(
    (truck) =>
      truck.id?.toString().includes(searchTerm) ||
      truck.quantity.toString().includes(searchTerm) ||
      format(parseISO(truck.timeIn), "yyyy-MM-dd").includes(searchTerm) ||
      format(parseISO(truck.timeOut), "yyyy-MM-dd").includes(searchTerm)
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
    isEditForm,
  }: {
    truck: WaterTruck;
    onSubmit: (e: React.FormEvent) => void;
    isEditForm: boolean;
  }) => (
    <form onSubmit={(e) => onSubmit(e)} className="space-y-4">
      <div className="flex items-center space-x-4">
        <Label htmlFor="timeIn" className="w-1/4">Time In</Label>
        <Input
          id="timeIn"
          name="timeIn"
          type="datetime-local"
          value={truck.timeIn}
          onChange={(e) => handleInputChange(e, isEditForm)}
          required
          className="w-3/4"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Label htmlFor="timeOut" className="w-1/4">Time Out</Label>
        <Input
          id="timeOut"
          name="timeOut"
          type="datetime-local"
          value={truck.timeOut}
          onChange={(e) => handleInputChange(e, isEditForm)}
          required
          className="w-3/4"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Label htmlFor="quantity" className="w-1/4">Quantity (Liters)</Label>
        <Input
          id="quantity"
          name="quantity"
          type="number"
          value={truck.quantity}
          onChange={(e) => handleInputChange(e, isEditForm)}
          required
          className="w-3/4"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          {isEditForm ? "Update" : "Add"}
        </Button>
        {isEditForm && (
          <Button
            type="button"
            onClick={() => setIsDialogOpen(false)}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            Cancel
          </Button>
        )}
      </div>
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
                onSubmit={(e) => handleSubmit(e, false)}
                isEditForm={false}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/watertruck.png"
                alt="Water Truck"
                width={300}
                height={200}
              />
            </div>
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
                    <TableHead className="font-semibold">Date In</TableHead>
                    <TableHead className="font-semibold">Time In</TableHead>
                    <TableHead className="font-semibold">Date Out</TableHead>
                    <TableHead className="font-semibold">Time Out</TableHead>
                    <TableHead className="font-semibold">Quantity (L)</TableHead>
                    <TableHead className="font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedTrucks.map((truck) => (
                    <TableRow key={truck.id} className="h-8">
                      <TableCell className="py-1">
                        {format(parseISO(truck.timeIn), "MM/dd/yyyy")}
                      </TableCell>
                      <TableCell className="py-1">
                        {format(parseISO(truck.timeIn), "HH:mm")}
                      </TableCell>
                      <TableCell className="py-1">
                        {format(parseISO(truck.timeOut), "MM/dd/yyyy")}
                      </TableCell>
                      <TableCell className="py-1">
                        {format(parseISO(truck.timeOut), "HH:mm")}
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
                          onClick={() => truck.id && handleDelete(truck.id)}
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

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Water Truck Entry</DialogTitle>
          </DialogHeader>
          {editingTruck && (
            <TruckForm
              truck={editingTruck}
              onSubmit={(e) => handleSubmit(e, true)}
              isEditForm={true}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}