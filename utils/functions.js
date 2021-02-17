export const recursiveFind = (replies, id) => {
  if (replies) {
    for (let index = 0; index < replies.length; index++) {
      const reply = replies[index];
      if (reply._id === id) {
        return reply;
      }
      const found = recursiveFind(replies[index].replies, id);
      if (found) return found;
    }
  }
};
