import axios from "axios";
import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Menu from "./Component/Menu";

const App = () => {
  const api = "http://37.27.29.18:8001";
  const apiImages = "http://37.27.29.18:8001/images";

  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(`${api}/api/to-dos`);
      setUsers(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const delData = async (id) => {
    try {
      await axios.delete(`${api}/api/to-dos?id=${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };
  const postData = async (obj) => {
    try {
      await axios.post(`${api}/api/to-dos`, obj);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const checkedData = async (id) => {
    try {
      await axios.put(`${api}/completed?id=${id}`);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // for menu
  function handleBtnDel(id) {
    delData(id);
  }

  function handleBtnChecked(id) {
    checkedData(id);
  }

  function handleAddSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Images", e.target["images"].files[0]);
    formData.append("Name", e.target["name"].value.trim());
    formData.append("Description", e.target["description"].value.trim());

    postData(formData);
  }

  return (
    <div>
      <div className="header">
        <form action="" onSubmit={handleAddSubmit}>
          <input required className="border" type="text" name="name" id="" />
          <input
            required
            className="border"
            type="text"
            name="description"
            id=""
          />
          <input required className="border" type="file" name="images" id="" />
          <button className="bg-black text-[#fff]">submit</button>
        </form>
      </div>
      <div className="p-[20px]">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">status</StyledTableCell>
                <StyledTableCell align="right">images</StyledTableCell>
                <StyledTableCell align="right">options</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((elem) => (
                <StyledTableRow key={elem.id}>
                  <StyledTableCell component="th" scope="row">
                    {elem.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {elem.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {elem.isCompleted ? "active" : "inactive"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div className="flex justify-end">
                      {elem.images.map((img, imgIdx) => {
                        return (
                          <img
                            key={imgIdx}
                            className="h-[150px] w-[150px]"
                            src={`${apiImages}/${img.imageName}`}
                          />
                        );
                      })}
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Menu
                      btnDel={() => handleBtnDel(elem.id)}
                      btnChecked={() => handleBtnChecked(elem.id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default App;
