
# Wolt Calculator
This is a delivery fee calculator web app built with React, TypeScript, and Bootstrap. The app allows users to input cart value, delivery distance, number of items, and order date/time to calculate the delivery fee based on specific rules.

# Prerequisites
Before running the app, make sure you have the following installed:

Node.js
npm

# Installation
Install dependencies: npm install
Start the development server: npm start

# Usage

Input fields:
Cart Value (€): Enter the value of the shopping cart in euros.
Delivery Distance (meters): Enter the distance between the store and the customer's location in meters.
Number of Items: Enter the number of items in the customer's shopping cart.
Order Date: Choose the date when the order is being made.
Order Time: Choose the time when the order is being made.

Test IDs:
cartValue
deliveryDistance
numberOfItems
orderDate
orderTime
The element containing the resulting fee calculated also has a data-test-id attribute of fee.

# Styling
The app uses Bootstrap and FontAwesome for styling. Custom styles have been added for a clean and user-friendly interface. The app is designed to be responsive, with specific styling adjustments for different screen sizes.

# Project Structure
src/
components/: Contains the main components of the app.
App.tsx: The main React component that renders the app.
FeeCalculator.tsx: Component responsible for calculating the delivery fee.
App.css: Custom styles for the app.

# Dependencies
react: v18.2.0
typescript: v4.9.5
bootstrap: v5.3.2
react-bootstrap: v2.10.0
fontawesome: (FontAwesome icons are used in the project)
date-fns-tz: v2.0.0

# Scripts
start: Start the development server.
build: Build the production-ready app.
test: Run tests.




