import Upvote from "../models/upvote";

export const createUpvote = (req, res) => {
  const user = req.user.id;
  const upvote = new Upvote();
  upvote.author = user;

  upvote.save((errors, createdUpvote) => {
    if (errors) {
      return res.status(422).send(errors);
    }

    return res.json(createdUpvote);
  });
};
