"use client";

import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { VideoText } from "../components/magicui/video-text";

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
      {/* VideoText Foreground */}
      <div className="relative z-10 ml-auto mr-auto h-[400px] w-1/2 flex items-center justify-center">
        <VideoText src="https://cdn.magicui.design/ocean-small.webm">
          RAGHAV J
        </VideoText>
      </div>
    </div>
  );
};

export default Spark;
