# Turborepo starter

This is an official Yarn v3 starter turborepo.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `api`: a [Nest.js](https://nestjs.com) backend app
- `nest-config`: a package that contains all configs for nest apps and packages
- `odm`: a package that contains an abstraction to use `mongoose` with nest

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Docker-Compose](https://docs.docker.com/compose/) for running a mongo database

## Setup

This monorepo use env variables, start by creating a `.env` file :

```
touch .env
```

Then file the following variables with your correct settings:

```
MONGO_ROOT_USER=your mongo root user for mongo express
MONGO_ROOT_PASSWORD=your mongo root password for mongo express
MONGO_EXPRESS_PORT=your mongo express port usualy 8081
MONGO_HOST=your mongodb host usualy localhost
MONGO_PORT=your mongodb port usualy 27017
MONGO_USER=your mongodb user
MONGO_PASSWORD=your mongodb password
MONGO_DATABASE=your mongodb database
```

You can now run `docker-compose` if you don't already have a running mongo database:

```
docker-compose up -d
```


To install all packages, run the following command:

```
yarn
```

### Build

To build all apps and packages, run the following command:

```
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn run start:dev
```

## Useful Links

Learn more about other libs used in the project :
- [NestJS](https://nestjs.com)
- [NextJS](https://nextjs.org)
- [MongoDB](https://www.mongodb.com)
- [Moongoose](https://mongoosejs.com)

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
