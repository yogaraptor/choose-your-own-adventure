# "Choose Your Own Adventure" engine project

An engine for creating web-based experiences that roughly mimic the "Choose your own Adventure" books of my (long receded) youth - the [Fighting Fantasy](https://www.fightingfantasy.com/) series by Steve Jackson and Ian Livingston being the usual example.

## Motivation

- For the kids: playing age-appropriate interactive stories for rainy days
- For me: Reconnecting with the joy of plain HTML, CSS and JS

## MVP

At a minimum, it should:

- Present "pages" and allow linear navigation between them based on choices (to enter the dungeon, click here. To run home screaming for your teddy bear, click here)
- Allow including illustrations on pages
- Keep track of player inventory
- Support puzzles which require player input, including use of items
- Save game state to localStorage
- Be a portable, static website that can be hosted anywhere
- Include at least one short, kid-friendly sample adventure

## Stretch goals

- A limited supply of "time crystals" (or other themed item) allowing undoing a choice (the equivalent of keeping your thumb in the page when deciding to open that myseriously unguarded treasure chest)
- Support from running from local file system (i.e. file:// URLs). localStorage won't work here so will need a clever workaround, or allow exporting game state to a file

## Out of scope:

- Combat: the kids don't need any encouragement…

## Technical restrictions

- No dependencies/frameworks, except for a formatter/linter to allow contributors to easily submit patches that match the code style of the project.

## Contributing

1. Install Biome, our formatter/linter with `npm i`.
2. Make your awesome change.
3. Format and lint any changes with `npm run format` and `npm run lint`. This helps keep all the code in the same rough style.
