import React from "react"
import SingleComment from "./SingleComment"

const CommentsList = ({ comments, refreshComments }) => {
  return (
    <ul className="comments-list">
      {comments.map(c => (
        <SingleComment key={c._id} comment={c} refreshComments={refreshComments} />
      ))}
    </ul>
  )
}

export default CommentsList
