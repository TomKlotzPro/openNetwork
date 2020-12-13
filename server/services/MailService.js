const nodemailer = require("nodemailer");
const keys = require("../keys/index");

/**
 * Send a confirmation email to a user using nodemailer
 * @param {User} user
 * @param {JSONWebToken} token
 */
exports.sendConfirmationEmail = function(user, token) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAILSERVICE_MAIL,
      pass: process.env.MAILSERVICE_PASS
    }
  });
  let mailOptions = {
    from: "openetwork.mail@gmail.com",
    to: `${user.email}`,
    subject: "Confirmation email",
    html: `
        <table
  style="
    background-color: #ffffff;
    padding-top: 20px;
    color: #3a416f;
    width: 100%;
    border: 0;
    text-align: center;
    border-collapse: collapse;
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  "
>
  <tbody>
    <tr>
      <td style="vertical-align: top; padding: 0">
        <center>
          <table
            style="
              border: 0;
              border-collapse: collapse;
              margin: 0 auto;
              background: white;
              border-radius: 8px;
              margin-bottom: 16px;
              width: 100%;
            "
          >
            <tbody>
              <tr>
                <td
                  style="
                    width: 546px;
                    vertical-align: top;
                    padding-top: 32px;
                    font-size: 17px;
                    line-height: 24px;
                  "
                >
                  <div style="max-width: 600px; margin: 0 auto">
                    <img
                      width="30%"
                      style="
                        margin-top: 0;
                        margin-right: 0;
                        margin-bottom: 32px;
                        margin-left: 0px;
                        padding-right: 30px;
                        padding-left: 30px;
                        border: none;
                        max-width: 100%;
                      "
                      src="https://opntwk-project-images.s3-eu-west-1.amazonaws.com/logos/opentwk.png"
                      alt=""
                      class="CToWUd"
                    />
                    <h1
                      style="
                        font-size: 30px;
                        padding-right: 30px;
                        padding-left: 30px;
                        line-height: 36px;
                        font-weight: 900;
                        letter-spacing: -0.75px;
                        text-align: left;
                        color: #3a416f;
                        margin: 0;
                        margin-bottom: 12px;
                      "
                    >
                      Confirm your email address
                    </h1>
                    <p
                      style="
                        font-size: 17px;
                        padding-right: 30px;
                        padding-left: 30px;
                        line-height: 24px;
                        font-weight: normal;
                        margin: 0;
                        color: #3a416f;
                        margin-bottom: 15px;
                        padding-bottom: 2px;
                        font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                      "
                    >
                      Your confirmation link is below — just click on it and you will be redirected.
                    </p>
                    <div
                      style="
                        padding-right: 30px;
                        padding-left: 30px;
                        margin: 32px 0 40px;
                        font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                      "
                    >
                      <table
                        style="
                          border-collapse: collapse;
                          border: 0;
                          background-color: #cacfff;
                          height: 70px;
                          table-layout: fixed;
                          word-wrap: break-word;
                          border-radius: 6px;
                          width: 100%;
                          font-family: 'Lato', 'Helvetica Neue', Helvetica,
                            Arial, sans-serif;
                        "
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                text-align: center;
                                vertical-align: middle;
                                font-size: 30px;
                                font-family: 'Lato', 'Helvetica Neue', Helvetica,
                                  Arial, sans-serif;
                                line-height: 24px;
                              "
                            >
                            <a
                                  href="${process.env.BASE_URL ||'http://localhost:3000'}/confirm?token=${token}"
                                  style="
                                  text-decoration: none;color: #5468ff; text-transform: uppercase;
                                  "
                                  target="_blank"
                                  >ON-${token.slice(0,3)}</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </td>
    </tr>
  </tbody>
</table>`
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error occured when sending a mail : " + err);
    } else console.log("Email sent");
  });
};

