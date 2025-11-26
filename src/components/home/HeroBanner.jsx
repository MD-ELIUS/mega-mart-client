import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ShinyButton } from "@/components/ui/shiny-button"
import { TypingAnimation } from "../ui/typing-animation";


export default function HeroBanner() {
    return (
        <div className="relative w-full aspect-[16/9] md:h-[85vh] overflow-hidden">

            {/* Background image */}
            <div className="absolute inset-0 hero-bg bg-cover bg-center bg-no-repeat"></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content Centered */}
            <section className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-11/12 mx-auto">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-primary drop-shadow-lg">
                        Welcome to MegaMart
                    </h1>
                    <p className="mt-4 mb-6 text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-semibold">
                        <TypingAnimation
                            words={[
                                "Smart shopping. Better prices. Faster delivery.",
                                "Quality products. Great deals. Every day.",
                                "Shop easy. Save more. Live better.",
                            ]}
                            loop
                        />


                    </p>


                    {/* <p className="mt-4 mb-4 text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Shop smarter. Live better. Explore thousands of premium products.
          </p> */}


                    <Link href="/products" className="">
                        <ShinyButton
                            className=" btn btn-primary btn-outline
    text-xs px-3 py-2          /* very small screens */
    sm:text-sm sm:px-4 sm:py-2 /* small screens */
    md:text-lg md:px-6 md:py-2 /* tablets & desktops */
    rounded-full font-medium text-white
  "
                        >
                            Explore Products
                        </ShinyButton>

                    </Link>


                </div>
            </section>
        </div>
    );
}
