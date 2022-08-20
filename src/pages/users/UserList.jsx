import React, { useState } from "react";
import { userRows } from "../../data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import "./UserList.css";

export default function UserList() {
  const [useDatas, setUseDatas] = useState(userRows);

  const handleDelete = (userID) => {
    setUseDatas(useDatas.filter((item) => item.id !== userID));
  }


  const colums = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            </Link>
          </>
        )
      }
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return(
          <>
            <Link to='' className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon 
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      }
    }
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={useDatas}
        columns={colums}
        pageSize={4}
        disableSelectionOnClick
      />
    </div>
  );
}
