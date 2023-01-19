# Webpage

My journey on learning how to build websites and the logic on both front- and backend.

## Critical Render Path

Path the browser takes in order to display a website:

- requests first the **HTML** file; scanns it for additional requirements
- requests next the **CSS** file to resolve **HTML** requirements
  - **CSS** is a blocking element (without it the website cannot be built)
- if required, requests next any _fonts_ that the **HTML** indicates

# CSS

## Resources

- [CSS Refresher](https://web.dev/learn/css/)
- [Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

## CSS Grid vs. Flexbox vs. Bootstrap

- always a trade-off
- ideally, used complimentary
- flexbox good for 1 dimension (cols or rows)
- CSS grid good for 2 dimensions (cols AND rows)
- many functionality of Bootstrap4 is enabled through CSS grid

### Usage of CSS Grid

[cheat-sheet](https://grid.malven.co/)

[learning game](http://cssgridgarden.com/)

- encapsulate styling into `container` class
- activate `display: grid`
- set `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`
- set `grid-template-rows: 1fr`

```
.container {
    display: grid;
    gap: 20px; /* space between images */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* most important property for grid; 1 entry corresponse to 1 column */
    /* repeat(num, unit)  ->  repeats unit num-times
    auto unit ...  ->  adjusts space depending on content of cells */
    grid-template-rows: 1fr;
    /* justify-items: start; */
}
```

## Tools / Resources

### Color Schemes

- (paletton)[https://paletton.com/#uid=12a0u0kllllaFw0g0qFqFg0w0aF]

### Fonts

- (Google Fonts)[https://fonts.google.com/]

### Flexbox

(Link)[https://css-tricks.com/snippets/css/a-guide-to-flexbox/]
