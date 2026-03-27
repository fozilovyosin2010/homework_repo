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
import { Button, setRef } from "@mui/material";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
  const putData = async (obj) => {
    try {
      await axios.put(`${api}/api/to-dos`, obj);
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

  // add modal
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  function handleAddSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Images", e.target["images"].files[0]);
    formData.append("Name", e.target["name"].value.trim());
    formData.append("Description", e.target["description"].value.trim());

    postData(formData);

    setOpenEdit(false);
  }

  // edit modal

  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpenEdit = (obj) => {
    setOpenEdit(true);

    setIdxEdit(obj.id);
    setNameEdit(obj.name);
    setDesEdit(obj.description);
  };

  function handleEditSubmit(e) {
    e.preventDefault();

    const obj = {
      id: idxEdit,
      name: nameEdit.trim(),
      description: desEdit.trim(),
    };

    putData(obj);

    setOpenEdit(false);
  }

  // for edit modal (form)
  const [idxEdit, setIdxEdit] = useState(null);
  const [nameEdit, setNameEdit] = useState("");
  const [desEdit, setDesEdit] = useState("");

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  return (
    <div className="max-w-[1400px] m-[0_auto]">
      <div className="header p-[10px_20px]">
        <Button variant="outlined" onClick={handleClickOpenAdd}>
          Add a user
        </Button>
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
                            className="h-[100px] w-[100px]"
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
                      btnEdit={() => handleClickOpenEdit(elem)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* add modal */}
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Add modal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleAddSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="images"
              name="images"
              label="images"
              type="file"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* edit modal */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleEditSubmit} id="subscription-form">
            <TextField
              value={nameEdit}
              onChange={(e) => setNameEdit(e.target.value)}
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              value={desEdit}
              onChange={(e) => setDesEdit(e.target.value)}
              autoFocus
              required
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
