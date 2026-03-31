import axios from "axios";
import { Component, use } from "react";
import { Link, useParams } from "react-router";

import AddIcon from "@mui/icons-material/Add";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

function withRouter(Component) {
  return function WrappedComponent(props) {
    const params = useParams();

    return <Component {...props} params={params} />;
  };
}
class InfoId extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      idxP: props.params.id,
      openAdd: false,
    };

    this.api = "http://37.27.29.18:8001";
  }

  async getById() {
    try {
      const { data } = await axios.get(
        `${this.api}/api/to-dos/${this.state.idxP}`,
      );

      this.setState({ user: data.data });
    } catch (error) {
      console.error(console.error(error));
    }
  }

  async postImgData(obj) {
    try {
      await axios.post(`${this.api}/api/to-dos/${this.state.idxP}/images`, obj);
      this.getById();
    } catch (error) {
      console.error(error);
    }
  }

  async delImgData(id) {
    try {
      await axios.delete(`${this.api}/api/to-dos/images/${id}`);
      this.getById();
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getById(this.state.idxP);
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

    this.postImgData(formData);
    this.handleCloseAdd();
  };

  handleDel(id) {
    this.delImgData(id);
  }

  render() {
    const userData = this.state.user;

    return (
      <div>
        <div className="breacCrump">
          <Link to={"/"} className="font-[500] text-gray-500">
            Home
          </Link>
          <span className="font-[500]"> / </span>
          <span className="font-[500]">Info Page</span>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper max-w-full"
        >
          {userData?.images.map((img) => {
            return (
              <SwiperSlide className="">
                <div className="flex justify-center">
                  <img
                    className="w-[250px]"
                    key={img.id}
                    src={`${this.api}/images/${img?.imageName}`}
                  />
                </div>
                <div className="flex justify-center py-4">
                  <Button
                    onClick={() => this.handleDel(img.id)}
                    sx={{ color: "red" }}
                    variant="outlined"
                  >
                    Delete
                  </Button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div>
          <div className="py-2 flex items-center" onClick={this.handleAddBtn}>
            <Button onClick={this.handleClickOpenAdd} variant="outlined">
              <AddIcon sx={{ color: "blue" }} /> Add
            </Button>
          </div>
          <div>Id:{userData?.id}</div>
          <div>Name:{userData?.name}</div>
          <div>Description:{userData?.description}</div>
          <div>Status:{userData?.isCompleted ? "COMPLETE" : "INCOMPLETE"}</div>

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
        </div>
      </div>
    );
  }
}

export default withRouter(InfoId);
