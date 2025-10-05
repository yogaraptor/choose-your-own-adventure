import testParser from "./parserTests.js";

try {
  testParser();
  console.log("All tests passed.");
} catch (e) {
  console.error("At least one test failed. The earliest error is", e);
}
