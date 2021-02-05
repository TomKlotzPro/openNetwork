const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
    avatar: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

commentSchema.add({ replies: [commentSchema] });

module.exports.commentSchema = commentSchema;
