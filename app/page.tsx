"use client";

import React from "react";
import Spark from "./spark";
import Resume from "./resume";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <Spark />
      <div className="absolute top-0 left-0 w-full h-full z-10 overflow-y-auto">
        <div className="container mx-auto p-4 sm:p-6 md:p-8">
          <Resume />
        </div>
      </div>
    </div>
  );
}
