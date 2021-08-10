import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import Add_Form from "./Add_Form";

const styles = {
  dialog: {
    width: "150vh",
  },
  button: {
    marginLeft: "2%",
    marginTop: "2%",
    marginBottom: "2%",
    marginRight: "2%",
  },
};

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      style={styles.dialog}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">BOOK DETAILS</DialogTitle>
      <DialogContent>
        <Add_Form />
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AddButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
        style={styles.button}
      >
        ADD BOOK
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
