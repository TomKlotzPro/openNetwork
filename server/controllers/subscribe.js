const asyncHandler = require("express-async-handler");
const axios = require("axios");
const base64 = require("base-64");

exports.subscribeToNewsletter = async (req, res) => {
  //const { email } = req.body;
  const data = {
    members: [
      {
        email_address: req.body.email,
        status: "subscribed"
      }
    ]
  };
  console.log(JSON.stringify(data))
  const creds = `ulrich1723:${process.env.API_KEY_MAILCHIMP}`;
  axios({
    url: `${process.env.MAILCHIMP_SERVER}/lists/${process.env.MAILCHIMP_AUDIENCE_LIST_ID}`,
    method: "post",
    data: JSON.stringify(data),
    headers: {
      Authorization: `Basic ${base64.encode(creds)}`
    }
  })
    .then(response => {
      return res.status(200).json(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};
