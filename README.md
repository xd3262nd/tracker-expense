# Expense Tracker

A web application to help capture and visualize your expenses. The front end is a Vue.js application which connect to the API and database server.

For demonstration purposes this web application uses SQLite database with some randomly initialised data if you run in development mode, and in production mode, it will use Postgresql.
***
## Demo
[Vue Expenses]()

***
## Preview

### HomePage

<img src="/assets//mainPage.png" alt="Expenses HomePage" width="100%" />

### Expense Snapshot

<img src="/assets/chartGraph.png" alt="Expenses Snapshot" width="100%" />

***


## Installation

### Backend
- Run `nodemon` on the CLI to have the server running

The backend server runs on port `3000`.

Example endpoint: `http://localhost:3000/api/expenses`

### Front end
- Navigate to the `client` directory - `cd client`
- Run `npm install` from the `client` directory
- To start the application run `npm run serve`

The front end application can be access at `http://localhost:8080`

_For more information, visit [README](expensesTrackerClient/README.md) on the `client` directory_

***
## Frameworks & Libraries

### Front end
- [Application](https://vuejs.org/)
- [Charts](https://www.chartjs.org/)
- [Vuelidate](https://vuelidate.js.org/)

### Backend
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [Heroku Application](www.heroku.com)
- [PostgreSQL](https://www.postgresql.org/)