import assert from "node:assert";
import { parseAdventure } from "./main.js";

function testAdventureParser() {
  function itExtractsTitleFromFirstLineOfAdventureText() {
    const exampleAdventure =
      "The title of this adventure is The Loneliest Dragon.";

    const result = parseAdventure(exampleAdventure);
    assert.equal(result.title, "The Loneliest Dragon");
  }

  function itExtractsTitleFromAnywhereInAdventureText() {
    const exampleAdventure = `It's possible there will be some text up here for some reason.
      That shouldn't stop the title being parsed.
      The title of this adventure is The Loneliest Dragon.
      There will, of course, usually be text after the title as well.
      Otherwise it would be a short adventure!`;

    const result = parseAdventure(exampleAdventure);
    assert.equal(result.title, "The Loneliest Dragon");
  }

  function itIgnoresSubsequentTitles() {
    const exampleAdventure = `The title of this adventure is The Mystery of the Extra Title.
    Perhaps a second title will be somewhere in the text, due to a copy-paste error.
    Let's be forgiving in our parsing and just ignore it.
    The title of this adventure is The Loneliest Dragon.`;

    const result = parseAdventure(exampleAdventure);
    assert.equal(result.title, "The Mystery of the Extra Title");
  }

  function itHandlesMissingTitle() {
    const exampleAdventureWithoutTitle = "I don't have a title!";

    try {
      parseAdventure(exampleAdventureWithoutTitle);
      throw new Error("Title missing in test data but no error thrown.");
    } catch (e) {
      assert.match(e.message, /Adventure is missing a title/);
    }
  }

  itExtractsTitleFromFirstLineOfAdventureText();
  itExtractsTitleFromAnywhereInAdventureText();
  itIgnoresSubsequentTitles();
  itHandlesMissingTitle();
}

try {
  testAdventureParser();
  console.log("All tests passed.");
} catch (e) {
  console.error("At least one test failed. The earliest error is", e);
}
