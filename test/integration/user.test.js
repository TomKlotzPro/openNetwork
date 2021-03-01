const supertest = require("supertest");
const app = require("../src/app");
var request = supertest.agent(app);
const User = require("../../server/models/user");

const user = {
  username: "test-user",
  name: "testuser",
  email: "testuser@test.com",
  password: "testpassword",
  passwordConfirmation: "testpassword"
};

const userNoMail = {
  username: "test-user-no-mail",
  name: "testusernomail",
  password: "testpassword",
  passwordConfirmation: "testpassword"
};

const userNoPassword = {
  username: "test-user-no-pw",
  name: "testusernopw",
  email: "testuser@test.com",
};

const userDiffConf = {
  username: "test-user",
  name: "testuser",
  email: "testuser@test.com",
  password: "testpassword",
  passwordConfirmation: "badconfirmation"
};

const loginUser = {
  email: "testuser@test.com",
  password: "testpassword",
};

const loginUserNoMail = {
  password: "testpassword",
};

const loginUserNoPassword = {
  email: "testuser@test.com",
};

const emailUser = {
  email: "testuser@test.com"
};

const wrongEmailUser = {
  email: "wrongtestuser@test.com"
};

const loginUserWrongPassword = {
  email: "testuser@test.com",
  password: "testpasswordwrong",
};

const resetWrongConfirmation = {
  password: "testpassword",
  passwordConfirmation: "testpasswordwrong",
};

describe("UserController", () => {
  let createdUser = null;
  afterAll(async () => {
    User.deleteOne({ _id: createdUser._id }, function (err) {
      if (err) {
        console.log("Error while deleting test user in user integration tests", err);
      }
    });
  });

  it("should be able to create user", async () => {
    const response = await request.post("/users/register").send(user);
    const obj = response.body;
    createdUser = response.body;
    expect(obj._id).toBeDefined();
    expect(obj.name).toBe(user.name);
    expect(obj.username).toBe(user.username);
    expect(obj.email).toBe(user.email);
    expect(response.status).toBe(201);
  });
  it("should not create user when email missing", async () => {
    const response = await request.post("/users/register").send(userNoMail);
    expect(response.status).toBe(422);
  })
  it("should not create user when password missing", async () => {
    const response = await request.post("/users/register").send(userNoPassword);
    expect(response.status).toBe(422);
  })
  it("should not create user when password confirmation is wrong", async () => {
    const response = await request.post("/users/register").send(userDiffConf);
    expect(response.status).toBe(422);
  })
  it("should not return user when not connected", async () => {
    const response = await request.get("/users/me");
    expect(response.status).toBe(401);
  })
  it("should not be able to login user when wrong password", async () => {
    const response = await request.post("/users/login").send(loginUserWrongPassword);
    expect(response.status).toBe(422);
  });
  it("should not be able to login user when entering no email", async () => {
    const response = await request.post("/users/login").send(loginUserNoMail);
    expect(response.status).toBe(422);
    expect(response.body.errors.message).toBe("Email is required");
  });
  it("should not be able to login user when entering no password", async () => {
    const response = await request.post("/users/login").send(loginUserNoPassword);
    expect(response.status).toBe(422);
    expect(response.body.errors.message).toBe("Password is required");
  });
  it("should be able to login user", async () => {
    const response = await request.post("/users/login").send(loginUser);
    expect(response.status).toBe(200);
  });
  it("should be able to get current user when connected", async () => {
    const response = await request.get("/users/me").send();
    const obj = response.body
    expect(obj._id).toBeDefined();
    expect(obj.name).toBe(user.name);
    expect(obj.username).toBe(user.username);
    expect(obj.email).toBe(user.email);
    expect(response.status).toBe(200);
  })
  it("should logout successfully", async () => {
    const response = await request.post("/users/logout").send();
    expect(response).toBeDefined()
    expect(response.body.status).toBe("Session destroyed!")
  })
  it("should be able to say forgotten password", async () => {
    const response = await request.post("/users/forgot").send(emailUser)
    expect(response.status).toBe(200)
    expect(response.body.message).toBe("Check mailbox")
  })
  it("should not be able to say forgotten password when providing wrong email", async () => {
    const response = await request.post("/users/forgot").send(wrongEmailUser)
    expect(response.status).toBe(422)
  })
  it("should not be able to say forgotten password when providing no email", async () => {
    const response = await request.post("/users/forgot").send()
    expect(response.status).toBe(422)
  })
  it("should not allow to reset password with wrong JWT token", async () => {
    const response = await request.post("/users/resetPwd/wrongToken").send()
    expect(response.status).toBe(400)
  })
  it("should not allow to reset password with wrong password confirmation", async () => {
    const response = await request.post("/users/resetPwd/wrongToken").send(resetWrongConfirmation)
    expect(response.status).toBe(422)
  })
  it("should not confirm email when provided with a wrong token", async () => {
    const response = await request.get("/users/confirm/wrongToken").send()
    expect(response.status).toBe(400)
  })
  it("should not confirm email when JWT incorrect", async () => {
    const response = await request.get("/users/confirm/wrongToken").send()
    expect(response.status).toBe(400)
  })
  it("should send a confirmation email", async () => {
    const response = await request.post("/users/send-confirmation-email").send(emailUser)
    expect(response.status).toBe(200)
    expect(response.body.message).toBe("Confirmation email has been sent")
  })
  it("should not send a confirmation email when email not registered", async () => {
    const response = await request.post("/users/send-confirmation-email").send(wrongEmailUser)
    expect(response.status).toBe(400)
  })
});
