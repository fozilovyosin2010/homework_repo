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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

class Home extends Component {
  // place of variables
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.api = "http://37.27.29.18:8001";
  }

  componentDidMount() {
    this.getData();
  }

  // getData
  async getData() {
    try {
      const { data } = await axios.get(`${this.api}/api/to-dos`);
      console.log(data.data);
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

  handleBtnDel(id) {
    this.delData(id);
  }

  render() {
    return (
      <div className="p-4">
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
                      <MenuBtn btnDel={() => this.handleBtnDel(elem.id)} />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Home;
