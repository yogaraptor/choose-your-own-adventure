function extractAdventureTitle(text) {
  const title = text.match(/The title of this adventure is (?<name>.*)\./)
    ?.groups.name;

  if (!title)
    throw new Error(
      "Adventure is missing a title. Please check AUTHORING.md for instructions on formatting adventure files."
    );

  return title;
}

export function parseAdventure(text) {
  const title = extractAdventureTitle(text);

  return { title };
}
