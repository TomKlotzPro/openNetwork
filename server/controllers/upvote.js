import Upvote from "../models/upvote";

export const createUpvote = (req, res) => {
  const upvoteData = req.body;
  const user = req.user;
  const upvote = new Upvote(upvoteData);
  upvote.author = user;

  upvote.save((errors, createdUpvote) => {
    if (errors) {
      return res.status(422).send(errors);
    }

    return res.json(createdUpvote);
  });
};
