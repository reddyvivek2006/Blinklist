import { ADD_BOOK, MOVE_BOOK } from "./types";

const initalState = {
  finished: [],
  reading: [
    {
      id: 0,
      img_src: "img1.png",
      book_name: "HARRY POTTER SEASON1",
      author: "VIVEK",
      time_left: "15 min to read",
      persons_read: "15.6k read",
    },
    {
      id: 1,
      img_src: "img1.png",
      book_name: "HARRY POTTER SEASON2",
      author: "SAI RAM",
      time_left: "15 min to read",
      persons_read: "15.6k read",
    },
    {
      id: 2,
      img_src: "img1.png",
      book_name: "HARRY POTTER SEASON2",
      author: "PRASHANTH",
      time_left: "15 min to read",
      persons_read: "15.6k read",
    },
  ],
  currentView: null,
  lastId: 2,
};
const booksReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      state.lastId++;
      return {
        ...state,
        reading: [...state.reading, { ...action.book, id: state.lastId }],
      };
    case MOVE_BOOK:
      const temp = state.reading.filter((book) => book.id !== action.book.id);
      return {
        ...state,
        finished: [...state.finished, action.book],
        reading: [...temp],
      };

    default:
      return state;
  }
};

export default booksReducer;
