import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import { attachCustomCommands } from 'cypress-firebase';

Cypress.Commands.add('getById', (id: string) => {
    return cy.get(`#${id}`)
})

Cypress.Commands.add('getByClass', (className: string) => {
    return cy.get(`.${className}`)
})

const firebaseConfig = {
    apiKey: Cypress.env('REACT_APP_FIREBASE_API_KEY'),
    authDomain: Cypress.env('REACT_APP_FIREBASE_AUTH_DOMAIN'),
    projectId: Cypress.env('REACT_APP_FIREBASE_PROJECT_ID'),
    storageBucket: Cypress.env('REACT_APP_FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: Cypress.env('REACT_APP_FIREBASE_MESSAGE_SENDER_ID'),
    appId: Cypress.env('REACT_APP_FIREBASE_APP_ID')
};

firebase.initializeApp(firebaseConfig);

attachCustomCommands({ Cypress, cy, firebase });

Cypress.Commands.add('loginWithGoogle', () => {
    return cy.login(Cypress.env('GOOGLE_USER_UID'))
})

Cypress.Commands.add('loginWithEmail', () => {
    return cy.login(Cypress.env('EMAIL_USER_UID'))
})