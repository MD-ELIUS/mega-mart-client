"use client";

import { use } from "react";
import Loading from "@/components/shared/Loading";
import Navbar from "./Navbar";
import { AuthContext } from "@/context/AuthContext";
import Footer from "./Footer";

const ClientLayout = ({ children }) => {
  const { loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>
  }

  return (
    
    <div className="flex flex-col max-w-[1600px] mx-auto min-h-screen">
        <div className="sticky top-0 z-50">
          <Navbar></Navbar>
          </div> 
      <main className="flex-grow">{children}</main>
      <div>
          <Footer></Footer>
      </div>
    
    </div>
      
 
  );
};

export default ClientLayout;