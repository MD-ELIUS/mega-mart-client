"use client";

import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function AddProductPage() {
  const { user } = useContext(AuthContext);





  // CLEAN submit — uses e.target instead of form.value
  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const img = e.target.img.value;
    const description = e.target.description.value;
   

    const today = new Date().toLocaleString("en-CA", {
  timeZone: "Asia/Dhaka",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false, 
});

console.log(today); 

    const payload = {
      title,
      slug: title.toLowerCase().replace(/ /g, "-"),
      price,
      category,
      img: img || "/avatar.png",
      description,

      user_name: user?.displayName || "",
      email: user?.email || "",
      user_photo: user?.photoURL || "/user.png",
      date_added: today,
     
      
    };

    try {
      const res = await fetch(
        "https://mega-mart-api-server.vercel.app/products",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        Swal.fire({
          title: "Success!",
          text: "Product added successfully!",
          icon: "success",
        });

        e.target.reset();
      } else {
        toast.error("Failed to add product");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen py-12 px-6 md:px-12 bg-base-100">
      <div className="w-11/12 max-w-2xl bg-white shadow-md hover:shadow-xl border border-primary/20 rounded-xl p-6 animate-fade-in-center">

        <h2 className="text-center text-3xl font-bold mb-5 text-primary">
          Add New Product
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-2">

          {/* TITLE */}
          <div>
            <label className="label font-semibold">Title</label>
            <input
              type="text"
              name="title"
              required
              className="input w-full border border-primary  outline-none"
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="label font-semibold">Price</label>
            <input
              type="number"
              name="price"
              required
              className="input w-full border border-primary  outline-none"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="label font-semibold">Category</label>
            <select
              name="category"
              required
              className="select w-full border border-primary  outline-none"
            >
              <option value="">Select category</option>
              <option value="Sofa">Sofa</option>
              <option value="Table">Table</option>
              <option value="Chair">Chair</option>
              <option value="Bed">Bed</option>
              <option value="Cabinet">Cabinet</option>
            </select>
          </div>

          {/* IMAGE */}
          <div>
            <label className="label font-semibold">Image URL</label>
            <input
              type="text"
              name="img"
              required
              className="input w-full border border-primary  outline-none"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="label font-semibold">Full Description</label>
            <textarea
              name="description"
              required
              maxLength={1000}
              className="textarea w-full border border-primary  outline-none h-32"
            ></textarea>
          </div>

        

          {/* READ ONLY USER INFO */}
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div>
              <label className="label font-semibold">User Name</label>
              <input
                value={user?.displayName || ""}
                readOnly
                className="input w-full border border-primary  outline-none bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="label font-semibold">Email</label>
              <input
                value={user?.email || ""}
                readOnly
                className="input w-full border border-primary  outline-none bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="label font-semibold">Photo URL</label>
              <input
                value={user?.photoURL || "/user.png"}
                readOnly
                className="input w-full border border-primary  outline-none bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          {/* SUBMIT */}
          <button className="btn btn-primary rounded-full btn-outline w-full mt-4">
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
}
