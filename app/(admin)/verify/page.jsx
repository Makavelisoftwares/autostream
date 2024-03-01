import React from "react";
import { AdminHeader } from "../_comonents/header-admin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientsTable } from "./_components/clients-table";

function VerifyPage() {
  return (
    <div>
      <div>
        <AdminHeader
          title="Client Verification Page"
          description="start verifying user details for him/her to continue bookings"
        />
      </div>

      <Card className='border-none shadow-none'>
        <CardHeader>
          <CardTitle>Clients</CardTitle>
        </CardHeader>

        <CardContent>
          <ClientsTable />
        </CardContent>
      </Card>
    </div>
  );
}

export default VerifyPage;
