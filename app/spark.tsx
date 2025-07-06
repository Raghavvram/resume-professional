"use client";

import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

const Spark = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default Spark;
