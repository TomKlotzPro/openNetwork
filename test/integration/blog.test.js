const supertest = require("supertest");
const app = require("../src/app");
var request = supertest.agent(app);
const User = require("../../server/models/user");

const userForBlog = {
  username: "test-blog",
  name: "testerblog",
  email: "testerblog@test.com",
  password: "testerpassword",
  passwordConfirmation: "testerpassword"
};

const blog = {
  title: "title blog",
  subtitle: "subtitle blog",
  paragraph: "paragraph blog",
  content: "content blog"
};

const partialBlog = {
  title: "differentTitle",
  subtitle: "subtitle",
  paragraph: "differentParagraph",
  slug: "test-blog-slug",
  status: "published"
};

describe("Blog", () => {
  let createdBlog = null;
  let createdUserForBlog = null;
  let countBlogAtStart = null;

  beforeAll(async () => {
    createdUserForBlog = await request.post("/users/register").send(userForBlog);
    await request
      .post("/users/login")
      .send({ email: userForBlog.email, password: userForBlog.password });
    const responseBlogs = await request.get("/blogs");
    countBlogAtStart = responseBlogs.body.blogs.length;
  });
  afterAll(async () => {
    User.deleteOne({ _id: createdUserForBlog.body._id }, function (err) {
      if (err) {
        console.log("Error while deleting test user in blog integration tests", err);
      }
    });
  });
  it("should return empty array if no blogs", async () => {
    const response = await request.get("/blogs");
    expect(response.body.blogs).toHaveLength(countBlogAtStart);
  });
  it("should be able to create blog", async () => {
    const response = await request.post("/blogs").send(blog);
    createdBlog = response.body;
    expect(response).toBeDefined();
    expect(createdBlog._id).toBeDefined();
    expect(createdBlog.slug).toBe(blog.slug);
    expect(createdBlog.title).toBe(blog.title);
    expect(createdBlog.subtitle).toBe(blog.subtitle);
    expect(createdBlog.paragraph).toBe(blog.paragraph);
    expect(createdBlog.content).toBe(blog.content);
    expect(response.status).toBe(201);
  });
  it("should return empty array if no blog has been published", async () => {
    const response = await request.get("/blogs");
    expect(response.body.blogs).toHaveLength(countBlogAtStart);
  });
  it("should not create blog if no body", async () => {
    const response = await request.post("/blogs").send({});
    expect(response.status).toBe(422);
  });
  it("should update the blog ", async () => {
    const response = await request
      .patch(`/blogs/${createdBlog._id}`)
      .send(partialBlog);
    const obj = response.body;
    expect(response.status).toBe(200);
    expect(obj.paragraph).toBe(partialBlog.paragraph);
    expect(obj.title).toBe(partialBlog.title);
  });
  it("should not update an unexisting blog ", async () => {
    const response = await request
      .patch("/blogs/randomstringthatisnotanid")
      .send(partialBlog);
    expect(response.status).toBe(422);
  });
  it("should return a non empty array of published blogs", async () => {
    const response = await request.get("/blogs");
    expect(response.body.blogs).not.toHaveLength(0);
  });
  it("should return a non empty array of users blogs", async () => {
    const response = await request.get("/blogs/me");
    expect(response.body).not.toHaveLength(0);
  });
  it("should get blog by id", async () => {
    const response = await request.get(`/blogs/${createdBlog._id}`);
    const obj = response.body;
    expect(obj.paragraph).toBe(partialBlog.paragraph);
    expect(obj.title).toBe(partialBlog.title);
  });
  it("should not get blog of an unexisting id", async () => {
    const response = await request.get("/blogs/randomstringthatisnotanid");
    expect(response.status).toBe(422);
  });
  it("should get blog by slug", async () => {
    const response = await request.get(`/blogs/s/${partialBlog.slug}`);
    const obj = response.body;
    expect(obj.slug).toBe(partialBlog.slug);
    expect(obj.paragraph).toBe(partialBlog.paragraph);
    expect(obj.title).toBe(partialBlog.title);
  });
  it("should not get blog of an unexisting slug", async () => {
    const response = await request.get("/blogs/s/randomstringthatisnotanid");
    expect(response.status).toBe(422);
  });
  it("should not delete blog of an unexisting id", async () => {
    const response = await request.delete("/blogs/randomstringthatisnotanid");
    expect(response.status).toBe(422);
  });
  it("should delete blog by id", async () => {
    const response = await request.delete(`/blogs/${createdBlog._id}`);
    const obj = response.body;
    expect(obj.status).toBe("deleted");
  });
});
