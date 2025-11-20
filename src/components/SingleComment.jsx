import React from "react";

const SingleComment = ({ comment, refreshComments }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + comment._id,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMjRkNDIzZTc0MDAwMTVmN2ZkZTIiLCJpYXQiOjE3NjM2NDg3MjQsImV4cCI6MTc2NDg1ODMyNH0.35HD2YDxOW-7lU-r_QHqaj73F5P7rNW6ELB-llZrPwU",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) throw new Error("Errore nella cancellazione commento");
      refreshComments();
    } catch (error) {
      alert("Impossibile cancellare il commento.");
    }
  };

  return (
    <li className="single-comment d-flex justify-content-between align-items-center mb-2">
      <span>
        <strong>{comment.rate}</strong> — {comment.comment}
      </span>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default SingleComment;
