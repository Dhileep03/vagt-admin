import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import WaterTruck from './waterTruck';
import VehiclePass from "./vehiclePass";

export default function TransportManagement() {
  return (
    <Tabs defaultValue="vehiclePass" className="space-y-4">
      <TabsList className="flex space-x-4">
        <TabsTrigger value="vehiclePass">Vehicle Pass</TabsTrigger>
        <TabsTrigger value="waterTanker">Water Tanker</TabsTrigger>
        <TabsTrigger value="waterTanker">Apartment</TabsTrigger>
      </TabsList>

      <TabsContent value="vehiclePass">
        <VehiclePass />
      </TabsContent>

      <TabsContent value="waterTanker">
        <WaterTruck />
      </TabsContent>
      <TabsContent value="apartment">
        <WaterTruck />
      </TabsContent>
    </Tabs>
  );
}
