import React, { useState } from "react";
import { products } from "../../data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./Products.css";

export default function Products() {
  const [productsDatas, setProductsDatas] = useState(products);

  const handleDelete = (productID) => {
    setProductsDatas(productsDatas.filter((item) => item.id !== productID));
  };

  const colums = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`} className="link">
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.name}
              </div>
            </Link>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={productsDatas}
        columns={colums}
        pageSize={3}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
