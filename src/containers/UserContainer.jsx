import React from "react";
import { DataTable } from "../components";
import users from "../utils/allUsers"

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/assets/user.png"} alt="img" />;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      type: "boolean",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <div>View</div>
            <div>Delete</div>
          </div>
        );
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];
  

const UserContainer = () => {
  return (
    <div className="p-3 font-urbanist bg-darkBlue w-full text-white">
      <div className="flex my-3">
        <h1 className="font-bold text-2xl mr-3">Users</h1>
        <button className="bg-white text-darkBlue font-bold px-3 py-1 hover:opacity-80 active:scale-95 hover:bg-darkBlue hover:text-white transition">
          Add New User
        </button>
      </div>

      <DataTable slug="users" columns={columns} users={users} />
    </div>
  );
};

export default UserContainer;
