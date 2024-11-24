import { reactive } from 'vue'

export const rightSideStore = reactive({
  type: null,
  question: null,
  response: null,
  currentAutoGptStep: 1,
  isAutoGptLoading: false,
  autoGptSteps: [
    {
      step: 1,
      action: 'Import necessary modules',
      details: [
        'webdriver from selenium',
        'By, Keys, and ActionChains from selenium.webdriver.common'
      ]
    },
    {
      step: 2,
      action: 'Initialize WebDriver',
      details: [
        'Instantiate a Chrome WebDriver object',
        'Set an implicit wait of 10 seconds'
      ]
    },
    {
      step: 3,
      action: 'Open the webpage',
      details: ['Use get() method to open the URL http://209.38.227.47:3000/']
    },
    {
      step: 4,
      action: 'Navigate to Login through the <nav>',
      details: [
        "Find and click the 'menu' button",
        "Click the 'menu' button again",
        "Find and click the 'exit_to_app' link"
      ]
    },
    {
      step: 5,
      action: 'Perform various actions on email and password fields',
      details: [
        'Send the Ctrl + A command',
        'Navigate to the end of the input field',
        'Send SQL injection and other commands as input to email and password fields',
        'Use the ENTER key to attempt submissions'
      ]
    },
    {
      step: 6,
      action: 'Repeat similar actions',
      details: [
        'Continue to perform actions involving SQL injection inputs on the email and password fields'
      ]
    },
    {
      step: 7,
      action: 'Quit the driver',
      details: [
        'Use the quit() method to close the browser and end the WebDriver session'
      ]
    }
  ]
})
