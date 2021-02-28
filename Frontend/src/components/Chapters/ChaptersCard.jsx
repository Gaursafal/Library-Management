import React from 'react';

export default function ChaptersCard({ data }) {
	if (data) {
		var { name, page } = data;
	}

	return (
			<div>
				<div><b>Name :</b>{name}</div>
				<div><b>Page :</b>{page}</div>
			</div>
	);
}
