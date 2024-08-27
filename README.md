# Space X Launches

## Overview
**Space X Launches** is a web application that provides detailed information about SpaceX rocket launches. The project serves as a learning tool to explore and integrate modern web technologies such as **GraphQL**, **Apollo Client**, **React**, and **TypeScript**.

While the project fetches real data, its primary purpose is to practice and demonstrate the use of these technologies in a practical environment.

We have also implemented **Ant Design** components to enhance the user interface with tables, pagination, and skeleton loading, ensuring a smooth and professional user experience.

## Features
- **GraphQL for Data Fetching**: The project uses GraphQL to fetch launch data, providing efficient and flexible data queries.
- **Apollo Client**: Apollo Client is used for managing remote and local data with GraphQL, handling caching, and query execution.
- **GraphQL Code Generation**: We have integrated **graphql-codegen** to automate the generation of TypeScript types and hooks for GraphQL queries and mutations.
- **Ant Design UI**: The project uses Ant Design for building user-friendly tables, providing features like pagination and skeleton loaders for improved UI.
- **TypeScript Integration**: TypeScript is used throughout the project to provide static typing, improve code quality, and catch errors during development.

## Key Technologies
- **React**: For building the user interface and managing the component lifecycle.
- **GraphQL**: Used to query SpaceX API and efficiently fetch only the required data.
- **Apollo Client**: To handle GraphQL requests and manage client-side state.
- **TypeScript**: Provides static typing and ensures type safety across the application.
- **Ant Design**: For creating tables, pagination, and implementing skeleton loaders.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/AlbertBrahimi/spaceXlaunches.git
    ```

2. Navigate into the project directory:
    ```bash
    cd spaceXlaunches
    ```

3. Install dependencies:
    ```bash
    yarn install
    ```

4. Start the development server:
    ```bash
    yarn start
    ```

## GraphQL Code Generation
We use **graphql-codegen** to automatically generate TypeScript types and React hooks for our GraphQL operations.

To run the code generation, use the following command:
```bash
yarn graphql-codegen
