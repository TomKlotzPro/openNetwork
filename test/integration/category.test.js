const supertest = require("supertest");
const app = require("../src/app");
const request = supertest(app);

describe("Category", () => {
  it("should be able to get the categories", async () => {
    const response = await request.get("/categories");
    const obj = response.body
    expect(obj).toBeDefined();
    expect(response.status).toBe(200);
  });
});