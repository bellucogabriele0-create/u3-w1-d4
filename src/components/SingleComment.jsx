import React from "react";

const SingleComment = ({ comment, refreshComments }) => {
  const handleDelete = async () => {
    try {
      fetch(
        "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/",
        {
            method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMWQ3NjIzZTc0MDAwMTVmN2ZkZGMiLCJpYXQiOjE3NjM2NDY4MzgsImV4cCI6MTc2NDg1NjQzOH0.YNqfLNeVoAJ1hVHqNR-I99DKFtqGCcO67AqBhii-d-M",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore nella cancellazione commento");
      }
      refreshComments();
    } catch (error) {
      alert("Impossibile cancellare il commento.");
    }
  };

  return (
    <li className="single-comment">
      <span>
        <strong>{comment.rate}★</strong> — {comment.comment}
      </span>
      <button className="btn btn-danger btn-sm ml-2" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default SingleComment;
