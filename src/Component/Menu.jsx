import React, { Component, createRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";

import { IconButton } from "@mui/material";
import { InfoOutline } from "@mui/icons-material";

class MenuBtn extends Component {
  constructor({ props }) {
    super(props);

    this.state = {
      open: false,
    };

    this.anchorRef = createRef();
    this.prevOpen = this.state.open;
  }

  handleToggle = () => {
    this.setState((prev) => ({
      open: !prev.open,
    }));
  };

  handleClose = (event) => {
    if (
      this.anchorRef.current &&
      this.anchorRef.current.contains(event.target)
    ) {
      return;
    }

    this.setState({ open: false });
  };

  handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      this.setState({ open: false });
    } else if (event.key === "Escape") {
      this.setState({ open: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.open === true && this.state.open === false) {
      this.anchorRef.current.focus();
    }
  }

  render() {
    const { open } = this.state;

    const { btnDel, btnCheck, btnEdit, btnInfo } = this.props;

    return (
      <Stack direction="row" spacing={2}>
        <div>
          <IconButton
            ref={this.anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <MoreHorizIcon />
          </IconButton>

          <Popper
            open={open}
            anchorEl={this.anchorRef.current}
            placement="bottom-start"
            transition
            disablePortal
            className="z-20"
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={this.handleListKeyDown}
                    >
                      <MenuItem onClick={btnDel} sx={{ color: "red" }}>
                        <DeleteIcon />
                      </MenuItem>
                      <MenuItem onClick={btnInfo}>
                        <InfoOutline />
                      </MenuItem>
                      <MenuItem
                        onClick={(e) => {
                          btnCheck();
                          this.handleClose(e);
                        }}
                        sx={{ color: "green" }}
                      >
                        <CheckCircleIcon />
                      </MenuItem>
                      <MenuItem
                        onClick={(e) => {
                          btnEdit();
                          this.handleClose(e);
                        }}
                        sx={{ color: "blue" }}
                      >
                        <EditIcon />
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    );
  }
}

export default MenuBtn;
