# Dashboard Starter Kit documentation

**Dashboard Starter Kit** is a census/survey dashboard application scaffolding built for the popular PHP Laravel framework. It provides the perfect starting point for your dashboard and includes various features.

This repository is the documentation website for Dashboard Starter Kit and is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Contributing guidelines

Contributions to the documentation are very welcome.

Read through the docs. If you find anything that is confusing or can be improved, you can click "Edit this page" at the bottom of most docs, which takes you to the GitHub interface to make and propose changes.

The documentation is written in Markdown. It allows you to add some lightweight formatting. You can learn more about it at the [CommonMark website](https://commonmark.org/), which also has a helpful reference guide and an interactive tutorial.

You can use any text editor. There are plugins for many editors (e.g. Atom, Emacs, Sublime Text, Vim, and Visual Studio Code) that allow you to preview Markdown while you are editing it.

You can also use a dedicated Markdown editor like [Typora](https://typora.io/) or an online one like [StackEdit](https://stackedit.io/editor) or [Dillinger](http://dillinger.io/).

While it is not necessary, if you want to run the documentation site locally, you can do so by installing the dependencies through npm.

> Note that you will need to have node >=16.14 installed on your system

Install packages
```
npm install
```

To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes.

```
npm run start
```

To build and deploy

```
npm run build
GIT_USER=username npm run deploy
```

### Style guide

To maintain the usability of the documentation, we have chosen to adopt [Google's developer documentation style guide
](https://developers.google.com/style). It helps us to write documentation in a clearer way, and to keep a consistent tone of voice and style.

The adopted style guide is a vast and comprehensive document which you will benefit from reading. However, we have distiled the key highlights that we feel are relevant to our documentation.


#### Highlights of the style guide (TL;DR)

Tone and content
- Be conversational and friendly without being frivolous.
- Use descriptive link text.
- Write accessibly.
- Write for a global audience.

Language and grammar
- Use second person: "you" rather than "we."
- Use active voice: make clear who's performing the action.
- Use standard American spelling and punctuation.
- Put conditional clauses before instructions, not after.
- For usage and spelling of specific words, see the word list.

Formatting, punctuation, and organization
- Use sentence case for document titles and section headings.
- Use numbered lists for sequences.
- Use bulleted lists for most other lists.
- Use description lists for pairs of related pieces of data.
- Use serial commas.
- Put code-related text in code font.
- Put UI elements in bold.
- Use unambiguous date formatting.

Images
- Use SVG files or crushed PNG images.
- Provide alt text.
- Provide high-resolution images when practical.


### Getting started

To get started, fork the repository, make edits, commit your changes and then open a pull request.

Please make sure you write descriptive and helpful commit messages ([How to Write a Git Commit Message](https://cbea.ms/git-commit/))

> **ProTip**: Make sure your editor is setup to do checking, linting, spell checking etc.

## License

MIT