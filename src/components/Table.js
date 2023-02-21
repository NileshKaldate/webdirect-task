import React, { useState } from "react";

const Table = ({ data, setPerson, setIsEdit, setCustomers, setIndex }) => {
  const [page, setPage] = useState(0);
  const pageData = data.slice(page * 5, (page + 1) * 5);
  return (
    <div className="mt-10">
      <div className="h-80">
        <table className="w-full ">
          <thead className="text-left bg-cyan-300">
            <tr>
              <th className="p-4">Name </th>
              <th>Address1</th>
              <th>Country</th>
              <th>phone</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`${
                    item.country.toLowerCase() === "india" && "bg-green-300"
                  }`}
                >
                  <td className="py-2 pl-4 border-b">{item.name}</td>
                  <td className="py-2 border-b">{item.address1}</td>
                  <td className="py-2 border-b">{item.email}</td>
                  <td className="py-2 border-b">{item.phone}</td>
                  <td className="py-2 border-b">
                    <button
                      className="bg-orange-600 text-white px-2 py-1 rounded "
                      onClick={() => {
                        setIsEdit(true);
                        setPerson(data.find((item, i) => index === i));
                        setIndex(index);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="py-2 border-b">
                    <button
                      className="bg-red-600 text-white px-2 py-1 rounded"
                      onClick={() => {
                        setCustomers(data.filter((ele, i) => index !== i));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mr-4 mt-10 items-center gap-4 mb-10">
        <button
          className="font-bold text-lg"
          onClick={() => {
            page > 0 && setPage(page - 1);
          }}
        >
          {"<"}
        </button>
        <h1 className="font-bold text-lg bg-cyan-300 px-2 rounded-[50%]">
          {page + 1}
        </h1>
        <button
          className="font-bold text-lg"
          onClick={() => {
            Math.ceil(data.length / 5) > page + 1 && setPage(page + 1);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Table;
