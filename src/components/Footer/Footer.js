import { Typography, IconButton, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Button
          href="#experience"
          style={{ textDecoration: "none", padding: 10 }}
        >
          Experience
        </Button>
        <Button
          href="#projects"
          style={{ textDecoration: "none", padding: 10 }}
        >
          Projects
        </Button>
        <Button href="#contact" style={{ textDecoration: "none", padding: 10 }}>
          Contact
        </Button>
      </div>
      <div className="footer-copyright">
        <Typography variant="body2" align="center">
          © 2024 John Lundy. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
