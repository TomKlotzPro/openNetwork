const supertest = require("supertest");
const app = require("../src/app");
const request = supertest(app);
const fs = require('mz/fs');
const { response } = require("express");
const path = require("path")

const filePath = path.join(__dirname, '..', 'fixtures', 'upload', 'sample.jpeg');
let testFilePath = null;
let createdProduct = null;

const user = {
  username: "test-user-upload",
  name: "testuserupload",
  email: "testuserupload@test.com",
  password: "testpassword",
  passwordConfirmation: "testpassword"
};

const product = {
  title: "Product Test Upload",
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

describe("Upload", () => {

  beforeAll(async () => {
    await request.post("/users/register").send(user);
    await request
      .post("/users/login")
      .send({ email: user.email, password: user.password });
    const response = await request.post("/products").send(product);
    createdProduct = response.body;
  });

  it("should be able to filter image on upload", () => {
    fs.exists(filePath)
      .then((exists) => {
        if(!exists)
          throw new Error("File does not exist");
        return request.post(`products/${createdProduct._id}/add-project-image`)
          .attach("image", filePath)
          .then((response) => {
            const {success, message, filePath} = response.body;
            expect(success).toBeTruthy();
            expect(message).toBe("Uploaded successfuly");
            expect(typeof filePath).toBeTruthy();
            testFilePath = filePath;
          })
          .catch((err) => {
            console.log(err);
          });
      });

  });

});