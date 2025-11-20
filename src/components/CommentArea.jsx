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
      fetch(
        "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMWQ3NjIzZTc0MDAwMTVmN2ZkZGMiLCJpYXQiOjE3NjM2NDY4MzgsImV4cCI6MTc2NDg1NjQzOH0.YNqfLNeVoAJ1hVHqNR-I99DKFtqGCcO67AqBhii-d-M",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore nel recupero commenti");
      }
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
      <div className="comment-area">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment
          asin={this.props.asin}
          onCommentAdded={this.fetchComments}
        />
        <CommentsList
          comments={comments}
          refreshComments={this.fetchComments}
        />
      </div>
    );
  }
}

export default CommentArea;
