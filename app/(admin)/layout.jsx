import React from "react";
import { SideBar } from "./_comonents/side-bar";

function AdminLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-[200px] h-screen fixed border-r border-zinc-300/30">
        <SideBar />
      </div>
      <div className="pl-[200px] w-full">
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
