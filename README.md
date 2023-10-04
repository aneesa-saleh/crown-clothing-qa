# QA Automation for Crown Clothing

## Overview

This is a QA Automation project for [Crown Clothing](https://github.com/ZhangMYihua/crwn-clothing-v2), a sohpisticated online clothing store. It consists of automated tests written in [Cypress](https://www.cypress.io/), covering authentication with email or Google.

## Running the application
### Prerequisites
These should be installed globally:
1. Node.js
2. yarn
### Install packages
Open terminal/command propmt, navigate to the project folder and run:
```
yarn
```
Start the development server by running:
```
yarn start
```
Open http://localhost:3000 in your browser to see how the application works.
## Running Tests
If the project is already running, use this command in another terminal (from the project folder) to open Cypress:
```
yarn cypress:open
```
To run the application and open Cypress in the same terminal (from the project folder), run:
```
yarn start-and-open-cypress
```
See `package.json` for all scripts you can run for this project.