
# Tambola Ticket Generator


Tambola Ticket Generator is a Node.js application designed to create Tambola (Bingo) tickets according to specific rules. It utilizes a database to store and manage generated tickets, providing API endpoints for interaction.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
   - [Installation](#installation)
   - [Configuration](#configuration)
5. [Usage](#usage)
6. [Database Setup](#database-setup)
7. [API Endpoints](#api-endpoints)

## 1. Introduction
Tambola Ticket Generator is crafted to create unique Tambola tickets following specific rules. It persists these generated tickets into a database and exposes a set of API endpoints to manage and retrieve them.

## 2. Features
- **Tambola Ticket Generation:** Generates unique Tambola tickets adhering to defined rules.
- **Database Storage:** Persists generated Tambola tickets in a database.
- **API Endpoints:** Offers endpoints to retrieve and manage Tambola tickets with pagination support.

## 3. Prerequisites
Before running the Tambola Ticket Generator, ensure you have the following installed:
- Node.js
- npm (Node.js package manager)
- Database (e.g., PostgreSQL, MySQL) - Ensure you have a running database, and the database URL is accessible.

## 4. Getting Started
### 4.1. Installation
```bash
# Clone the repository
git clone https://github.com/shashikant888/Tambola-Ticket-Generator.git

# Change into the project directory
cd tambola-ticket-generator

# Install dependencies
npm install
```
### 4.2. Configuration
Create a .env file in the project root with the following configuration:

```
DB_HOST=host
DB_USER=user_name
DB_PASSWORD=database_password
DB_NAME=database_name

PORT=3000
```
## 5. Usage
Start the application with:

```bash 
npm start
```
## 6. Database Setup
Ensure a running database and update '.env' file with the appropriate database details.

## 7. API Endpoints
 POST /tambola/generate-tickets
 
 - Generates new Tambola tickets.
- payload : {
    "numberOfSets": 1
    }
  
GET /tambola/all-tickets
- Fetches all Tambola tickets with pagination.
- payload : {
    "page":1,
    "pageSize":6
    }

DELETE /tambola/delete-ticket/:ticketId
- Deletes a Tambola ticket by ID.

DELETE /tambola/delete-all-tickets
- Deletes all Tambola tickets.

## working Video url 
🔗 [url](https://drive.google.com/file/d/157kB4FmQvphXSxAgu5qxhdYdexHla6BN/view)

# Thank You !
by...

 💙  SHASHIKANT VISHWAKARMA

📧 [email](shashikant.888.v@gmail.com) 

🔹[linkedIn](https://www.linkedin.com/in/shashikant-vishwakarma-a417a1202)
