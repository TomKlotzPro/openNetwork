/* const supertest = require("supertest");
const app = require("../src/app");
var request = supertest.agent(app)

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

const partialBlog = {
  title: "differentTitle",
  subtitle: "subtitle",
  paragraph: "differentParagraph",
}

describe("Blog", () => {
  let session = null

  beforeAll(async () => {
    // register and login a user
    await request.post("/users/register").send(userForBlog);
    const response = await request.post("/users/login")
      .send({email: userForBlog.email, password: userForBlog.password})
  });

  it("should be able to create blog", async () => {
    const response = await request.post("/blogs")
      .send(blog)
    const obj = response.body
    expect(response).toBeDefined();

  });
  it("should not create blog if no body", async () => {
    const response = await request.post("/blogs")
      .send({})
    expect(response.status).toBe(422);
  });
  it("should update the blog ", async () => {
    const response = await request.patch(`/blogs/${createdBlog._id}`)
      .send(partialBlog)
    expect(response.status).toBe(422);
  });

});
 */
