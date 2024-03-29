## Description

Calorie Counter Backend

# Contributing Guide

Thanks for taking time to contribute.

## Setup

### Requirements

These are some of the software required to run this application:

- Nodejs `(>= 10.x.x)`
- Yarn `(>= 1.x.x)`
- ElasticSearch `(>= 7.x.x)`
- MongoDB `(>= 4.x.x)`

### Installation

These are the steps to get the app up and running

- Install Dependencies

  ```sh
  yarn install
  ```

  - Run the application (develoment):

  ```sh
  yarn start:dev
  ```

## Deploy

### Requirements

These are some of the software required to **build** and run this application in production:

- Nodejs `(>= 10.x.x)`
- Yarn `(>= 1.x.x)`
- ElasticSearch `(>= 7.x.x)`
- MongoDB `(>= 4.x.x)`

### Steps

- Install Dependencies

  ```sh
  yarn install
  ```

- Build the application:

  ```sh
  yarn build
  ```

- Run the application (production):

  ```sh
  yarn start
  ```

- Checkout `package.json` for other helpful scripts.
