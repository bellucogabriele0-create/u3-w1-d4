import React, { Component } from "react";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate.toString(),
      elementId: this.props.asin,
    };

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMjRkNDIzZTc0MDAwMTVmN2ZkZTIiLCJpYXQiOjE3NjM2NDg3MjQsImV4cCI6MTc2NDg1ODMyNH0.35HD2YDxOW-7lU-r_QHqaj73F5P7rNW6ELB-llZrPwU",
          },
          body: JSON.stringify(newComment),
        }
      );
      if (!response.ok) throw new Error("Errore nell’invio del commento");
      this.setState({ comment: "", rate: "1" });
      this.props.onCommentAdded(); // ricarica lista commenti
    } catch (error) {
      alert("Impossibile inviare commento.");
    }
  };

  render() {
    return (
      <form className="add-comment-form mb-3" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment">Commento</label>
          <input
            type="text"
            id="comment"
            name="comment"
            className="form-control"
            value={this.state.comment}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="rate">Voto</label>
          <select
            id="rate"
            name="rate"
            className="form-control"
            value={this.state.rate}
            onChange={this.handleChange}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Invia Commento
        </button>
      </form>
    );
  }
}

export default AddComment;
