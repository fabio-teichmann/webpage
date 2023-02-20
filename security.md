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
