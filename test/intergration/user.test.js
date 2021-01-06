const supertest = require("supertest");
const app = require("../src/app");
const request = supertest(app);

const user = {
  username: "test-user",
  name: "testuser",
  email: "testuser@test.com",
  password: "testpassword",
  passwordConfirmation: "testpassword"
};

const loginUser = {
  email: "testuser@test.com",
  password: "testpassword",
};

describe("UserController.register", () => {
  it("should be able to create user", async () => {
    const response = await request.post("/users/register").send(user);
    const obj = response.body
    expect(obj._id).toBeDefined();
    expect(obj.name).toBe(user.name);
    expect(obj.username).toBe(user.username);
    expect(obj.email).toBe(user.email);
    expect(response.status).toBe(201);
  });
  it("should be able to login user", async () => {
    const response = await request.post("/users/login").send(loginUser);
    //const obj = response.body
    //console.log(obj)
    expect(response.status).toBe(200);
  });
});
