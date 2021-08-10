import React from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import { AccessTime } from "@material-ui/icons";
import { Grid, CardActions, Button, CardMedia } from "@material-ui/core";
import { moveBook } from "./store/action";
import { useDispatch } from "react-redux";
import "./bookcard.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const BookCard1 = (props) => {
  const dispatch = useDispatch();
  return (
    // <Grid container alignItems="center">
    // <Grid item>
    <Card className="root" style={{ paddingBottom: "20px" }}>
      <Grid container direction="column">
        <Grid item xs>
          <CardMedia
            style={{ height: "284px" }}
            image={props.book.img_src}
            title="Contemplative Reptile"
          />
        </Grid>

        <Grid item>
          <p className="title">{props.book.book_name}</p>
        </Grid>
        <Grid item>
          <p className="author">{props.book.author}</p>
        </Grid>
        <Grid item>
          <IconButton>
            <AccessTime />
          </IconButton>
          <span className="read">{props.book.time_left}</span>
        </Grid>
        <Grid item>
          <CardActions>
            {!props.disable && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => dispatch(moveBook(props.book))}
              >
                Finish
              </Button>
            )}
            <MoreHorizIcon />
          </CardActions>
        </Grid>
      </Grid>
    </Card>
    // </Grid>
    // </Grid>
  );
};

export default BookCard1;
