"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-base-100 border-t border-primary/20 mt-12">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

     {/* Logo + Name + Short Description */}
<div className="flex flex-col md:items-center md:text-center gap-2 max-w-md">
  <Link href="/" className="flex md:items-center gap-3">
    <div className="relative h-12 w-12 md:h-14 md:w-14">
      <Image
        src="/logo.png"
        alt="MegaMart Logo"
        fill
        className="object-contain"
      />
    </div>
    <h4 className="text-primary font-bold text-2xl">
      MegaMart
    </h4>
  </Link>

  {/* Short Description */}
  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
    Your trusted online store for quality products at the best prices.
    Shop smart, shop comfortably — anytime, anywhere.
  </p>
</div>


        {/* Navigation Links */}
        <div className="md:text-center items-center">
          <h3 className="text-primary font-semibold text-xl mb-3">Important Links</h3>

           <div className="flex flex-col justify-center gap-2 text-lg  activeClass">
          <Link href="/"  className={` hover:text-primary  ${pathname === "/" ? "text-primary" : "text-[#1f1f1f]"}  `}>Home</Link>
          <Link href="/products" className={` hover:text-primary  ${pathname === "/products" ? "text-primary" : "text-[#1f1f1f]"}  `}>Products</Link>
          <Link href="/about" className={` hover:text-primary  ${pathname === "/about" ? "text-primary" : "text-[#1f1f1f]"}  `}>About Us</Link>
          <Link href="/contact" className={` hover:text-primary  ${pathname === "/contact" ? "text-primary" : "text-[#1f1f1f]"}  `}>Contact</Link>
        </div>

        </div>
       

        {/* Social Icons */}
        <div className="md:text-right md:flex md:flex-col md:mr-20 md:items-end">
           <h3 className="text-primary font-semibold text-xl mb-4">Social Links</h3>
               <div className="flex gap-4 text-2xl">
          <Link href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaInstagram />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noreferrer"    className="hover:text-primary">
            <FaXTwitter />
          </Link>
        </div>
        </div>
    
      </div>
       {/* Bottom Line */}
        <p className="border-t border-base-300  py-4 text-center text-sm md:text-base opacity-70">
          © {new Date().getFullYear()} MegaMart — All Rights Reserved.
        </p>
    </footer>
  );
}
