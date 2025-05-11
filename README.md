## Indigov Takehome

This app is built with React, NextJS, Tailwind, Postgres, and Drizzle ORM. I also used json2csv to make csv delivery easier.

## Running the app

Install dependencies

```
npm i
```

Run the app

```
npm run dev
```

## Database set up

The app runs on a Postgres DB using Docker, with docker-compose.yml ready.

1. First, run Docker

```
docker compose up -d
```

2. Push DB setup

```
npx drizzle-kit push
```

3. Seed the database

```
curl -X POST http://localhost:3000/api/seed
```
