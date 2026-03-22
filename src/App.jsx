import React, { useEffect, useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

import Checkbox from "@mui/material/Checkbox";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import axios from "axios";
const App = () => {
  const api = "http://localhost:3000/users";

  const [statusFlt, setStatusFlt] = React.useState("");
  const [inpS, setInpS] = React.useState("");

  const handleStatus = (event) => {
    setStatusFlt(event.target.value);
  };

  function handleInpS(event) {
    setInpS(event.target.value);
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      //
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

  const [users, setUsers] = useState([]);

  async function getData() {
    try {
      const { data } = await axios.get(api);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // requests
  async function sData(name, status) {
    try {
      const { data } = await axios.get(
        `${api}?name_like=${name}&status_like=${status}`,
      );
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function delData(id) {
    try {
      await axios.delete(`${api}/${id}`);
      getData();
    } catch (error) {
      console.error(console.error(error));
    }
  }
  async function patchData(id, obj) {
    try {
      await axios.patch(`${api}/${id}`, obj);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  async function postData(obj) {
    try {
      await axios.post(api, obj);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    sData(inpS.trim(), statusFlt);
  }, [inpS, statusFlt]);

  const [openDel, setOpenDel] = React.useState(false);

  // id for delete and edit
  const [idx, setIdx] = useState(null);

  const [nameDel, setNameDel] = useState("");

  const handleClickOpenDelMod = (id, name) => {
    setOpenDel(true);
    setIdx(id);
    setNameDel(name);
  };

  const handleCloseDelMod = () => {
    setOpenDel(false);
    setIdx(null);
    setNameDel("");
  };

  // delete data
  function handleDel() {
    delData(idx);
    handleCloseDelMod();
  }
  function handleCheckBox(id, checked) {
    patchData(id, { status: !checked });
  }

  // add modal
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    postData({ id: Date.now().toString(), ...formJson, status: false });

    handleCloseAdd();
  };

  // edit modal
  const [openEdit, setOpenEdit] = React.useState(false);

  const [nameEdit, setNameEdit] = useState("");
  const [ageEdit, setAgeEdit] = useState(null);
  const [cityEdit, setCityEdit] = useState("");
  const [jobEdit, setJobEdit] = useState("");

  const handleClickOpenEdit = (e) => {
    setOpenEdit(true);

    setIdx(e.id);
    setNameEdit(e.name);
    setAgeEdit(e.age);
    setCityEdit(e.city);
    setJobEdit(e.job);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);

    setIdx(null);
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    postData({ id: Date.now().toString(), ...formJson, status: false });

    handleCloseEdit();
  };

  // info

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const [openInfo, setOpenInfo] = React.useState(false);
  const [objInfo, setObjInfo] = useState(null);

  const handleClickOpenInfo = (e) => {
    setOpenInfo(true);
    setObjInfo(e);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
    setObjInfo(null);
  };

  return (
    <div>
      <div className="header border-b border-b-[#ccc] shadow-[2px_2px_5px_#ccc]">
        <div className="max-w-[1440px] m-[0_auto] flex items-center justify-between p-[10px_15px]">
          <TextField
            id="outlined-basicd"
            label="Name"
            size="small"
            value={inpS}
            onChange={handleInpS}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
          />
          <div className="flex items-center gap-2">
            <IconButton onClick={handleClickOpenAdd}>
              <AddCircleOutlineOutlinedIcon sx={{ color: "blue" }} />
            </IconButton>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">status</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={statusFlt}
                label="Status"
                onChange={handleStatus}
              >
                <MenuItem value={""}>All</MenuItem>
                <MenuItem value={true}>Active</MenuItem>
                <MenuItem value={false}>Inactive</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="container flex justify-center max-w-[1440px] m-[20px_auto_0] p-[10px_15px]">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{ background: "blue" }}>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">City</StyledTableCell>
                <StyledTableCell align="right">Job</StyledTableCell>
                <StyledTableCell align="right">Age</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Option</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((elem) => (
                <StyledTableRow key={elem.id}>
                  <StyledTableCell component="th" scope="row">
                    {elem.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{elem.city}</StyledTableCell>
                  <StyledTableCell align="right">{elem.job}</StyledTableCell>
                  <StyledTableCell align="right">{elem.age}</StyledTableCell>
                  <StyledTableCell align="right">
                    <span
                      className={`${elem.status ? "bg-blue-500" : "bg-red-500"} p-2 font-[600] text-[#fff] text-[13px] rounded-[10px]`}
                    >
                      {elem.status ? "ACTIVE" : "INACTIVE"}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton
                      onClick={() => handleClickOpenDelMod(elem.id, elem.name)}
                    >
                      <DeleteIcon sx={{ color: "red" }} />
                    </IconButton>
                    <IconButton onClick={() => handleClickOpenEdit(elem)}>
                      <EditIcon sx={{ color: "green" }} />
                    </IconButton>
                    <IconButton onClick={() => handleClickOpenInfo(elem)}>
                      <InfoOutlineIcon />
                    </IconButton>

                    <Checkbox
                      checked={elem.status}
                      onClick={() => handleCheckBox(elem.id, elem.status)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* delete modal */}
      <Dialog
        open={openDel}
        onClose={handleCloseDelMod}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Вы дейсвительно хотите удалить пользователя "${nameDel}"?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            После удаления вы не можете востановить удалёный объект
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelMod} variant="outlined">
            отмена
          </Button>
          <Button
            onClick={handleDel}
            variant="contained"
            sx={{ bgcolor: "red" }}
            autoFocus
          >
            Удалить
          </Button>
        </DialogActions>
      </Dialog>

      {/* add modal */}
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Добавить</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Пожалоста пополните все строки. Если даже один из строк будет
            упушено, то оно не добавится!
          </DialogContentText>
          <form onSubmit={handleSubmitAdd} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Имя"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="job"
              name="job"
              label="Работа"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="city"
              name="city"
              label="Город"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="age"
              name="age"
              label="Возраст"
              type="number"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd}>отмена</Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "blue" }}
            form="subscription-form"
          >
            Добавить
          </Button>
        </DialogActions>
      </Dialog>

      {/* edit Modal */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Изменить</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Пожалоста пополните все строки. Если даже один из строк будет
            упушено, то оно не изменится!
          </DialogContentText>
          <form onSubmit={handleSubmitEdit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Имя"
              type="text"
              fullWidth
              variant="standard"
              value={nameEdit}
              onChange={(e) => setNameEdit(e.target.value)}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="job"
              name="job"
              label="Работа"
              type="text"
              fullWidth
              variant="standard"
              value={jobEdit}
              onChange={(e) => setJobEdit(e.target.value)}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="city"
              name="city"
              label="Город"
              type="text"
              fullWidth
              variant="standard"
              value={cityEdit}
              onChange={(e) => setCityEdit(e.target.value)}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="age"
              name="age"
              label="Возраст"
              type="number"
              fullWidth
              variant="standard"
              value={ageEdit}
              onChange={(e) => setAgeEdit(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>отмена</Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "green" }}
            form="subscription-form"
          >
            Изменить
          </Button>
        </DialogActions>
      </Dialog>

      {/* info modal */}
      <BootstrapDialog
        onClose={handleCloseInfo}
        aria-labelledby="customized-dialog-title"
        open={openInfo}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Информатсия
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseInfo}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography sx={{ minWidth: "500px" }} gutterBottom>
            id: {objInfo?.id}
          </Typography>
          <Typography sx={{ minWidth: "500px" }} gutterBottom>
            Name: {objInfo?.name}
          </Typography>
          <Typography sx={{ minWidth: "500px" }} gutterBottom>
            city: {objInfo?.city}
          </Typography>
          <Typography sx={{ minWidth: "500px" }} gutterBottom>
            age: {objInfo?.age}
          </Typography>
          <Typography sx={{ minWidth: "500px" }} gutterBottom>
            job: {objInfo?.job}
          </Typography>
          <Typography sx={{ minWidth: "500px" }} gutterBottom>
            status: {objInfo?.status ? "Active" : "Inactive"}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            sx={{ bgcolor: "red" }}
            variant="contained"
            onClick={handleCloseInfo}
          >
            Закрыть
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default App;
