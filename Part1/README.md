# STACKED

STACKED is a small Express and EJS web app that presents an editorial-style SaaS growth leaderboard. The homepage ranks eight products, and each product links to its own detail page with a short growth summary, pricing info, founding year, and key tactics.

## Features

- Server-rendered homepage with eight ranked SaaS products
- Individual detail page for each product at `/products/:slug`
- Custom 404 page for unknown products and routes
- Responsive styling built with Pico CSS plus custom CSS
- Static product logos served from `public/logos`
- Basic route coverage with Node's built-in test runner and Supertest

## Tech Stack

- Node.js
- Express
- EJS
- Pico CSS
- Vanilla CSS
- Supertest

## Getting Started

### Prerequisites

- Node.js 20 or later

### Install

```bash
npm install
```

### Run the app

```bash
npm start
```

The app runs at `http://localhost:3000`.

### Run in development mode

```bash
npm run dev
```

### Run tests

```bash
npm test
```

## Routes

- `/` - homepage with the ranked list
- `/products/notion`
- `/products/figma`
- `/products/canva`
- `/products/slack`
- `/products/calendly`
- `/products/airtable`
- `/products/webflow`
- `/products/loom`

Any unknown route returns a custom 404 page.

## Project Structure

```text
Part1/
|-- public/
|   |-- logos/
|   `-- styles.css
|-- src/
|   |-- data/
|   |   `-- products.js
|   |-- app.js
|   `-- server.js
|-- test/
|   `-- app.test.js
|-- views/
|   |-- partials/
|   |-- 404.ejs
|   |-- index.ejs
|   `-- product.ejs
|-- package.json
`-- README.md
```

## Notes

The app currently uses in-memory JavaScript data in `src/data/products.js`, which keeps the project simple and matches the scope of the first assignment. A later version could move this data into a database while keeping the same route structure.
