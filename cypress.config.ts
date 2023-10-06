import { defineConfig } from 'cypress';
import { config as dotenvConfig } from 'dotenv'
import admin from 'firebase-admin'
import { plugin as cypressFirebasePlugin } from 'cypress-firebase'
import serviceAccount from './serviceAccount.json'

dotenvConfig()

export default defineConfig({
  retries: {
    runMode: 1,
    openMode: 1,
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      return cypressFirebasePlugin(on, config, admin, {
        // @ts-ignore: serviceAccount is from a JSON file and keys don't perfectly match specified interface
        credential: admin.credential.cert(serviceAccount)
      })
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    video: false,
  },
  env: {
    ...process.env
  },
  pageLoadTimeout: 10000,
})
