# Server-side Application

This is the server-side application for the my-fullstack-app project. It is built with Node.js, Express, and uses a JSON file as a database.

## Getting Started

To get started with the server-side application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the `server` directory.
3. Run `npm install` to install the dependencies.
4. Create a `.env` file in the `server` directory and set the `PORT` environment variable to the desired port number.
5. Run `npm start` to start the server.

## API Endpoints

The server-side application provides the following API endpoints:

### GET /api/items

Returns an array of all items in the database.

### GET /api/items/:id

Returns the item with the specified `id`.

### POST /api/items

Adds a new item to the database. The request body should contain a JSON object with the following properties:

- `name`: The name of the item (string).
- `description`: The description of the item (string).
- `price`: The price of the item (number).

### PUT /api/items/:id

Updates the item with the specified `id`. The request body should contain a JSON object with the following properties:

- `name`: The name of the item (string).
- `description`: The description of the item (string).
- `price`: The price of the item (number).

### DELETE /api/items/:id

Deletes the item with the specified `id`.

## Database

The server-side application uses a JSON file (`db.json`) as a database. The file contains an array of items, where each item is represented by a JSON object with the following properties:

- `id`: The unique identifier of the item (string).
- `name`: The name of the item (string).
- `description`: The description of the item (string).
- `price`: The price of the item (number).

## Environment Variables

The server-side application uses the following environment variables:

- `PORT`: The port number on which the server should listen (default is `3000`).