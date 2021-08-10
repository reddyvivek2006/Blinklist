import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addBook } from "./store/action";

function Add_Form(props) {
  const [book, setbook] = useState({
    img_src: "img1.png",
    time_left: "60 min left",
    persons_read: "16k",
    book_name: "",
    author: "",
  });

  const handleClose = () => {
    onClose(selectedValue);
  };

  const aboutBook = (event) => {
    setbook({ ...book, [event.target.name]: event.target.value });
  };
  const dispatch = useDispatch();
  const { onClose, selectedValue } = props;
  return (
    <Grid>
      <Grid conatiner>
        IMAGE_SOURCE : <input type="text"></input>
      </Grid>
      <br></br>
      <Grid container>
        NAME OF THE BOOK:
        <input type="text" name="book_name" onChange={aboutBook}></input>
      </Grid>
      <br></br>

      <Grid container>
        AUTHOR:
        <input type="text" name="author" onChange={aboutBook}></input>
      </Grid>
      <br></br>

      <Grid container>
        <input
          type="submit"
          onClick={() => dispatch(addBook(book)) && { handleClose }}
        ></input>
        <br></br>
      </Grid>
    </Grid>
  );
}

export default Add_Form;
