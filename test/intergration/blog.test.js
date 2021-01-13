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
  let session = null

  beforeAll(async () => {
    // register and login a user
    await request.post("/users/register").send(userForBlog);
  });

  beforeEach(async () => {
    await request.post("/users/login")
      .send({email: userForBlog.email, password: userForBlog.password})
      .then(res => {
        console.log(res)
        session = res
           .headers['set-cookie'][0]
           .split(',')
           .map(item => item.split(';')[0])
           .join(';')
        expect(res.status).toEqual(200)
  });;
  })
  it("should be able to create blog", async () => {
    const response = await request.post("/blogs")
      .send(blog)
      .set('Cookie', session)
    const obj = response.body
    console.log(obj)
    expect(response).toBeDefined();
  });
  
});
