# QA Automation

This is an automation test using Cypress.

### Installation

This automation requires [Node.js](https://nodejs.org/) to run.

Install the dependencies

```sh
$ npm install
```

### How to run

To run tests you need to replace 'user' and 'pass' for the repective username and password or you can replace in the cypress.env.json:

Run Test:

```sh
$ npm run cy:run --env username=user,password=pass
```

Open Cypress interface:

```sh
$ npm run cy:open --env username=user,password=pass
```

Generate reports:

```sh
$ npm run allure:generate
```

Open reports:

```sh
$ npm run allure:open
```
