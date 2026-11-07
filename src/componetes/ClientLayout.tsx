
"use client";

import React, { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { ProductProvider } from "@/context/ProductContext";

const ClientLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div>
      <ProductProvider>
        <Navbar />

      <main className="min-h-[calc(100vh-160px)]">
        {children}
      </main>

      <Footer />

      <Toaster />
      </ProductProvider>
    </div>
  );
};

export default ClientLayout;
