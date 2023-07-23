import React from "react";

const Add = ({ setOpen, slug, columns }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-[100vw] h-[100vh] absolute top-0 left-0 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.724)" }}
    >
      <div className="bg-darkBlue text-white p-5 rounded-lg font-bold w-1/2">
        <div className="flex justify-between mb-3">
          <h1>Add new {slug}</h1>
          <span
            className="cursor-pointer hover:opacity-70 active:scale-95"
            onClick={() => setOpen(false)}
          >
            X
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-center items-center">
            {columns
              .filter(
                (column) =>
                  column.field !== "id" &&
                  column.field !== "img" &&
                  column.field !== "fullName"
              )
              .map((column) => (
                <div className="flex flex-col mx-auto mb-3">
                  <label>{column.headerName}</label>
                  <input
                    className="bg-darkBlue p-2 border border-white"
                    type={column.type}
                    placeholder={column.field}
                  />
                </div>
              ))}

            <button className="bg-white text-darkBlue w-full px-3 py-1 mt-5 w-full self-center hover:opacity-70 active:scale-95">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
