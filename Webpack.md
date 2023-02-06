# Webpack (Bundling)

- take in files and spit them out according to performance parameters

## Other tools

- Webpack -> big projects
- Parcel -> small solo project
- rollup.js -> for own npm packages

## Functionality

- creates **static assets** from all our files
- starts from `index.js` file (entry) and pulls in all files connected / deoendent

## Setup

- notoriously complex
- documentation changes frequently
- use babel to ensure compatibility with ES5
  - `npm install @babel/core`
  - `npm install @babel/loader`
  - `npm install @babel/preset-env`
-

## Resources

- [configuration helper](https://createapp.dev/webpack/react--babel--react-hot-loader)
