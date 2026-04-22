# Personal Budget Mongo

MongoDB/Mongoose version of the Personal Budget class project. The app serves a static frontend and exposes budget items through an Express API backed by MongoDB.

## Features

- Static frontend served from Express.
- MongoDB persistence through Mongoose.
- Budget item read/create API.
- Chart pages for budget-category visualization.
- Hex color validation for chart display values.

## Stack

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- Chart.js
- Static HTML/CSS/JavaScript

## Project Structure

```text
server.js              Express server and API routes
models/budgetModel.js  Mongoose schema/model for budget items
public/                Static frontend pages and assets
package.json           Node dependencies
```

## Data Model

Budget items use this shape:

```json
{
  "custom_id": 1,
  "title": "Rent",
  "value": 1200,
  "color": "#ff6384"
}
```

The `color` field must be a six-digit hex color.

## API Routes

```text
GET  /budget   Returns all budget items from MongoDB
POST /budget   Creates a budget item
GET  /         Static frontend
```

## Run Locally

Start MongoDB locally with a database named `budget`, then run:

```powershell
npm install
node server.js
```

Open:

```text
http://localhost:3000
```

## Notes

- The MongoDB URL is currently hardcoded in `server.js` as `mongodb://localhost:27017/budget`.
- There is no configured `npm start` script; use `node server.js`.
