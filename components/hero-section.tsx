"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "./ui/background-lines";
import Image from "next/image";
import Countdown from "./ui/Countdown";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent)] z-0" />
      <BackgroundLines className="absolute inset-0 z-0 opacity-40">
        {/* You can pass any content here if needed */}
        <></>
      </BackgroundLines>

      <div className="relative container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            What The Hack??
          </h1>
          <Image
            src="/images/24-hours.svg"
            alt="24 Hours Icon"
            width={400}
            height={400}
            className="mx-auto"
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-6">
            <Link
              href="#"
              className={cn(
                "inline-flex items-center justify-center rounded-md text-base sm:text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 h-12 px-8",
                HoverBorderGradient
              )}
            >
              Explore Themes
            </Link>
            <Link
              href="#"
              className={cn(
                "inline-flex items-center justify-center rounded-md text-base sm:text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-[#fc6b32] to-purple-900 text-white hover:from-[#e65a28] hover:to-purple-800 h-12 px-8",
                HoverBorderGradient
              )}
            >
              Join Community
            </Link>
          </div>

          {/* Countdown Timer - Fixed Separation Issue */}
          <div className="relative flex justify-center items-center -mt-12">
            {/* Background Image & Countdown Wrapper */}
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              {/* Background Image */}
              <Image
                src="/images/countdown-bg.svg"
                alt="Countdown Background"
                fill
                className="object-contain"
              />
              {/* Countdown Positioned Absolutely Inside */}
              <div className="absolute flex items-center justify-center">
                <Countdown />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
