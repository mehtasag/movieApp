import React from "react";
import {
  Menu,
  Divider,
  Tooltip,
  ListItemIcon,
  MenuItem,
  Avatar,
  IconButton,
} from "@mui/material";
import userLogo from "./user.png";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
function Dropdown() {
  // Code For MUI

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //
  return (
    <div>
      <React.Fragment>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <img style={{ width: "38px", height: "38px" }} src={userLogo} />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorEl}
          open={open}
          style={
            open
              ? { opacity: "0.7", backgroundColor: "black", fontWeight: "bold" }
              : {}
          }
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>
            <Link to="/stripe">Account & Settings</Link>
          </MenuItem>
          <Divider />
          <MenuItem>Your Watchlist</MenuItem>

          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    </div>
  );
}
export default Dropdown;
