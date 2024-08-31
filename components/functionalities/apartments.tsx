// import React, { useState } from 'react';
// import { PlusCircle, Search, Users, Home, User, Calendar } from 'lucide-react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { format } from 'date-fns';

// // Assume these components are imported from your UI library
// import { 
//   Button, Input, Card, CardContent, CardHeader, 
//   CardTitle, Avatar, AvatarFallback, AvatarImage,
//   Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
//   Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
//   Select, SelectTrigger, SelectValue, SelectContent, SelectItem
// } from '@/components/ui';

// const apartmentSchema = z.object({
//   name: z.string().min(1, 'Apartment name is required'),
//   userId: z.number().int().positive('Owner ID is required'),
//   societyId: z.number().int().positive('Society ID is required'),
//   tenantId: z.number().int().positive().optional(),
// });

// const sampleApartments = [
//   { id: 1, name: 'Sunset Villa', owner: 'John Doe', society: 'Green Valley', tenant: 'Alice Smith', members: 3, createdAt: new Date(2023, 5, 15) },
//   { id: 2, name: 'Ocean View', owner: 'Jane Smith', society: 'Seaside Heights', tenant: null, members: 2, createdAt: new Date(2023, 7, 22) },
//   { id: 3, name: 'Mountain Retreat', owner: 'Bob Johnson', society: 'Alpine Meadows', tenant: 'Charlie Brown', members: 4, createdAt: new Date(2023, 9, 5) },
// ];

// export default function ApartmentManagement() {
//   const [apartments, setApartments] = useState(sampleApartments);
//   const [searchTerm, setSearchTerm] = useState('');

//   const form = useForm({
//     resolver: zodResolver(apartmentSchema),
//     defaultValues: {
//       name: '',
//       userId: undefined,
//       societyId: undefined,
//       tenantId: undefined,
//     },
//   });

//   const onSubmit = (data:any) => {
//     console.log(data);
//     // Here you would typically add the new apartment to your list or send it to an API
//     setApartments([...apartments, { 
//       id: apartments.length + 1, 
//       name: data.name, 
//       owner: 'New Owner', 
//       society: 'New Society', 
//       tenant: null, 
//       members: 0, 
//       createdAt: new Date() 
//     }]);
//     form.reset();
//   };

//   const filteredApartments = apartments.filter(apt => 
//     apt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     apt.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     apt.society.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Apartment Management</h1>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Input
//                 type="text"
//                 placeholder="Search apartments..."
//                 value={searchTerm}
//                 onChange={(e:any) => setSearchTerm(e.target.value)}
//                 className="pl-10 pr-4 py-2 rounded-full"
//               />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             </div>
//             <Dialog>
//               <DialogTrigger asChild>
//                 <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
//                   <PlusCircle className="w-4 h-4 mr-2" />
//                   Add Apartment
//                 </Button>
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>Add New Apartment</DialogTitle>
//                 </DialogHeader>
//                 <Form {...form}>
//                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//                     <FormField
//                       control={form.control}
//                       name="name"
//                       render={({ field }:any) => (
//                         <FormItem>
//                           <FormLabel>Apartment Name</FormLabel>
//                           <FormControl>
//                             <Input {...field} placeholder="Enter apartment name" />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <FormField
//                       control={form.control}
//                       name="userId"
//                       render={({ field }:any) => (
//                         <FormItem>
//                           <FormLabel>Owner</FormLabel>
//                           <Select onValueChange={field.onChange} defaultValue={field.value}>
//                             <FormControl>
//                               <SelectTrigger>
//                                 <SelectValue placeholder="Select owner" />
//                               </SelectTrigger>
//                             </FormControl>
//                             <SelectContent>
//                               <SelectItem value="1">John Doe</SelectItem>
//                               <SelectItem value="2">Jane Smith</SelectItem>
//                               <SelectItem value="3">Bob Johnson</SelectItem>
//                             </SelectContent>
//                           </Select>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <FormField
//                       control={form.control}
//                       name="societyId"
//                       render={({ field }:any) => (
//                         <FormItem>
//                           <FormLabel>Society</FormLabel>
//                           <Select onValueChange={field.onChange} defaultValue={field.value}>
//                             <FormControl>
//                               <SelectTrigger>
//                                 <SelectValue placeholder="Select society" />
//                               </SelectTrigger>
//                             </FormControl>
//                             <SelectContent>
//                               <SelectItem value="1">Green Valley</SelectItem>
//                               <SelectItem value="2">Seaside Heights</SelectItem>
//                               <SelectItem value="3">Alpine Meadows</SelectItem>
//                             </SelectContent>
//                           </Select>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <FormField
//                       control={form.control}
//                       name="tenantId"
//                       render={({ field }:any) => (
//                         <FormItem>
//                           <FormLabel>Tenant (Optional)</FormLabel>
//                           <Select onValueChange={field.onChange} defaultValue={field.value}>
//                             <FormControl>
//                               <SelectTrigger>
//                                 <SelectValue placeholder="Select tenant" />
//                               </SelectTrigger>
//                             </FormControl>
//                             <SelectContent>
//                               <SelectItem value="1">Alice Smith</SelectItem>
//                               <SelectItem value="2">Charlie Brown</SelectItem>
//                             </SelectContent>
//                           </Select>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <Button type="submit" className="w-full">Add Apartment</Button>
//                   </form>
//                 </Form>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredApartments.map((apartment) => (
//             <Card key={apartment.id} className="overflow-hidden">
//               <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4">
//                 <CardTitle className="flex justify-between items-center">
//                   <span>{apartment.name}</span>
//                   <Avatar>
//                     <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${apartment.owner}`} />
//                     <AvatarFallback>{apartment.owner[0]}</AvatarFallback>
//                   </Avatar>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-4">
//                 <div className="space-y-2">
//                   <div className="flex items-center text-sm">
//                     <Home className="w-4 h-4 mr-2 text-gray-500" />
//                     <span>{apartment.society}</span>
//                   </div>
//                   <div className="flex items-center text-sm">
//                     <User className="w-4 h-4 mr-2 text-gray-500" />
//                     <span>Owner: {apartment.owner}</span>
//                   </div>
//                   {apartment.tenant && (
//                     <div className="flex items-center text-sm">
//                       <User className="w-4 h-4 mr-2 text-gray-500" />
//                       <span>Tenant: {apartment.tenant}</span>
//                     </div>
//                   )}
//                   <div className="flex items-center text-sm">
//                     <Users className="w-4 h-4 mr-2 text-gray-500" />
//                     <span>{apartment.members} members</span>
//                   </div>
//                   <div className="flex items-center text-sm">
//                     <Calendar className="w-4 h-4 mr-2 text-gray-500" />
//                     <span>Created: {format(apartment.createdAt, 'PP')}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }