import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from '../Admin/AdminPage';
import ChaptersPage from '../Chapters/ChaptersPage';
import EditBook from '../Admin/Edit';
import User from '../Dashboard/User';

function Routes() {
	return (
		<div>
			<Route path="/" exact render={(props) => <User {...props} />} />
			<Route path="/chapters/:id" exact render={(props) => <ChaptersPage {...props} />} />
			<Route path="/admin" exact render={(props) => <AdminPage {...props} />} />
			<Route path="/editbook/:id" exact render={(props) => <EditBook {...props} />} />
		</div>
	);
}
export default Routes;
