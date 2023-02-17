# Server-Side Rendering - Client-Side Rendering

Where do you want the work to happen?

- Client
- Server
- pre-deployment

## CSR vs. SSR

- Single Page Application (SPA):
  - 1 HTML file
  - navigation done inside the JS logic
  - ~client-side rendered
  - more JS sent to client on initial request
  - SEO performance is more difficult
- CSR
  - bare bone HTML -> download JS -> execute JS -> page available & interactive
  - may cause a blank screen until everythin is loaded and executed
- SSR
  - HTML -> page visible -> load JS -> execute JS -> page interactive
  - same interactivity point, BUT appears faster

## SSR in React

- needs to send App in string form
- on the browser need to `.hydrate` to make application interactive

## Pros and Cons

### CSR

PROS:

- rich interactions
- faster response
- great for web applications

CONS:

- low SEO potential
- longer initial load

### SSR

PROS:

- good at SEO
- quicker initial load
- good with static sites (mostly text-based)

CONS:

- full page reloads
- slower page rendering
- number of requests to server

## Tools for SSR

- Gatsby
- Next.js
