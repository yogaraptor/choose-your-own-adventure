import assert from "node:assert";
import { parseAdventure } from "./parser.js";

export default function testAdventureParser() {
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

  function itExtractsPagesWithLinks() {
    const pageTexts = [
      "Welcome to the adventure. Turn to page 3.",
      "See? This is the end.",
      "Typically, pages don't actually go in order!. Turn to page 2.",
    ];
    const exampleAdventure = `The title of this adventure is The Case of the Turning Pages.
Page 1:
${pageTexts[0]}

Page 2:
${pageTexts[1]}

Page 3:
${pageTexts[2]}
    `;

    const result = parseAdventure(exampleAdventure);

    assert.equal(result.pages[0].goto, 3);
    assert.equal(result.pages[2].goto, 2);
    assert.equal(result.pages[1].goto, undefined);
  }

  itExtractsTitleFromFirstLineOfAdventureText();
  itExtractsTitleFromAnywhereInAdventureText();
  itIgnoresSubsequentTitles();
  itHandlesMissingTitle();

  itExtractsPagesWithLinks();
}