exports.sendResetPassword = function(user, token) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: keys.MAILSERVICE_MAIL,
      pass: keys.MAILSERVICE_PASS
    }
  });

  let mailOptions = {
    from: "openetwork.mail@gmail.com",
    to: `${user.email}`,
    subject: "Reset password",
    html: `

    <table
  style="
    background-color: #ffffff;
    padding-top: 20px;
    color: #3a416f;
    width: 100%;
    border: 0;
    text-align: center;
    border-collapse: collapse;
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  "
>
  <tbody>
    <tr>
      <td
        style="
          vertical-align: top;
          padding: 0;
          font-size: 17px;
          line-height: 24px;
          font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        "
      >
        <center>
          <table
            style="
              border: 0;
              border-collapse: collapse;
              margin: 0 auto;
              background: white;
              border-radius: 8px;
              margin-bottom: 16px;
              width: 100%;
              font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial,
                sans-serif;
            "
          >
            <tbody>
              <tr>
                <td
                  style="
                    width: 546px;
                    vertical-align: top;
                    padding-top: 32px;
                    font-size: 17px;
                    line-height: 24px;
                    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial,
                      sans-serif;
                  "
                >
                  <div
                    style="
                      max-width: 600px;
                      margin: 0 auto;
                      font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial,
                        sans-serif;
                    "
                  >
                    <img
                      style="
                        width: 38px;
                        height: 38px;
                        margin: 0 0 15px 0;
                        padding-right: 30px;
                        padding-left: 30px;
                        border: none;
                        max-width: 100%;
                      "
                      src="https://opntwk-project-images.s3-eu-west-1.amazonaws.com/logos/opentwk_logo.png"
                      alt=""
                      width="auto"
                      height="auto"
                      class="CToWUd"
                    />
                    <h1
                      style="
                        font-size: 30px;
                        padding-right: 30px;
                        padding-left: 30px;
                        line-height: 36px;
                        font-weight: 900;
                        letter-spacing: -0.75px;
                        text-align: left;
                        margin: 0;
                        margin-bottom: 12px;
                        color: #3a416f;
                      "
                    >
                      Reset your password
                    </h1>
                    <p
                      style="
                        font-size: 17px;
                        padding-right: 30px;
                        padding-left: 30px;
                        line-height: 24px;
                        font-weight: normal;
                        margin: 0;
                        margin-bottom: 15px;
                        padding-bottom: 2px;
                        font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                      "
                    >
                      You told us you forgot your password. If you really did,
                      click here to choose a new one:
                    </p>
                    <div
                      style="
                        padding-right: 30px;
                        padding-left: 30px;
                        margin-bottom: 20px;
                        font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial,
                          sans-serif;
                        font-size: 17px;
                        line-height: 24px;
                      "
                    >
                      <table
                        style="
                          width: 100%;
                          border-collapse: collapse;
                          font-family: 'Lato', 'Helvetica Neue', Helvetica,
                            Arial, sans-serif;
                        "
                      >
                        <tbody>
                          <tr
                            style="
                              width: 100%;
                              border-collapse: collapse;
                              font-family: 'Lato', 'Helvetica Neue', Helvetica,
                                Arial, sans-serif;
                            "
                          >
                            <td
                              style="
                                width: 100%;
                                font-family: 'Lato', 'Helvetica Neue', Helvetica,
                                  Arial, sans-serif;
                                font-size: 17px;
                                line-height: 24px;
                                vertical-align: top;
                              "
                            >
                              <span
                                style="
                                  display: inline-block;
                                  border-radius: 4px;
                                  background-color: #5468ff;
                                  font-size: 17px;
                                  line-height: 24px;
                                  font-family: 'Lato', 'Helvetica Neue',
                                    Helvetica, Arial, sans-serif;
                                "
                                ><a
                                  href="${process.env.BASE_URL ||
                                    "http://localhost:3000"}/reset?token=${token}"
                                  style="
                                    min-width: 196px;
                                    border-top: 13px solid;
                                    border-bottom: 13px solid;
                                    border-right: 24px solid;
                                    border-left: 24px solid;
                                    border-color: #5468ff;
                                    border-radius: 4px;
                                    background-color: #5468ff;
                                    color: #ffffff;
                                    font-size: 18px;
                                    line-height: 18px;
                                    word-break: break-word;
                                    display: inline-block;
                                    text-align: center;
                                    font-weight: 900;
                                    text-decoration: none !important;
                                  "
                                  target="_blank"
                                  >Choose a New Password</a
                                ></span
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </td>
    </tr>
  </tbody>
</table>`
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error occured when sending a mail : " + err);
    } else console.log("Email sent");
  });
};
