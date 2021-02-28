import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    Width: 550,
    cursor: "pointer",
    boxShadow: "0 10px 6px -6px #777",
    borderRadius:"10px",
    backgroundColor: "whitesmoke",
    marginRight : "20px"
  },
  img: {
    marginRight: "15px",
    width : "300px",
    height : "300px"
  },
}));

export default function UserCard({ data, handleClick }) {
  const classes = useStyles();
  if (data) {
    var { name, author, category, year, image, _id } = data;
  }

  return (
    <>
        <div className={classes.card} onClick={() => handleClick(_id)}>
          <div>
            <img className={classes.img} alt="image" src={image} />
          </div>
          <br/>
          <div>
          <div><b>Book Name :</b>{name}</div>
          <div><b>Author :</b> {author}</div>
          <div><b>Category :</b>{category}</div>
          <div><b>Year :</b>{year}</div>
          </div>
        </div>
    </>
  );
}
