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
import { Button, IconButton, setRef } from "@mui/material";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CardProf from "./Component/Card";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

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
  const getIdData = async (id) => {
    try {
      const { data } = await axios.get(`${api}/api/to-dos/${id}`);
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

  const delImgData = async (id) => {
    try {
      await axios.delete(`${api}/api/to-dos/images/${id}`);
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

  const postImgData = async (id, obj) => {
    try {
      await axios.post(`${api}/api/to-dos/${id}/images`, obj);
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

  // for info modal
  const [openInfo, setOpenInfo] = React.useState(false);

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const [objInfo, setObjInfo] = useState(null);
  function handleBtnInfo(obj) {
    setOpenInfo(true);
    console.log(obj.id);

    setObjInfo(obj);
  }
  // for add img modal
  const [openAddImg, setOpenAddImg] = React.useState(false);
  const [idxAddImg, setIdxAddImg] = React.useState(null);

  const handleCloseAddImg = () => {
    setOpenAddImg(false);
    setIdxAddImg(null);
  };

  function handleClickAddbtn(id) {
    setOpenAddImg(true);

    setIdxAddImg(id);
  }
  function handleAddImgSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("Images", e.target["images"].files[0]);
    postImgData(idxAddImg, formData);
    console.log(e.target["images"].files[0]);

    handleCloseAddImg();
  }

  // for del img modal
  const [openDelImg, setOpenDelImg] = React.useState(false);
  const [imgArr, setImgArr] = useState([]);

  function handleCloseDelImg() {
    setOpenDelImg(false);

    setImgArr([]);
  }

  function handleOpenDelImg(imgs) {
    setOpenDelImg(true);

    setImgArr(imgs);
  }
  function handleClickDelImg(id) {
    delImgData(id);

    handleCloseDelImg();
  }

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
                    <span
                      className={`${elem.isCompleted ? "bg-[#5353de]" : "bg-[#ec2a2a]"} text-[#fff] font-[700] rounded-[5px] p-[10px_20px]`}
                    >
                      {elem.isCompleted ? "complete" : "incomplete"}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div className="flex justify-end">
                      <div className="flex items-center w-[150px] gap-3">
                        <Swiper
                          navigation={true}
                          modules={[Navigation]}
                          className="mySwiper"
                        >
                          {elem.images.map((img, imgIdx) => {
                            return (
                              <SwiperSlide>
                                <img
                                  key={imgIdx}
                                  className="w-full "
                                  src={`${apiImages}/${img.imageName}`}
                                />
                              </SwiperSlide>
                            );
                          })}
                        </Swiper>

                        <div className="flex flex-col justify-between bg-[#ffff] p-1">
                          <IconButton
                            onClick={() => handleOpenDelImg(elem.images)}
                            variant="outlined"
                            sx={{ color: "red" }}
                          >
                            <DeleteIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => handleClickAddbtn(elem.id)}
                            variant="outlined"
                            sx={{ color: "blue" }}
                          >
                            <AddIcon />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Menu
                      btnDel={() => handleBtnDel(elem.id)}
                      btnChecked={() => handleBtnChecked(elem.id)}
                      btnEdit={() => handleClickOpenEdit(elem)}
                      btnInfo={() => handleBtnInfo(elem)}
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
      {/* add img modal */}
      <Dialog open={openAddImg} onClose={handleCloseAddImg}>
        <DialogTitle>Add Image Modal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleAddImgSubmit} id="subscription-form">
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
          <Button onClick={handleCloseAddImg}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDelImg}
        onClose={handleCloseDelImg}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Image Modal</DialogTitle>
        <DialogContent>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {imgArr.map((img) => {
              return (
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-between">
                    <img
                      key={img.id}
                      className="w-[300px]"
                      src={`${apiImages}/${img.imageName}`}
                    />
                    <div className="py-3 flex justify-end">
                      <Button
                        onClick={() => handleClickDelImg(img.id)}
                        variant="outlined"
                      >
                        delete
                        <DeleteIcon sx={{ color: "red" }} />
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelImg} autoFocus>
            Close
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
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Edit
          </Button>
        </DialogActions>
      </Dialog>

      {/* info modal */}
      <Dialog
        open={openInfo}
        onClose={handleCloseInfo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Info Modal</DialogTitle>
        <DialogContent>
          <CardProf {...objInfo} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInfo} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
