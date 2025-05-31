# recipe-book

To run the project you need to complete the three following steps. `package.json` file in the main directory is added for your convenience. All of the following commands must be run from the main direcrtory (where this `README.md` file is located).

## 1. Install dependencies

```bash
yarn setup
```

**Alternatively:** if something fails on your OS, you need to do it manually, like this:

```bash
$ cd server
$ yarn

$ cd ..

$ cd client
$ yarn
```

## 2. Start server app

```bash
yarn server
```

> **Note:** server app listening on port `3000`

## 3. Start client app

```bash
yarn client
```

> **Note:** client app listening on port `3001`
