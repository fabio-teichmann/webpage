# npm

- module registry
  - keeps track of packages commited
- packages contain package.json (meta file that describes package) + js file
- 3 types of packages
  - web packages
  - terminal functionality
  - node.js packages
- benefits:
  - collective knowledge
  - learn from other peoples' expertise
- downsides:
  - anyone can upload to npm
  - increases project size

## Setup

- need to install node.js
  - allows us to run JS outside the browser
  - created with V8 engine

## npm Installs & Setups

`npm init` - when starting a project

`npm install (-flag) (package name)` - to install packages

- allows to install locally (no flag) and/or globally (`-g`)

`npm install` - install project dependencies for setup

`npm run (script)` - runs the script as part of the `package.json`

## Important ressources

[npm semver](https://semver.npmjs.com/) - update packages
