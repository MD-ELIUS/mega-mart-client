"use client";
import React, { use, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { usePathname, useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const { user, signOutUser } = use(AuthContext);
    // console.log(user); 
    const [dropdownOpen, setDropdownOpen] = useState(false);



    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                setMenuOpen(false)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const router = useRouter();  // detect user

    const pathname = usePathname();
    const links = <>
        <Link href="/"  className={` hover:text-primary  ${pathname === "/" ? "text-primary" : "text-[#1f1f1f]"} font-medium `}>Home</Link>
        <Link href="/products" className={` hover:text-primary  ${pathname === "/products" ? "text-primary" : "text-[#1f1f1f]"} font-medium `}>Products</Link>
        <Link href="/about" className={` hover:text-primary  ${pathname === "/about" ? "text-primary" : "text-[#1f1f1f]"} font-medium `}>About Us</Link>
        <Link href="/contact" className={` hover:text-primary  ${pathname === "/contact" ? "text-primary" : "text-[#1f1f1f]"} font-medium `}>Contact</Link>

    </>



    return (
        <div className="bg-base-100 nav shadow-md  w-full ">
            <div className="w-11/12 mx-auto flex justify-between items-center py-2 md:py-1 ">

                <Link href='/' onClick={() => setMenuOpen(false)} className='flex items-center gap-2'>
                    <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 ">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <h4 className='text-primary font-bold text-[20px] md:text-[24px] xl:text-[24px] '>MegaMart</h4>
                </Link>

                <div className="hidden lg:flex items-center gap-8 text-lg font-medium">

                    {links}


                </div>
                <div className="hidden lg:flex items-center gap-2">
                    {
                        user ? <>
                            <div className="relative hidden md:flex">
                                {/* Avatar trigger */}
                                <div
                                    role="button"
                                    className="btn btn-ghost h-14 w-14 btn-circle avatar"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    <Image
                                        src={user?.photoURL || "/avatar.png"}
                                        alt="User Avatar"
                                        width={56} // 14*4
                                        height={56}
                                        className="object-cover w-full h-full ring-2 ring-primary rounded-full"
                                        onError={(e) => {
                                            e.currentTarget.src = "/avatar.png"; // fallback
                                        }}
                                    />
                                </div>

                                {/* Dropdown content */}
                                {dropdownOpen && (
                                    <ul className="absolute right-0 mt-20 z-[50] p-4 shadow-xl bg-base-100 rounded-xl w-56 border border-primary overflow-hidden">
                                        <li className="flex flex-col items-center text-center border-b border-primary pb-2 mb-2">
                                            <p className="font-semibold text-xl text-[#1f1f1f] truncate w-full text-center" >
                                                {user?.displayName || "User"}
                                            </p>
                                            <p

                                                className="font-medium text-[14px] text-[#1f1f1f] break-words w-full text-center"
                                            >
                                                {user?.email || "user@example.com"}
                                            </p>
                                        </li>

                                        <li className="mt-2">
                                            <Link
                                                href="/add-product"
                                                onClick={() => setDropdownOpen(false)}
                                                className={`btn btn-primary w-full rounded-full ${pathname === "/add-product" ? "" : "btn-outline"}`}
                                            >
                                                Add Product
                                            </Link>
                                        </li>

                                        <li className="mt-2">
                                            <Link
                                                href="/manage-product"
                                                onClick={() => setDropdownOpen(false)}
                                                className={`btn btn-primary w-full rounded-full ${pathname === "/manage-product" ? "" : "btn-outline"}`}
                                            >
                                                Manage Product
                                            </Link>
                                        </li>

                                        <li className="mt-2">
                                            <button
                                                onClick={() => { handleLogOut(); setDropdownOpen(false); }}
                                                className="btn btn-primary btn-outline w-full rounded-full"
                                            >
                                                Sign Out
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </>


                            : (
                                <>
                                    <Link href='/login' className="btn btn-primary  btn-outline rounded-full">Login</Link>
                                    <Link href='/register' className="btn btn-primary btn-outline rounded-full">Register</Link>
                                </>
                            )
                    }

                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="btn btn-primary px-1.5  "
                    >
                        {menuOpen ? <MdClose size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content */}

            {menuOpen && (
                <div className="lg:hidden w-11/12 mx-auto    nav ">
                    <div className="flex flex-col text-lg font-medium  activeClass  space-y-2 my-4 "> <Link onClick={() => setMenuOpen(!menuOpen)} href="/" className={` hover:text-primary  ${pathname === "/" ? "text-primary" : "text-[#1f1f1f]"}`}>Home</Link>
                        <Link onClick={() => setMenuOpen(!menuOpen)} href="/products" className={` hover:text-primary  ${pathname === "/products" ? "text-primary" : "text-[#1f1f1f]"}`}>Products</Link>
                        <Link onClick={() => setMenuOpen(!menuOpen)} href="/about" className={` hover:text-primary  ${pathname === "/about" ? "text-primary" : "text-[#1f1f1f]"}`}>About Us</Link>
                        <Link onClick={() => setMenuOpen(!menuOpen)} href="/contact" className={` hover:text-primary  ${pathname === "/contact" ? "text-primary" : "text-[#1f1f1f]"}`}>Contact</Link>


                    </div>
                    <div className=" pb-4 flex flex-col gap-2">
                        {user ? (
                            <>
                                <div className="flex flex-col justify-center items-center ">

                                    <div className="btn btn-ghost btn-circle avatar h-14 w-14">
                                        <Image
                                            src={user?.photoURL || "/avatar.png"}
                                            alt="User Avatar"
                                            width={56} // 14*4
                                            height={56}
                                            className="rounded-full ring-2 ring-primary object-cover"
                                            onError={(e) => {
                                            e.currentTarget.src = "/avatar.png"; // fallback
                                        }}
                                        />
                                    </div>

                                    <div className="font-semibold text-xl text-[#1f1f1f] w-full text-center">
                                        {user.displayName}
                                    </div>

                                    <div className="font-medium text-[14px] text-[#1f1f1f]  w-full text-center">
                                        {user.email}
                                    </div>

                                </div>
                                 <Link href='/add-product' onClick={() => setMenuOpen(!menuOpen)}  className={`btn btn-primary rounded-full  ${pathname === "/add-product" ? "" : "btn-outline"} w-full font-semibold md:px-4 xl:px-6`}>Add Product</Link>
                                  <Link href='/manage-product' onClick={() => setMenuOpen(!menuOpen)} className={`btn btn-primary rounded-full ${pathname === "/manage-product" ? "" : "btn-outline"} w-full font-semibold md:px-4 xl:px-6`}>Manage Product</Link>
                                <button onClick={handleLogOut} className="btn btn-primary btn-outline rounded-full w-full font-semibold md:px-4 xl:px-6">Sign Out</button>

                            </>

                        ) : (
                            <>
                                <Link href="/login" onClick={() => setMenuOpen(!menuOpen)} className="btn btn-primary rounded-full btn-outline w-full font-semibold md:px-4 xl:px-6">Login</Link>
                                <Link href="/register" onClick={() => setMenuOpen(!menuOpen)} className="btn btn-primary rounded-full btn-outline w-full font-semibold md:px-4 xl:px-6">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}
