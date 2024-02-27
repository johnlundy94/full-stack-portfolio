import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../Projects/Projects.css";

const BasicMenu = ({ github, website }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-container">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Links
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClose}
          component="a"
          href={website}
          target="_blank"
        >
          Website
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component="a"
          href={github}
          target="_blank"
        >
          GitHub
        </MenuItem>
      </Menu>
    </div>
  );
};

const Cards = ({ title, description, imageSrc, github, website }) => {
  return (
    <div className="project-card">
      <div className="menu-container">
        <BasicMenu github={github} website={website} />
      </div>
      <img src={imageSrc} alt={title} className="project-image" />
      <div className="project-description">
        <h1>{title}</h1>
        <p className="project-text">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
