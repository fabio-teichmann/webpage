# Performance

- crucial to all applications

## Where time can get lost

1. FE (client side) -> needs time to render

- critical render path
- optimised code
- progressive web app

2. Network Transfer -> improve network latency

- minimise files
- minimise delivery

3. BE (server side) -> needs time to assemble all pieces

- CDNs
- caching
- load balancing
- DB scalling
- GZIP

## Network Performance

- client has to download all files to display the app correctly
  - file size determine speed
- for JS, HTML and CSS --> uglify / minify
- for images (main types: PNG, JPG, SVG, GIF)
  - JPG -> fotos with many colors (no transparency), usually big
  - GIF -> limited number of colors
  - PNG -> limit number of colors (logos), can have transparency, usually smaller
  - SVG -> high resolution, albeit not too big, usually not too complex illustrations

### Image compression

- for transparency -> PNG
- for animation -> GIF
- for color -> JPG
- simple logos/icons -> SVG
- reduce PNG with [TinyPNG](https://tinypng.com/)
- reduce JPG with [JPEG-optimizer](https://jpeg-optimizer.com/)
- try choosing simple illustrations over highly detailed photos
- always lower JPEG image quality (30-60%)
- resize image based on size it will be displayed
- display different sized immages for different backgrounds
  - media queries (CSS)

```
@media screen and (min-width: 900px) {
    ...
}

@media print and ...
```

- use CDNs like imigx (content delivery network)
- remove image metadata (e.g. [verexif](https://www.verexif.com/en/))

### Delivery Man

- limit file sizes
- limit number of trips (less files)

## Critical Render Path

- brower receives HTML files
- parses HTML file
- starts rendering the DOM (contents of page)
- once encountered style link
- requests CSS
- continues working on **DOM tree structure**
- generates **CSS object model**
- once it encounters additional logic
- requests JS file(s)
- when DOM and CSS-OM are done, thet are combined into a **render tree**
- then figures out **layout**
- then **paints** all pixels

DOM -> CSS-OM -> Render Tree -> Layout -> Paint

### Optimisation

1. Loading sequence

- get CSS as soon as possible (render blocking)
  - keep lightweight as possible
  - that way user sees something as quickly as possible
- load JS as late as possible (block simultaneous download of other files)
  - exception may be Google Analytics tags
- creates perceived quicker load

2. Load only what's above the fold

- everything that is visible without scrolling
- include script in body:

```
<script type="text//javascript">
    const loadStyleSheet = src => {
        if (document.createStylesheet) {
            document.createStylesheet(src); // brower in-built
        } else {
            const stylesheet = document.createElement('link');
            stylesheet.href = src;
            stylesheet.type = 'text/css';
            stylesheet.rel = 'stylesheet';
            document.getElementsByTagName('head')[0].appendChild(stylesheet)
        }
    }

    window.onload = function() {
        console.log('window done!');
        loadStyleSheet('./style3.css');
    }
</script>
```

3. Media attributes

- can be loaded in HTML as well

```
<link rel="stylesheet" href="" media="only screen and (min-width: 500px)"> // default for media is "all"
```

4. Less specificity

- less complex css assignements (less tags per same styling; rather duplicate styling with just 1 tag)

5. async and defer

- `async` (core functionality)
  - added to script tag will download script on another script
  - execution of script will be render blocking (DOM blocking)
  - behaviour might be unpredictable
  - add to scripts that do not use/need the DOM that are not essential to user
- `defer` (non-core functionality)
  - loads asynchronously
  - execution will wait for DOM rendering to finish

6. Rerendering

- whenever user interactions happen, the render-tree is re-rendered
- this should be limited to what is necessary to re-load vs. the whole page

## FE Optimisations

- Optimised code
- Progressive web apps (as close to native mobile apps as possible)

### Principles

- only load what's needed
  - code splitting
  - tree shaking (remove unnecessary code) [source](https://web.dev/reduce-javascript-payloads-with-tree-shaking/)
- avoid blocking main thread (mostly through JS scripts)
- avoid memory leaks (we don't keep adding memory into our app)
- avoid multiple re-rendering

### Optimised Code

- KPIs
  - time to first meaningful paint
  - time to interactive

### Code splitting

- serve js code to pages which actually need it
- use **production build** for 3rd party packages that are used across pages
  - `npm run build`
- possible to have **component-based** code splitting
- React Router offers code splitting tools

## Progressive Web-App

- aims to turn web app into native app

**Differences**:

- native apps have all the files they need to run (hence their size)
- native apps can send push notifications
- native apps can work offline
- have access to system files / tools (like camera)

### Components

- HTTPS
  - use encrypted connection
  - free resource [let's encrypt](https://letsencrypt.org/docs/)
  - [cloudflare](https://www.cloudflare.com/en-gb/)
- App Manifest
  - need to mimic function and views of a native app -> make it indistinguishable from native app
  - contains instructions that help interpreting the web app natively
  - [vieport meta tag](https://developer.chrome.com/docs/lighthouse/pwa/viewport/)
  - [favicon generator](https://realfavicongenerator.net/)
- Service Workers
  - usually for features that don't need user interaction (background)
  - programmable proxy -> allows to control what happens on a request-by-request basis
  - `serviceWorker.register()` in `index.js`
