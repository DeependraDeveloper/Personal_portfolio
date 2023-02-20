import React,{useState} from "react"; 
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ContactsIcon from "@mui/icons-material/Contacts";
import { data } from "../../data/data";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        onClick={handleOpen}
        startIcon={<ContactsIcon />}
      >
        Contact Deependra (Dp)
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          You contact me below:
          <Typography variant="h6" component="h2">
            Email:{" "}
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </Typography>
          <Typography variant="h6" component="h2">
            Phone:{" "}
            <a href={`tel:+${data.phone}`}>{data.phone}</a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}