import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const DataTable = ({ columns, users, slug }) => {
const handleDelete = id => {
    console.log(id + " has been deleted!");
}


  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex">
          <Link className="cursor-pointer hover:opacity-70 active:scale-95 mr-5" to={`/${slug}/${params.row.id}`}>
            <GrView className="text-lg" />
          </Link>
          <div className="cursor-pointer hover:opacity-70 active:scale-95" onClick={() => handleDelete(params.row.id)}>
            <AiFillDelete className="text-lg text-red" />
          </div>
        </div>
      );
    },
  };

  return (
    <div>
      <DataGrid
        className="dataGrid bg-white p-3"
        rows={users}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;
