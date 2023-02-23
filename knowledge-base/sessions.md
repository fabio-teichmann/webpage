# Sessions

## Redis

- no-SQL in-memory DB
- open-source
- key-value store (similar to object)
- used for short-lived data
- small pieces of data (in-memory)
- don't care to maybe loose some data
- has unique data types

## Session management

- important for user experience
- protected vs unprotected routes

## Cookies vs Tokens

- cookies sent in header
- cookie sessions are **stateful** (must be kept on server and browser)
- using cookies with mobile apps is difficult
- token is stored on browser
- need to send authorization header with token
- server only needs to verify token (**stateless**)
- size of token can be significant

## JWT (JSON Web Token)

- can be decoded easily (avoid sensitive information!)
