const supertest = require("supertest");
const app = require("../src/app");
var request = supertest.agent(app);
const User = require("../../server/models/user");
const Product = require("../../server/models/product");

const userForProduct = {
  username: "test-user-product",
  name: "testuserproduct",
  email: "testuserproduct@test.com",
  password: "testpassword",
  passwordConfirmation: "testpassword"
};

const product = {
  title: "Product Test",
  subtitle: "Product sub test",
  description: "Nice little description test",
  wsl: [
    {
      value: "Importance Test"
    }
  ],
  requirements: [
    {
      value: "Product Requirement Test"
    }
  ]
};

const updateProduct = {
  status: "published"
};

describe("Product", () => {
  let createdProduct = null;
  let createdUserForProduct = null;

  beforeAll(async () => {
    // register and login a user
    createdUserForProduct = await request.post("/users/register").send(userForProduct);
    await request
      .post("/users/login")
      .send({ email: userForProduct.email, password: userForProduct.password });
  });
  afterAll(async () => {
    User.deleteOne({ _id: createdUserForProduct.body._id }, function (err) {
      if (err) {
        console.log("Error while deleting test user in project integration tests", err);
      }
    });
    Product.deleteOne({ _id: createdProduct.body._id }, function (err) {
      if (err) {
        console.log("Error while deleting test project in project integration tests", err);
      }
    });
  });
  it("should return empty array if no products", async () => {
    const response = await request.get("/products");
    expect(response.body).toHaveLength(0);
  });
  it("should return empty array if no user products", async () => {
    const response = await request.get("/products/user-products");
    expect(response.body).toHaveLength(0);
  });
  it("should be able to create product", async () => {
    const response = await request.post("/products").send(product);
    createdProduct = response.body;
    expect(response).toBeDefined();
    expect(createdProduct._id).toBeDefined();
    expect(createdProduct.title).toBe(product.title);
    expect(createdProduct.subtitle).toBe(product.subtitle);
    expect(createdProduct.description).toBe(product.description);
    expect(createdProduct.wsl).toStrictEqual(product.wsl);
    expect(createdProduct.requirements).toStrictEqual(product.requirements);
  });
  it("should return empty array if no products has been published", async () => {
    const response = await request.get("/products");
    expect(response.body).toHaveLength(0);
  });
  it("should not create product if no body", async () => {
    const response = await request.post("/products").send({});
    expect(response.status).toBe(422);
  });
  it("should update the product ", async () => {
    const response = await request
      .patch(`/products/${createdProduct._id}`)
      .send(updateProduct);
    const obj = response.body;
    updateProduct.slug = obj.slug
    expect(obj.status).toBe(updateProduct.status);
  });
  it("should not update an unexisting product ", async () => {
    const response = await request
      .patch("/products/randomstringthatisnotanid")
      .send(updateProduct);
    expect(response.status).toBe(422);
  });
  it("should return a non empty array of published products", async () => {
    const response = await request.get("/products");
    expect(response.body).not.toHaveLength(0);
  });
  it("should return a non empty array of users products", async () => {
    const response = await request.get("/products/user-products");
    expect(response.body).not.toHaveLength(0);
  });
  it("should get product by id", async () => {
    const response = await request.get(`/products/${createdProduct._id}`);
    const obj = response.body;
    expect(obj.title).toBe(createdProduct.title);
    expect(obj.subtitle).toBe(createdProduct.subtitle);
  });
  /* it("should not get product of an unexisting id", async () => {
    const response = await request.get("/products/randomstringthatisnotanid");
    expect(response.status).toBe(422);
  }); */
  it("should get product by slug", async () => {
    const response = await request.get(`/products/s/${updateProduct.slug}`);
    const obj = response.body;
    expect(obj.slug).toBe(updateProduct.slug);
    expect(obj.title).toBe(createdProduct.title);
    expect(obj.subtitle).toBe(createdProduct.subtitle);
  });
  /* it("should not get product of an unexisting slug", async () => {
    const response = await request.get("/products/s/randomstringthatisnotanid");
    expect(response.status).toBe(422);
  }); */
});
