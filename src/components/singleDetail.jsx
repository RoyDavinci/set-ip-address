import React from "react";
import "./singleDetail.css";

const SingleDetail = ({ title, body }) => {
	return (
		<section>
			<p>{title}</p> <h1>{body}</h1>
		</section>
	);
};

export default SingleDetail;
