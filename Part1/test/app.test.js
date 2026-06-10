const { test } = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");

const app = require("../src/app");
const products = require("../src/data/products");

test("GET / returns the ranked product list in ascending order", async () => {
  const response = await request(app).get("/").expect(200);
  const expectedOrder = [...products].sort((a, b) => a.rank - b.rank);
  const positions = expectedOrder.map(({ name }) => response.text.indexOf(name));

  assert.match(response.headers["content-type"], /html/);
  assert.ok(positions.every((position) => position >= 0));

  for (let index = 1; index < positions.length; index += 1) {
    assert.ok(
      positions[index - 1] < positions[index],
      `${expectedOrder[index - 1].name} should appear before ${expectedOrder[index].name}`
    );
  }
});

test("GET /products/:slug returns a known product", async () => {
  const response = await request(app).get("/products/notion").expect(200);

  assert.match(response.text, /Notion Growth Teardown/);
  assert.match(response.text, /Growth tactics/);
  assert.match(response.text, /https:\/\/www\.notion\.com/);
});

test("GET /products/:slug returns 404 for an unknown product", async () => {
  const response = await request(app)
    .get("/products/does-not-exist")
    .expect(404);

  assert.match(response.text, /Product Not Found/);
});

test("product slug matching is case-sensitive", async () => {
  const response = await request(app).get("/products/Notion").expect(404);

  assert.match(response.text, /Product Not Found/);
});

test("unknown routes return the custom 404 page", async () => {
  const response = await request(app).get("/unknown-route").expect(404);

  assert.match(response.text, /Page Not Found/);
  assert.match(response.text, /Return to the rankings/);
});

test("homepage requests do not mutate the exported product collection", async () => {
  const originalOrder = products.map(({ slug }) => slug);

  await request(app).get("/").expect(200);
  await request(app).get("/").expect(200);

  assert.deepEqual(
    products.map(({ slug }) => slug),
    originalOrder
  );
  assert.ok(Object.isFrozen(products));
  assert.ok(products.every((product) => Object.isFrozen(product)));
});

test("static middleware serves files from public", async () => {
  const response = await request(app).get("/robots.txt").expect(200);

  assert.match(response.headers["content-type"], /text\/plain/);
  assert.match(response.text, /User-agent: \*/);
});
