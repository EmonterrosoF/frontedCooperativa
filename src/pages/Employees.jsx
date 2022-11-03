import { useState } from "react";
import { useEffect } from "react";
import MUIDatatables, { createTheme } from "mui-datatables";
import { RiUserSharedFill } from "react-icons/ri";

const columns = [
  {
    name: "id",
    selector: (row) => row.id,
    options: {},
  },
  {
    name: "nombre",
    selector: (row) => row.nombre,
  },
  {
    name: "apellido",
    selector: (row) => row.apellido,
  },
];

// const deleteUser = ({ ...arg }) => {
//   console.log(arg.data);
// };

export default function Employees() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      const res = await fetch("http://localhost:4000/api/persona");
      const resUsers = await res.json();
      setusers(resUsers.content);
    }

    getAllUsers();
  }, []);

  const options = {
    filter: true,
    filterType: "dropdown",
    onRowsDelete: (rowsDeleted, dataRows) => {
      const idUser = dataRows.map((user) => user[0]);
      users.forEach(async (user) => {
        if (!idUser.includes(user.id)) {
          await fetch(`http://localhost:4000/api/persona/${user.id}`, {
            method: "DELETE",
          });
        }
      });
    },
  };
  return (
    <div className="my-20 mx-auto">
      <MUIDatatables
        title={"Lista de Empleados"}
        data={users}
        columns={columns}
        options={options}
      />
    </div>
  );
}
