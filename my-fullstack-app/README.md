# my-fullstack-app

This is a fullstack JavaScript application with React, Vite, and Express. The application uses a JSON file as a database.

## Client

The client-side application is located in the `client` directory. It is a React application that uses Vite as a build tool.

### Installation

To install the dependencies, run the following command in the `client` directory:

```
npm install
```

### Development

To start the development server, run the following command in the `client` directory:

```
npm run dev
```

This will start the development server at `http://localhost:3000`.

### Production

To build the production version of the application, run the following command in the `client` directory:

```
npm run build
```

This will create a `dist` directory with the production build.

## Server

The server-side application is located in the `server` directory. It is an Express application that uses a JSON file as a database.

### Installation

To install the dependencies, run the following command in the `server` directory:

```
npm install
```

### Development

To start the development server, run the following command in the `server` directory:

```
npm run dev
```

This will start the development server at `http://localhost:5000`.

### Production

To start the production server, run the following command in the `server` directory:

```
npm start
```

This will start the production server at `http://localhost:5000`.

## Database

The JSON file used as a database is located in the `server/src/data` directory. It contains sample data for the application.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.