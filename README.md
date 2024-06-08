# Nest Application with Prisma

This repository contains a Nest.js application integrated with Prisma ORM to interact with a PostgreSQL database. Additionally, it includes a script to seed the database with a million user records.

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/kol3x/test-task3.2
    ```

2. **Install dependencies:**

    ```bash
    cd test-task3.2
    npm install
    ```

3. **Set up PostgreSQL:**

    Ensure you have PostgreSQL installed and running on your system. You'll also need to create a database and set up your environment variables accordingly.

4. **Set up environment variables:**

    Create a `.env` file in the root of your project and configure the following variables:

    ```env
    DATABASE_URL=postgresql://username:password@localhost:5432/your_database
    ```

    Replace `username`, `password`, and `your_database` with your PostgreSQL credentials and database name.

5. **Run Migrations:**

    Run Prisma migrations to create the necessary tables in your database:

    ```bash
    npx prisma migrate dev
    ```

6. **Seed the Database:**

    To populate the database with a million users, run the following command:

    ```bash
    npx ts-node prisma/seed.ts
    ```

    This script will generate and insert a million user records into your PostgreSQL database.

7. **Start the Nest Application:**

    Once the database is seeded, start the Nest.js application:

    ```bash
    npm run start
    ```

    The application will be accessible at `http://localhost:3000`.


## Endpoints

- **Reset User Problems:** `PUT /users/reset-problems`
    - This endpoint resets the `problem` field for every user to `false`. 
