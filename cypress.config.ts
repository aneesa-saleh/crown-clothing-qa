import { defineConfig } from 'cypress';

export default defineConfig({
  retries: {
    runMode: 1,
    openMode: 1,
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    video: false,
  },
  pageLoadTimeout: 10000,
})
