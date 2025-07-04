import { Navbar } from "@/components/global/navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
     <main className="flex-1"> {children}</main>
    </div>
  );
};

export default RootLayout;
