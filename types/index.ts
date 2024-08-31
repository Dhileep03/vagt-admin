import { User } from "lucide-react";
import { IconType } from "react-icons";



export interface UserData {
    id: string;
    username: string;
    password:string;
    email: string;
    phonenumber: string;
  }

  export type WaterTanker = {
    id: number;
    timeIn: Date;
    timeOut: Date;
    quantity: number;
  };

  export type VehiclePass = {
    id: number;
    vehicleNo: string;
    issueDate: Date;
    expiryDate: Date;
    vehicleType: VehicleType;
  };
  
  export enum VehicleType {
    Car = 'Car',
    Truck = 'Truck',
    Bike = 'Bike',
    Van = 'Van',
    Bus = 'Bus',
    Tractor = 'Tractor',
    Trailer = 'Trailer',
    Other = 'Other',
  }
  