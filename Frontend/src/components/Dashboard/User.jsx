import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { setBookData } from "../../redux/App/actions";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserCard from "./UserCard";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: 180,
    height:50,
    textAlign: "left",
  },
  func:{
    display : "flex",
    flexDirection : "row",
    margin : "20px 0px 0px 40px"
  },
  pagination : {
    margin : "0px 0px 0px 30px",
    textAlign : "center"
  },
  button : {
    padding : 15,
    borderRadius : 10,
    border : "none"
  }
}));

export default function User() {
  const classes = useStyles();
  const history = useHistory();
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("null");

  const bookData = useSelector((state) => state.app.bookData) || [];
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(4);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/api/getBooks",
    })
      .then((res) => dispatch(setBookData(res.data)))
      .catch((error) => console.log(error));
  }, [dispatch]);


  const handleClick = (_id) => {
    history.push(`/chapters/${_id}`);
  };

  const handleChange = (e) => {
    const type = e.target.value;
    setType(type);
  };

  const handleSort = (e) => {
    const sort = e.target.value;
    setSort(sort);
  };

  const handleSelectPage = (event) => {
    setCurrentPage(Number(event.target.id));
  }

  const renderBooksdataMap = (bookData) => {
    return bookData.map((item, id) => (
      <div key={id}>
        <UserCard data={item} handleClick={handleClick}/>
      </div>
    ))
  }

  const renderPaginatedBookData = (bookData) => {
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = bookData.slice(indexOfFirstBook, indexOfLastBook);
    return renderBooksdataMap(currentBooks);
  }

  const renderBooksdata = (bookData) => {
    const filteredAndSortedBookData = bookData.filter((item) => {
      if (type === "all") {
        return true;
      }
      return type === item.category;
    }).sort((a, b) => {
      if (sort === "none") {
        return 0;
      }
      if (sort === "asc") {
        return a.year - b.year;
      } else if (sort === "desc") {
        return b.year - a.year;
      }
    })
    return renderPaginatedBookData(filteredAndSortedBookData);
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(bookData.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <button key={number} id={number} onClick={handleSelectPage} className = {classes.button}>
        {number}
      </button>
    );
  });

  return (
    <>
     <div>
        <div className = {classes.func}>
          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Filter By Type</InputLabel>
              <Select onChange={handleChange} label="Filter by Type">
                <MenuItem value="all"> All</MenuItem>
                <MenuItem value="Ethics">Ethics</MenuItem>
                <MenuItem value="Comedy">Comedy</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Sort by Year</InputLabel>
              <Select onChange={handleSort} label="Sort by category">
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="asc">Low to High</MenuItem>
                <MenuItem value="desc">High to Low</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <br/>

        <div style = {{display : "flex", flexWrap : "wrap"}}>
          {bookData && renderBooksdata(bookData)}
        </div>
        <br/>
        <div className = {classes.pagination}>
          {renderPageNumbers}
        </div>
      </div>
    </>
  );
}
