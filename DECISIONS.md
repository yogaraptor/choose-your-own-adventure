# Decision records

## 2025-09-14 Project technologies

### Output artifact

HTML, CSS and JS. It works everywhere!

### Scripting tool/language for generating the output

Considered: Node, Bash, Python, Go.
Decision: [Node](nodejs.org). I _would_ like to try something new/less familiar out, but I would also like to _actually finish_ the project so the kids can have some fun. I've worked with Node since it was first released, so it's a comfy sweater. I enjoy shell scripting too, but tend to end up looking up syntax for if statements, etc, which I imagine I'd need more of for this project than my usual single-use scripts.

### Format for game files (input - i.e. the "pages" of the "book" and the choices that link them together)

Considered: HTML, JSON, Markdown, plain text.
Decision: Plain text.

- JSON is too verbose and not fun to edit.
- Markdown would require me to write a parser to avoid breaking the "no dependencies" rule (could be interesting, but see above note on _actually finishing the project_).
- HTML would be a great middle ground - a single document could contain all pages, easily link between them in a standard way using hrefs and IDs, and wouldn't necessarily require a build step (I suppose the other options don't either, as any of the formats can just be dumped into an element in the DOM, but it would be nice to be able to distribute game files separately).
- In the end, plain text won out because this is an exercise in creating stories, and I want the writing process to be as free-form and natural as possible. As close, in fact, as possible to writing a book. Encoding things like images and puzzles into the format should be relatively straightforward. The final clincher was when I realised that after playing a couple of adventures, my kids might like to write one. I don't want them to have to overcome the obstacle of learning markup to do so - I'd hope a convention driven format would be easier for them to learn and self-correct.
