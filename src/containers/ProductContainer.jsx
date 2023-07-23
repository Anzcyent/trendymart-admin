import React, { useState } from "react";
import { Add, DataTable } from "../components";
import products from "../utils/allProducts";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];

const ProductContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3 font-urbanist bg-darkBlue w-full text-white">
      <div className="flex my-3">
        <h1 className="font-bold text-2xl mr-3">Products</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-white text-darkBlue font-bold px-3 py-1 hover:opacity-80 active:scale-95 hover:bg-darkBlue hover:text-white transition"
        >
          Add New Product
        </button>
      </div>

      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
    </div>
  );
};

export default ProductContainer;
