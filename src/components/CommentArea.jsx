import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  };

  fetchComments = async () => {
    this.setState({ isLoading: true, isError: false });
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMjRkNDIzZTc0MDAwMTVmN2ZkZTIiLCJpYXQiOjE3NjM2NDg3MjQsImV4cCI6MTc2NDg1ODMyNH0.35HD2YDxOW-7lU-r_QHqaj73F5P7rNW6ELB-llZrPwU",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) throw new Error("Errore nel recupero commenti");
      const data = await response.json();
      this.setState({ comments: data, isLoading: false });
    } catch (error) {
      this.setState({ isError: true, isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  render() {
    const { comments, isLoading, isError } = this.state;
    return (
      <div className="comment-area mt-3">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={this.props.asin} onCommentAdded={this.fetchComments} />
        <CommentsList comments={comments} refreshComments={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;
