import "./Contact.css";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  FormControl,
  TextField,
} from "@mui/material";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [openDialog, setOpenDialog] = useState(false);

  const validateEmail = (email) => {
    const regEmial =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmial.test(email);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return validateEmail(value) ? "" : "Invalid email format";
      default:
        return value.trim() ? "" : "This field is required";
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = Object.keys(formData).reduce((acc, key) => {
      if (key !== "services") {
        acc[key] = validateField(key, formData[key]);
      }
      return acc;
    }, {});

    setFormErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      console.log("Form has errors");
      return;
    }

    emailjs
      .send(
        "service_afufhpp",
        "template_i404btv",
        {
          to_email: "johnclundyy@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          comment: formData.description,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((error) => {
        console.error("Email sending failed:", error.text);
      });

    setOpenDialog(true);

    setFormData({
      name: "",
      email: "",
      description: "",
    });
  };

  return (
    <div className="contact-container">
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-text"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Submission Successful"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thank you for your interest! I will reach out shortly!
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <h1 className="contact-title">Let's Chat</h1>
      <div className="contact-form">
        <FormControl
          component="form"
          onSubmit={handleSubmit}
          sx={{ m: 4 }}
          margin="normal"
          fullWidth
          className="form-control"
        >
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
            margin="normal"
            fullWidth
            className="text-field"
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            margin="normal"
            fullWidth
          />
          <TextField
            label="What would you like to talk about?"
            variant="outlined"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!formErrors.description}
            helperText={formErrors.description}
            multiline
            rows={4}
            margin="normal"
            fullWidth
            className="description-textfield"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Contact;
