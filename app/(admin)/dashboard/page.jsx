import React from "react";
import { AdminHeader } from "../_comonents/header-admin";
import { DashboardCards } from "./_components/dashboard-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashBoardTable } from "./_components/dashboard-table";
import { db } from "@/lib/db/db";

async function DashboardPage() {
  const cars = await db.car.findMany();
  const brands = await db.brand.findMany();

  const Today = new Date();

  const bookings = await db.booking.findMany({
    include: {
      reserve: {
        include: {
          car: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const todayBoookings = bookings.filter(
    (item) => item.createdAt.getDate() == Today.getDate()
  );

  return (
    <div>
      <div>
        <AdminHeader
          title="Dashboard Page"
          description="This provides an overview of the features of the system"
        />
      </div>

      <Card className="border-none shadow-none mt-4">
        <CardContent className="grid grid-cols-4 gap-5">
          <DashboardCards title="Today's Booking" href={'/bookings'} number={todayBoookings?.length} />
          <DashboardCards title="Total Brands" href={'/brands'} number={brands?.length} />
          <DashboardCards title="Total Cars" href={'/cars'} number={cars?.length} />
          <DashboardCards title="Total Clients" href={'/verify'} number={0} />
        </CardContent>
      </Card>

      <Card className="border-none shadow-none mt-4">
        <CardHeader>
          <CardTitle>Today's Bookings</CardTitle>
        </CardHeader>
        <CardContent className="">
          <DashBoardTable data={todayBoookings}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardPage;
