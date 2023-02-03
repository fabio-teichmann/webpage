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
- use CDNs like imigx
- remove image metadata
