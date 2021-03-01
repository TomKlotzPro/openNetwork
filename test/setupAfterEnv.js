require("dotenv").config();

const databaseHelper = require("../server/db");

beforeAll(() => {
  //databaseHelper.truncate();
  return databaseHelper.connect();
});

/* beforeEach(() => {
  return databaseHelper.truncate();
}); */

/* afterAll(() => {
  return databaseHelper.disconnect();
});
 */
