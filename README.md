# Cypress Test Automation with TypeScript

This project contains automated tests using the [Cypress](https://www.cypress.io/) framework with TypeScript support. The tests are designed for a local application located within this repository, inside the `apps` folder, which contains two subfolders: `api` (backend service) and `web` (frontend service). Both services are Node.js applications and require Node 18 to be installed.

## Requirements

- **Node.js version 18** or higher
- **npm** (package manager that comes with Node.js)
- **Cypress** (installed as a project dependency)

## Project Structure
```
.
├── apps/
│   ├── api/        # Node.js API service (backend)
│   └── web/        # Node.js web service (frontend)
└── cypress/        # Cypress structure
```


## Setup Instructions
### Clone the repository

```bash 
git clone <https://github.com/erissonbreno/cypress-xpress-mark>
cd <repository-directory>
```
### Install and run the API service
```bash
cd apps/api
npm install
npm run dev
```
This will install the necessary dependencies for the API and start the backend service locally.

### Install and run the Web service
```bash
cd ../web
npm install
npm run dev
```
This will install the necessary dependencies for the frontend and start the web service locally.

### Install Cypress dependencies
```bash
cd ../../
npm install
```
### Run Cypress tests
Once both services are running, you can execute the Cypress tests:

```bash
yarn cypress open
```
This will open the Cypress Test Runner interface, where you can select and run your tests.

Alternatively, to run tests in headless mode:

```bash
npx cypress run
```
### Configuration
Ensure that both services (api and web) are running on the expected ports (typically localhost:3000 for the web service and localhost:3333 for the API, unless otherwise configured). Update the Cypress configuration files if necessary to point to the correct URLs.

### Project Dependencies
1. Cypress
2. TypeScript
3. Node.js 18