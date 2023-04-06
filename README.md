# fly-dotenv
A Node.js package that helps you copy environment variables from a dotenv file to Fly.io secrets.

This package is inspired by [**heroku-dotenv**](https://www.npmjs.com/package/heroku-dotenv)

# Installation
```bash
npm install --global fly-dotenv
```

# Usage

1. Before using the package, you need to install **flyctl** by following the instructions on https://fly.io/docs/hands-on/install-flyctl/. 

2. After installing flyctl and setting up your Fly.io account and app, you can run the `fly-dotenv` command to copy the environment variables from a .env file to Fly.io secrets.

3. You can optionally provide the path to your `.env` file as a command line argument. If no argument is provided, the package will look for a `.env` file in the current directory.
```bash
fly-dotenv
```
```bash
fly-dotenv .env.for.you
```
