// "use client"
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
// import { format } from "date-fns";
// import Image from "next/image";
// import { toast } from "sonner";
// import {
//   getAllVechilepass,
//   createVechilepass,
//   updateVechilepass,
//   deleteVechilepass
// } from "@/action-data/vechilepassAction";

// interface Pass {
//   id?: string;
//   vehicleNo: string;
//   issueDate: string;
//   expiryDate: string;
//   vehicleType: string;
// }

// export default function VehiclePass() {
//   const [passes, setPasses] = useState<Pass[]>([]);
//   const [editingPass, setEditingPass] = useState<Pass | null>(null);
//   const [newPass, setNewPass] = useState<Pass>({
//     vehicleNo: "",
//     issueDate: new Date().toISOString(),
//     expiryDate: new Date().toISOString(),
//     vehicleType: "Car",
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     fetchPasses();
//   }, []);

//   const fetchPasses = async () => {
//     try {
//       const response = await getAllVechilepass();
//       if (response.error) {
//         throw new Error(response.error);
//       }
//       if (Array.isArray(response)) {
//         setPasses(response);
//       } else {
//         console.error('Unexpected API response format:', response);
//         toast.error('Failed to load passes: Unexpected data format');
//         setPasses([]);
//       }
//     } catch (error) {
//       console.error('Error fetching passes:', error);
//       toast.error('Failed to load passes');
//       setPasses([]);
//     }
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     if (editingPass) {
//       setEditingPass({
//         ...editingPass,
//         [name]: name.includes("Date") ? new Date(value).toISOString() : value,
//       });
//     } else {
//       setNewPass({
//         ...newPass,
//         [name]: name.includes("Date") ? new Date(value).toISOString() : value,
//       });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (editingPass && editingPass.id) {
//         const response = await updateVechilepass(editingPass.id, editingPass);
//         if (response.error) {
//           throw new Error(response.error);
//         }
//         toast.success('Pass updated successfully');
//         setEditingPass(null);
//       } else {
//         const response = await createVechilepass(newPass);
//         if (response.error) {
//           throw new Error(response.error);
//         }
//         toast.success('Pass created successfully');
//         setNewPass({
//           vehicleNo: "",
//           issueDate: new Date().toISOString(),
//           expiryDate: new Date().toISOString(),
//           vehicleType: "Car",
//         });
//       }
//       fetchPasses();
//     } catch (error) {
//       console.error('Error submitting pass:', error);
//       toast.error('Failed to save pass');
//     }
//   };

//   const handleEdit = (pass: Pass) => {
//     setEditingPass(pass);
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       const response = await deleteVechilepass(id);
//       if (response.error) {
//         throw new Error(response.error);
//       }
//       toast.success('Pass deleted successfully');
//       fetchPasses();
//     } catch (error) {
//       console.error('Error deleting pass:', error);
//       toast.error('Failed to delete pass');
//     }
//   };

//   const filteredPasses = passes.filter(
//     (pass) =>
//       pass.vehicleNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       pass.vehicleType.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredPasses.length / itemsPerPage);
//   const paginatedPasses = filteredPasses.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm]);

//   const PassForm = ({
//     pass,
//     onSubmit,
//     isEditing,
//   }: {
//     pass: Pass;
//     onSubmit: (e: React.FormEvent) => void;
//     isEditing: boolean;
//   }) => (
//     <form onSubmit={onSubmit} className="space-y-4">
//       <div className="flex items-center space-x-4">
//         <label className="w-1/3 text-left">Vehicle Number</label>
//         <Input
//           name="vehicleNo"
//           placeholder="Enter vehicle number"
//           value={pass.vehicleNo}
//           onChange={handleInputChange}
//           required
//           className="w-2/3"
//         />
//       </div>
//       <div className="flex items-center space-x-4">
//         <label className="w-1/3 text-left">Issue Date</label>
//         <Input
//           name="issueDate"
//           type="date"
//           value={format(new Date(pass.issueDate), "yyyy-MM-dd")}
//           onChange={handleInputChange}
//           required
//           className="w-2/3"
//         />
//       </div>
//       <div className="flex items-center space-x-4">
//         <label className="w-1/3 text-left">Expiry Date</label>
//         <Input
//           name="expiryDate"
//           type="date"
//           value={format(new Date(pass.expiryDate), "yyyy-MM-dd")}
//           onChange={handleInputChange}
//           required
//           className="w-2/3"
//         />
//       </div>
//       <div className="flex items-center space-x-4">
//         <label className="w-1/3 text-left">Vehicle Type</label>
//         <select
//           name="vehicleType"
//           value={pass.vehicleType}
//           onChange={handleInputChange}
//           className="w-2/3 border rounded-md p-2"
//         >
//           <option value="Car">Car</option>
//           <option value="Bike">Bike</option>
//           <option value="Truck">Truck</option>
//         </select>
//       </div>
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
//             onClick={() => setEditingPass(null)}
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
//             Vehicle Pass Management
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-5 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
//           {/* Forms Column */}
//           <div className="w-full lg:w-1/3 flex flex-col">
//             <div className="mb-4">
//               <h2 className="text-xl font-semibold mb-2 text-blue-700">
//                 {editingPass ? "Edit Pass" : "Add New Pass"}
//               </h2>
//               <PassForm
//                 pass={editingPass || newPass}
//                 onSubmit={handleSubmit}
//                 isEditing={!!editingPass}
//               />
//             </div>
//             {!editingPass && (
//               <div className="flex justify-center">
//                 <Image
//                   src="/vechilepass.png"
//                   alt="Vehicle Pass"
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
//                 Vehicle Passes
//               </h2>
//               <Input
//                 type="text"
//                 placeholder="Search passes..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="max-w-xs"
//               />
//             </div>
//             <div className="flex-grow overflow-auto">
//               <Table className="w-full">
//                 <TableHeader>
//                   <TableRow className="bg-blue-100">
//                     <TableHead className="font-semibold">Vehicle No.</TableHead>
//                     <TableHead className="font-semibold">Issue Date</TableHead>
//                     <TableHead className="font-semibold">Expiry Date</TableHead>
//                     <TableHead className="font-semibold">Vehicle Type</TableHead>
//                     <TableHead className="font-semibold">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {paginatedPasses.map((pass) => (
//                     <TableRow key={pass.id} className="h-8">
//                       <TableCell className="py-1">{pass.vehicleNo}</TableCell>
//                       <TableCell className="py-1">
//                         {format(new Date(pass.issueDate), "MM/dd/yyyy")}
//                       </TableCell>
//                       <TableCell className="py-1">
//                         {format(new Date(pass.expiryDate), "MM/dd/yyyy")}
//                       </TableCell>
//                       <TableCell className="py-1">{pass.vehicleType}</TableCell>
//                       <TableCell className="py-1">
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           onClick={() => handleEdit(pass)}
//                         >
//                           <Edit2 className="w-4 h-4 text-blue-500" />
//                         </Button>
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           onClick={() => handleDelete(pass.id!)}
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

"use client"
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import Image from "next/image";
import { toast } from "sonner";
import {
  getAllVechilepass,
  createVechilepass,
  updateVechilepass,
  deleteVechilepass
} from "@/action-data/vechilepassAction";

interface Pass {
  id?: string;
  vehicleNo: string;
  issueDate: string;
  expiryDate: string;
  vehicleType: string;
}

const EditDialog = ({ pass, onSave, onClose }:any) => {
  const [editingPass, setEditingPass] = useState(pass);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditingPass({
      ...editingPass,
      [name]: name.includes("Date") ? new Date(value).toISOString() : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editingPass);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Edit2 className="w-4 h-4 text-blue-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Vehicle Pass</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="w-1/3 text-left">Vehicle Number</label>
            <Input
              name="vehicleNo"
              value={editingPass.vehicleNo}
              onChange={handleInputChange}
              required
              className="w-2/3"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="w-1/3 text-left">Issue Date</label>
            <Input
              name="issueDate"
              type="date"
              value={format(new Date(editingPass.issueDate), "yyyy-MM-dd")}
              onChange={handleInputChange}
              required
              className="w-2/3"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="w-1/3 text-left">Expiry Date</label>
            <Input
              name="expiryDate"
              type="date"
              value={format(new Date(editingPass.expiryDate), "yyyy-MM-dd")}
              onChange={handleInputChange}
              required
              className="w-2/3"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="w-1/3 text-left">Vehicle Type</label>
            <select
              name="vehicleType"
              value={editingPass.vehicleType}
              onChange={handleInputChange}
              className="w-2/3 border rounded-md p-2"
            >
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Truck">Truck</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">
              Update
            </Button>
            <Button type="button" onClick={onClose} className="bg-red-500 hover:bg-red-600 text-white">
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default function VehiclePass() {
  const [passes, setPasses] = useState<Pass[]>([]);
  const [newPass, setNewPass] = useState<Pass>({
    vehicleNo: "",
    issueDate: new Date().toISOString(),
    expiryDate: new Date().toISOString(),
    vehicleType: "Car",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchPasses();
  }, []);

  const fetchPasses = async () => {
    try {
      const response = await getAllVechilepass();
      if (response.error) {
        throw new Error(response.error);
      }
      if (Array.isArray(response)) {
        setPasses(response);
      } else {
        console.error('Unexpected API response format:', response);
        toast.error('Failed to load passes: Unexpected data format');
        setPasses([]);
      }
    } catch (error) {
      console.error('Error fetching passes:', error);
      toast.error('Failed to load passes');
      setPasses([]);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewPass({
      ...newPass,
      [name]: name.includes("Date") ? new Date(value).toISOString() : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createVechilepass(newPass);
      if (response.error) {
        throw new Error(response.error);
      }
      toast.success('Pass created successfully');
      setNewPass({
        vehicleNo: "",
        issueDate: new Date().toISOString(),
        expiryDate: new Date().toISOString(),
        vehicleType: "Car",
      });
      fetchPasses();
    } catch (error) {
      console.error('Error submitting pass:', error);
      toast.error('Failed to save pass');
    }
  };

  const handleEdit = async (updatedPass: Pass) => {
    try {
      const response = await updateVechilepass(updatedPass.id!, updatedPass);
      if (response.error) {
        throw new Error(response.error);
      }
      toast.success('Pass updated successfully');
      fetchPasses();
    } catch (error) {
      console.error('Error updating pass:', error);
      toast.error('Failed to update pass');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await deleteVechilepass(id);
      if (response.error) {
        throw new Error(response.error);
      }
      toast.success('Pass deleted successfully');
      fetchPasses();
    } catch (error) {
      console.error('Error deleting pass:', error);
      toast.error('Failed to delete pass');
    }
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

  return (
    <div className="h-[90vh] bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <Card className="w-full mx-auto bg-white rounded-xl overflow-hidden">
        <CardHeader className="text-blue-700 p-2">
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
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form fields */}
                <div className="flex items-center space-x-4">
                  <label className="w-1/3 text-left">Vehicle Number</label>
                  <Input
                    name="vehicleNo"
                    placeholder="Enter vehicle number"
                    value={newPass.vehicleNo}
                    onChange={handleInputChange}
                    required
                    className="w-2/3"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <label className="w-1/3 text-left">Issue Date</label>
                  <Input
                    name="issueDate"
                    type="date"
                    value={format(new Date(newPass.issueDate), "yyyy-MM-dd")}
                    onChange={handleInputChange}
                    required
                    className="w-2/3"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <label className="w-1/3 text-left">Expiry Date</label>
                  <Input
                    name="expiryDate"
                    type="date"
                    value={format(new Date(newPass.expiryDate), "yyyy-MM-dd")}
                    onChange={handleInputChange}
                    required
                    className="w-2/3"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <label className="w-1/3 text-left">Vehicle Type</label>
                  <select
                    name="vehicleType"
                    value={newPass.vehicleType}
                    onChange={handleInputChange}
                    className="w-2/3 border rounded-md p-2"
                  >
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="Truck">Truck</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    Add
                  </Button>
                </div>
              </form>
            </div>
            <div className="flex justify-center">
              <Image
                src="/vechilepass.png"
                alt="Vehicle Pass"
                width={300}
                height={200}
              />
            </div>
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
                    <TableHead className="font-semibold">Vehicle Type</TableHead>
                    <TableHead className="font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedPasses.map((pass) => (
                    <TableRow key={pass.id} className="h-8">
                      <TableCell className="py-1">{pass.vehicleNo}</TableCell>
                      <TableCell className="py-1">
                        {format(new Date(pass.issueDate), "MM/dd/yyyy")}
                      </TableCell>
                      <TableCell className="py-1">
                        {format(new Date(pass.expiryDate), "MM/dd/yyyy")}
                      </TableCell>
                      <TableCell className="py-1">{pass.vehicleType}</TableCell>
                      <TableCell className="py-1">
                        <EditDialog
                          pass={pass}
                          onSave={handleEdit}
                          onClose={() => {}}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(pass.id!)}
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