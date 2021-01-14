const supertest = require("supertest");
const app = require("../src/app");
const request = supertest(app);

const userForBlog = {
  username: "test-user-blog",
  name: "testuserblog",
  email: "testuserblog@test.com",
  password: "testpassword",
  passwordConfirmation: "testpassword"
};

const blog = {
  slug: "slug",
  title: "title",
  subtitle: "subtitle",
  paragraph: "paragraph",
  content: "content",
}


describe("Blog", () => {
  beforeAll(async () => {
    // register and login a user
    await request.post("/users/register").send(userForBlog);
    await request.post("/users/login").send({email: userForBlog.email, password: userForBlog.password})
  });
  it("should be able to create blog", async () => {
    const response = await request.post("/blogs").send(blog)
    console.log(response.body)
    expect(response).toBeDefined();
  });

});
