const regexes = {
  title: /The title of this adventure is (?<name>.*)\./,
  page: /Page [0-9]+:/,
};

function extractAdventureTitle(text) {
  const title = text.match(regexes.title)?.groups.name;

  if (!title)
    throw new Error(
      "Adventure is missing a title. Please check AUTHORING.md for instructions on formatting adventure files."
    );

  return title;
}

export function parseAdventure(text) {
  const title = extractAdventureTitle(text);

  const firstPageIndex = text.search(regexes.page);
  const pages = text
    .substr(firstPageIndex)
    .replace(`The title of this adventure is ${title}`, "")
    .split(regexes.page)
    .map((page) => {
      const linkMatches = page.match(/Turn to page (?<page>[0-9]+)./);
      let pageText = page,
        goto;
      if (linkMatches) {
        goto = linkMatches?.groups.page;
        pageText = pageText.replace(linkMatches[0]);
      }
      pageText = pageText.trim();
      return { text: pageText, goto };
    })
    .filter((page) => page.text.length > 0);

  return { title, pages };
}
