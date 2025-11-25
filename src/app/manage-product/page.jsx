"use client";

import { use, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

import { toast } from "react-toastify";
import Image from "next/image";
import LoadingData from "@/components/shared/LoadingData";
import Link from "next/link";

export default function ManageProductPage() {
  const { user, loading } = use(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push(`/login?redirect=${pathname}`);
    }
  }, [user, loading, router, pathname]);

  // Fetch products
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch(`https://mega-mart-api-server.vercel.app/products?email=${user.email}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        toast.error("Failed to load products");
      }
      setIsLoading(false);
    }
    loadProducts();
  }, [user]);

  
// Delete product
const handleDelete = async (id) => {
  const Swal = (await import("sweetalert2")).default;

  Swal.fire({
    title: "Are you sure?",
    text: "This product will be permanently deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await fetch(`https://mega-mart-api-server.vercel.app/products/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          Swal.fire("Deleted!", "Product has been deleted.", "success");
          setProducts(products.filter((p) => p._id !== id));
        } else {
          Swal.fire("Failed!", "Delete failed.", "error");
        }
      } catch (error) {
        Swal.fire("Error!", "Server error", "error");
      }
    }
  });
};


  if (loading || isLoading) return <LoadingData />;

  return (
    <div className=" min-h-screen py-12 w-11/12 mx-auto bg-base-100">
       <div className="text-center mb-10">
           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary  mb-3">
        Manage Products
      </h1>

      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg md:text-xl font-semibold max-w-2xl mx-auto leading-relaxed">
  Effortlessly organize all your products from one place.
</p>
       </div>

      

       {products.length === 0 ? (
        
      <>
      <div className="flex flex-col justify-center items-center gap-3 ">
          <p className="text-center text-gray-500 mt-8 text-lg">
         You have not added any product yet
        </p>
        <Link href="/add-product" className="btn btn-primary rounded-full max-w-md">
        + Add Your First Product
        </Link>
      </div>
      
      </>
      ) 
    :
    (<>

     <div className=" flex flex-col md:flex-row justify-between items-center gap-5  bg-white shadow-md hover:shadow-xl border border-primary/20 rounded-xl p-3 mb-6">

       <div className="flex flex-col gap-2 justify-center items-center">
        <h4 className="text-3xl text-primary font-bold">{products.length}</h4>
        <p className="text-secondary font-medium">Your Products</p>
       </div>

       <div>
        <Link href="/add-product" className="btn btn-primary rounded-full">
       + Add New Product
        </Link>
       </div>

       </div>
    
     {/* TABLE */}
      <div className="overflow-x-auto shadow-md hover:shadow-xl rounded-xl border border-primary/20">
        <table className="table table-zebra">
          <thead className="bg-primary text-white text-lg">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th className="text-center">Title</th>
              <th className="text-center">Category</th>
              <th className="text-center">Price</th>
              <th className="text-center">Date Added</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, index) => (
              <tr key={p._id} className="hover">
                <td className="font-bold">{index + 1}</td>

                <td>
                  <Image
                    src={p.img}
                    alt={p.title}
                     width={56} // 14*4
                     height={56}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                </td>

                <td className="font-semibold text-center">{p.title}</td>

                <td className="text-center">
                  {p.category}
                </td>

                <td className="font-semibold text-center">${p.price}</td>

           <td className="text-center">
  {new Date(p?.date_added).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })}
</td>


<td className="text-center align-middle">
  <div className="flex justify-center items-center gap-2">
    <Link 
      href={`/products/${p.slug}`} 
      className="btn  btn-primary btn-outline rounded-full"
    >
      View
    </Link>

    <button
      onClick={() => handleDelete(p._id)}
      className="btn  btn-error btn-outline rounded-full"
    >
      Delete
    </button>
  </div>
</td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
    </>)
    
    
    
    }
      

     
    
      
    </div>
  );
}
