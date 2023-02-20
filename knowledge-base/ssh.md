# SSH

Secure SHell is a protocoll. Connects two machines to communicate with each other.

Other examples are:

- HTTP -> send files over the internet (brower <-> server)
- FTP (file transfer protocoll) -> send files (e.g. uploading files to hostgator)
- HTTPS
- IMAP -> allows to send emails

SSH encrypts all data. The difference to HTTPS is that SSH is used in the shell and allows to talk also to the OS.

## Encryption techniques

Methods used by SSH:

- symmetrical encryption
  - same key encrypts and decrypts a message
  - key exchange algorithm ensures safe exchange of keys
  - systems generate key by themselves (Diffie Hellman)
- asymmetrical encryption
  - needs more time to compute
  - enables the key exchange algorithm
  - public and private keys
  - public keys are shared, they encrypt a message
  - private key decrypts message
- hashing
  - enables verification of trustworthiness of the other party
  - generated from key, package sequence number and message

## Authentification

RSA: create keys on both, client and server.

- on server in `/.ssh/authorized_keys``
- use `nano` on Ubuntu (like vim)

`ssh-keygen -t rsa -b 4096 -C "email"`

- create key

`pbcopy key`

- copy to clipboard

`ssh-add key`

- authorize key / make it known

## Commands

`ssh {user}@{host}`

- allows to access host location
- user refers to the access rights (e.g. `root` for unlimited access rights)

`apt-get install`

- ubuntu command to install (e.g. git)

`rsync -av . {user}@{host}:~/folder`

- copies all files into folder at host location
  - `-a` recursively
  - `-v` verbose
- `rsync` needs to be installed
- `rsync` used in Linux/Unix systems

## Examples of usage

- connect to GitHub account
- remotely access another computer
- access server remotely
