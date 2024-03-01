import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarCards } from "./car-cards";

export const CarDisplay = () => {

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Car Rental Services</CardTitle>
        <CardDescription>
          Start reserving and booking your car of choice
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CarCards />
      </CardContent>

      <CardFooter>
        <div>Footer</div>
      </CardFooter>
    </Card>
  );
};
