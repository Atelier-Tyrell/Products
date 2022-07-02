# Atelier - Retail API

## Overview
API built for e-commerce products, built using service-oriented architecture.

## Description
Use this project to deploy a server that listens to RESTful API routes to deliver product and style information for clothing items. To handle increased client load, deploy with a proxy NGINX server to horizontally scale to decrease error rate and latency when handling thousands of clients. 

## Installation and Setup
1. Fork and clone the repo and navigate to the root directory.

2. To install dependencies:
```
npm install
```

3. To setup db:
```
npm run start-db
```

4. To start the server:
```
npm start
```
5. Connect through http://localhost:3000 

## Technologies
- [Node.js](nodejs.org)
- [Express](http://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [NGINX](https://www.nginx.com/)

---

### Contributors
- [Isaac Chung](https://github.com/imizik)
