# QA Automation for Crown Clothing

## Overview

This is a QA Automation project for [Crown Clothing](https://github.com/ZhangMYihua/crwn-clothing-v2), a sohpisticated online clothing store. It consists of automated tests written in [Cypress](https://www.cypress.io/), including authentication with Email/Password or Google.

## Firebase Authentication Setup
To run this project, you'll need to set up a [Firebase](https://firebase.google.com/) project and register a web app to handle Email/password and Google authentication. You can follow instructions in [this video](https://www.youtube.com/watch?v=-YA5kORugeI) to create a project and register an app. The next steps are:
1. Go to the [Firebase Console](https://console.firebase.google.com/) and open your project.
2. On the sidebar expand *Build*, click *Authentication*, click the *Sign-in method* tab
3. Enable *Email/Password* (not *Email link*) and *Google* (if you haven’t already)
4. On the sidebar, click the gear icon ⚙️ next to *Project Overview*, then click *Project settings*
5. On the *General* tab, scroll down to *Your apps*.
6. For the Web App you configured in the previous steps, under *SDK setup configuration*, enter the details in the `firebaseConfig` object in a *.env* file in your project root in this format (replace each `{value}` with actual values, without any quotes or braces):
```
REACT_APP_FIREBASE_API_KEY={firebaseConfig.apiKey}
REACT_APP_FIREBASE_AUTH_DOMAIN={firebaseConfig.authDomain}
REACT_APP_FIREBASE_PROJECT_ID={firebaseConfig.projectId}
REACT_APP_FIREBASE_STORAGE_BUCKET={firebaseConfig.storageBucket}
REACT_APP_FIREBASE_MESSAGE_SENDER_ID={firebaseConfig.messagingSenderId}
REACT_APP_FIREBASE_APP_ID={firebaseConfig.appId}
```
5. On the same page, go to the *Service account* tab and click on *Generate new private key*, then confirm the download by clicking *Generate key*.
6. Rename the  downloaded file to *serviceAccount.json* and put it in the root of your project.

*NOTE: For security reasons, do **NOT** commit your **.env** file or your **serviceAccount.json** file. Both have already been added to the **.gitignore** for the project.*

## Running the application
### Prerequisites
1. Node.js installed globally
2. yarn installed globally
3. Firebase Authentication set up from the previous section

### Install packages
Open terminal/command propmt, navigate to the project folder and run:
```
yarn
```
Start the development server by running:
```
yarn start
```
Open http://localhost:3000 in your browser to explore the application.

## Running Tests
### Add test users
To run tests, one Email/Password user and one Google user need to be set up:
1. On the application, sign up for an account Email/Password account using the *Sign up* form on the */auth* page. You should be redirected to the home page after successful sign up.
2. To add a Google user, sign out by clicking the *Sign out* button on the top navbar.
3. Click *Sign in with Google*, then enter the credentials for the Google account you want to use for testing. You'll be redirected to the home page again after successful login.
4. Go to your Firebase console. Under *Build > Authentication > Users*, verify that the Email/Password and Google users were added successfully.
5. Copy the *User UID* to your *.env* file in this format:
```
GOOGLE_USER_UID={Google user's UID}
EMAIL_USER_UID={Email user's UID}
EMAIL_USER_EMAIL={Email user's email address}
EMAIL_USER_PASSWORD={Email user's email password}
```
*NOTE: For security reasons, make sure you use a test email address. You can use the same email account for both login types, as long as it's a Gmail account.*

### Run Cypress tests
To open Cypress when the application is already running, open a new terminal and navigate to the project folder then run:
```
yarn cypress:open
```
To run the application and open Cypress in the same terminal, from the project folder run:
```
yarn start-and-open-cypress
```
In the Cypress window, select *E2E Testing*, pick the browser you want to run the tests in and click *Start E2E Testing in {Browser}*. Under *cypress/e2e*, select the test you want to run.

## Contact
If you're a QA enthusiast like me, please connect with me on LinkedIn ([Aneesa Saleh](https://www.linkedin.com/in/aneesa-saleh/)). If you have any questions,  suggestions or need assistance running the project, feel free to email me at aneesa.saleh@gmail.com.