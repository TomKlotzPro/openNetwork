const supertest = require("supertest");
const app = require("../src/app");
const request = supertest(app);

const user = {
  username: "test-user",
  name: "test-user",
  email: "test-user@test.com",
  password: "testpassword",
  passwordConfirmation: "testpassword"
};

describe("UserController.register", () => {
  it("should be able to create user", async () => {
    const response = await request.post("/users/register").send(user);
    const obj = response.body
    expect(obj._id).toBeDefined();
    expect(obj.name).toBe(user.name);
    expect(obj.username).toBe(user.username);
    expect(obj.email).toBe(user.email);
    expect(obj.status).toBe(200);
  });
});
