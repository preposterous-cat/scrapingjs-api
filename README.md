# Simple Scraping Tool with Express.js

This project is a simple web scraping tool built using Node.js and Express.js. It allows users to scrape specific HTML elements from a given URL and returns the text content of those elements.

## Features

- Scrape content from any given URL
- Support for specifying HTML tag, class, and ID to scrape
- Clean and return only text content, removing all HTML tags

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/scraping-tool.git
   cd scraping-tool
   
2. Install the dependencies
   ```bash
   npm install

## Usage
1. Start the server:
   ```bash
   node main/index.js
2. The server will run on port 3000 by default. You can access the scraping tool by visiting http://localhost:3000.
3. To scrape a website, make a GET request to the /scrap endpoint with the following query parameters:
- url (required): The URL of the website to scrape.
- tag (optional): The HTML tag to target (default is div).
- class (optional): The class name to target.
- id (optional): The ID to target.
Example:
  ```bash
  curl "http://localhost:3000/scrap?url=https://example.com&tag=p&class=text&"

## API Endpoints
- GET /: Returns a welcome message.
- GET /scrap: Scrapes the specified URL and returns the text content of the specified elements.

## Deployment
This project is deployed on Vercel and can be accessed at https://scrapingjs-api.vercel.app/
