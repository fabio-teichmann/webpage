# Document Object Model

- reads the web page files to create it in the browser
- browers has JS engine to compile JS code
- potentially causes reloads of page

## Selectors

- important to **cache** selector, since they use up memory

// select specific element(s)
document.getElementByTagName("h1");
document.getElementByClassName("second");
document.getElementById("id");

// selects first item
document.querySelector("h1");
// selects all items
document.querySelectorAll("li, h1");

document.querySelector("li").getAttribute("random")
document.querySelector("li").setAttribute("random")

### Changing style

document.querySelector("h1").style.background = "yellow";

document.querySelector("h1").className = "coolTitle"; // must be defined in CSS
document.querySelector("h1").classList.add();
document.querySelector("h1").classList.remove();
document.querySelector("h1").classList.toggle(); // turn on/off

document.querySelector("h1")[1].parentElement
document.querySelector("h1")[1].children

## Events

- can listen to events (mouse clicks, etc.) and react to them using JS
- [event reference list](https://developer.mozilla.org/en-US/docs/Web/Events)

```
var button = document.getElementByTagName("button"); // returns array

button[0].addEventListener("click", function() {
    console.log("CLICK!");
})
```

## jQuery

- provides functionality to event handling / interactivity
- mainly used back in the day
- makes code **Imperative** -> increases complexity
