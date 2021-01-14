const supertest = require("supertest");
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
  let createdBlog = null;

  beforeAll(async () => {
    // register and login a user
    await request.post("/users/register").send(userForBlog);
    const response = await request.post("/users/login")
      .send({email: userForBlog.email, password: userForBlog.password})
  });

  it("should be able to create blog", async () => {
    const response = await request.post("/blogs")
      .send(blog)
    createdBlog = response.body
    expect(response).toBeDefined();
    expect(createdBlog._id).toBeDefined();
    expect(createdBlog.slug).toBe(blog.slug);
    expect(createdBlog.title).toBe(blog.title);
    expect(createdBlog.subtitle).toBe(blog.subtitle);
    expect(createdBlog.paragraph).toBe(blog.paragraph);
    expect(createdBlog.content).toBe(blog.content);
    expect(response.status).toBe(201);

  });
  it("should not create blog if no body", async () => {
    const response = await request.post("/blogs")
      .send({})
    expect(response.status).toBe(422);
  });
  it("should update the blog ", async () => {
    const response = await request.patch(`/blogs/${createdBlog._id}`)
      .send(partialBlog)
    const obj = response.body
    expect(response.status).toBe(200);
    expect(obj.paragraph).toBe(partialBlog.paragraph);
    expect(obj.title).toBe(partialBlog.title);
  });
  it("should not update an unexisting blog ", async () => {
    const response = await request.patch("/blogs/randomstringthatisnotanid")
      .send(partialBlog)
    expect(response.status).toBe(422);
  });

});
