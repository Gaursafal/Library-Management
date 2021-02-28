import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css"
import { Button, Typography } from '@material-ui/core';

const Navbar = () => {
	return (
		<div>
			<div className = {styles.Navbar}>
			<Typography variant = "h5" color = "inherit">Library Management</Typography>
			<Button color = "inherit" component={Link} to="/" style = {{margin : "0px 40px 0px 40px"}}>
				Guest
			</Button>
			<Button color = "inherit" component={Link} to="/admin">
				Author
			</Button>
            <div style = {{marginLeft : "700px"}}>
			  <input style = {{padding : "8px"}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>
			<div>
				<Button variant = "outlined" color = "inherit">Logout</Button>
			</div>
			</div>
		</div>
	);
};

export default Navbar;
