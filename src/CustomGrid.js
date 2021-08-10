import React from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./store/action";
import BookCard from "./BookCard";
import { useEffect } from "react";
import img1 from "./img1.png";


function CustomGrid() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.books);
  console.log(state);



  
  return (
    <Grid container>
      {state.reading.map((item) => (
        <BookCard book={item} />
      ))}
    </Grid>
  );
}

export default CustomGrid;
