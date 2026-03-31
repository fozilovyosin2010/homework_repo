import { Component } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import MenuBtn from "../Component/Menu";

import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router";

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

// for useNavigate()
function withRouter(Component) {
  return function Wrapped(props) {
    const navigate = useNavigate();

    return <Component {...props} navigate={navigate} />;
  };
}
class Home extends Component {
  // place of variables
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      openAdd: false,

      openEdit: false,
      idxEdit: null,
      nameEdit: "",
      desEdit: "",
    };

    this.api = "http://37.27.29.18:8001";
  }

  // it is like useEffect
  componentDidMount() {
    this.getData();
  }

  // getData
  async getData() {
    try {
      const { data } = await axios.get(`${this.api}/api/to-dos`);
      this.setState({ users: data.data });
    } catch (error) {
      console.error(error);
    }
  }

  async delData(id) {
    try {
      await axios.delete(`${this.api}/api/to-dos?id=${id}`);
      this.getData();
    } catch (error) {
      console.error(error);
    }
  }

  async checkData(id) {
    try {
      await axios.put(`${this.api}/completed?id=${id}`);
      this.getData();
    } catch (error) {
      console.error(error);
    }
  }

  async postData(obj) {
    try {
      await axios.post(`${this.api}/api/to-dos`, obj);
      this.getData();
    } catch (error) {
      console.error(error);
    }
  }

  async putData(obj) {
    try {
      await axios.put(`${this.api}/api/to-dos`, obj);
      this.getData();
    } catch (error) {
      console.error(error);
    }
  }

  handleBtnDel(id) {
    this.delData(id);
  }

  handleCheckBtn(id) {
    this.checkData(id);
  }

  handleClickOpenAdd = () => {
    this.setState({ openAdd: true });
  };

  handleCloseAdd = () => {
    this.setState({ openAdd: false });
  };

  handleSubmitAdd = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("Images", event.target["image"].files[0]);
    formData.append("Name", event.target["name"].value.trim());
    formData.append("Description", event.target["des"].value.trim());

    this.postData(formData);
    this.handleCloseAdd();
  };

  ///// edit

  handleClickOpenEdit = (obj) => {
    this.setState({
      openEdit: true,

      idxEdit: obj.id,
      nameEdit: obj.name,
      desEdit: obj.description,
    });
  };

  handleCloseEdit = () => {
    this.setState({ openEdit: false });
    this.setState({ nameEdit: "", desEdit: "", idxEdit: null });
  };

  handleSubmitEdit = (event) => {
    event.preventDefault();

    const obj = {
      id: this.state.idxEdit,
      name: this.state.nameEdit.trim(),
      description: this.state.desEdit.trim(),
    };

    this.putData(obj);
    this.handleCloseEdit();
  };

  ////

  handleInfoBtn(id) {
    this.props.navigate(`/info/${id}`);
  }
  render() {
    return (
      <div className="p-4">
        <div className="py-2">
          <Button onClick={this.handleClickOpenAdd} variant="outlined">
            <AddIcon sx={{ color: "blue" }} /> Add
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Image</StyledTableCell>
                <StyledTableCell align="right">Options</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map((elem) => (
                <StyledTableRow key={elem.id}>
                  <StyledTableCell component="th" scope="row">
                    {elem.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {elem.description}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <span
                      className={`${elem.isCompleted ? "bg-blue-500" : "bg-red-500"} p-2 text-[14px] text-[#fff] font-[600] rounded-[10px]`}
                    >
                      {elem.isCompleted ? "COMPLETE" : "INCOMPLETE"}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div className="flex justify-end">
                      <img
                        className="w-[100px]"
                        src={`${this.api}/images/${elem.images[0]?.imageName}`}
                      />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div className="flex justify-end">
                      <MenuBtn
                        btnEdit={() => this.handleClickOpenEdit(elem)}
                        btnDel={() => this.handleBtnDel(elem.id)}
                        btnCheck={() => this.handleCheckBtn(elem.id)}
                        btnInfo={() => this.handleInfoBtn(elem.id)}
                      />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* add modal */}
        <Dialog open={this.state.openAdd} onClose={this.handleCloseAdd}>
          <DialogTitle>Add modal</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <form onSubmit={this.handleSubmitAdd} id="subscription-form">
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
                id="des"
                name="des"
                label="Description"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="image"
                name="image"
                label="Image"
                type="file"
                fullWidth
                variant="standard"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseAdd}>Cancel</Button>
            <Button type="submit" form="subscription-form">
              Add
            </Button>
          </DialogActions>
        </Dialog>
        {/* edit modal */}
        <Dialog open={this.state.openEdit} onClose={this.handleCloseEdit}>
          <DialogTitle>Edit modal</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <form onSubmit={this.handleSubmitEdit} id="subscription-form">
              <TextField
                value={this.state.nameEdit}
                onChange={(e) => this.setState({ nameEdit: e.target.value })}
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
                value={this.state.desEdit}
                onChange={(e) => this.setState({ desEdit: e.target.value })}
                autoFocus
                required
                margin="dense"
                id="des"
                name="des"
                label="Description"
                type="text"
                fullWidth
                variant="standard"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseEdit}>Cancel</Button>
            <Button type="submit" form="subscription-form">
              Edit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(Home);
