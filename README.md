My Store – Frontend
This is the frontend application for the My Store e-commerce platform, built with Angular and styled using Tailwind CSS. It provides a user-friendly interface for browsing and managing products, making purchases, and interacting with the store’s features.

Table of Contents
Project Overview
Features
Prerequisites
Installation
Configuration
Running the Application
Deployment
Technologies Used
Project Overview
This Angular application serves as the client for the My Store platform, connecting with the backend API to retrieve and manage product data, handle sales orders, and provide an interactive user experience.

Features
Product Listing: Browse a list of products with filtering capabilities.
Search Functionality: Real-time search bar for finding products by name.
Product Details: View detailed information for each product.
Order Management: Create and manage sales orders.
Responsive Design: Styled with Tailwind CSS for a responsive and modern UI.
Prerequisites
Before setting up the frontend application, ensure you have the following installed:

Node.js and npm

Angular CLI: Install globally with:

bash
Copy code
npm install -g @angular/cli
Installation
Clone the Repository:

bash
Copy code
git clone <frontend-repo-url>
cd frontend
Install Dependencies:

bash
Copy code
npm install
Configuration
Configure the API base URL in the environment files to point to the backend API:

Development Configuration:

Open src/environments/environment.ts and set apiUrl to your local backend API URL.
typescript
Copy code
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'  // Local backend URL
};
Production Configuration:

Open src/environments/environment.prod.ts and set apiUrl to your deployed backend API URL.
typescript
Copy code
export const environment = {
  production: true,
  apiUrl: 'https://orderease-sll9.onrender.com/api'  // Deployed backend URL
};
Running the Application
Start the Development Server:

bash
Copy code
ng serve
Access the Application:

Open your browser and go to http://localhost:4200.
Deployment
You can deploy the Angular application on platforms like Vercel, Netlify, or GitHub Pages. Below are the steps to deploy on Vercel:

Push your code to GitHub (or any other Git hosting platform).

Deploy on Vercel:

Log in to Vercel and import your repository.
During deployment, set the Environment Variables for apiUrl in Vercel’s dashboard:
production.apiUrl should be set to https://orderease-sll9.onrender.com/api.
Update Angular Production Config:

Make sure environment.prod.ts is configured to use the correct production apiUrl before deployment.
Technologies Used
Angular – Frontend framework for building dynamic single-page applications.
Tailwind CSS – Utility-first CSS framework for custom, responsive designs.
Angular Router – Handles navigation and routing.
HTTPClient – For API requests to the backend server.
Folder Structure
plaintext
Copy code
src
├── app
│   ├── components       # Shared components like header, footer
│   ├── services         # Services for handling API requests
│   ├── pages            # Different pages (e.g., home, products, about)
│   └── app.component.ts # Root component
├── environments         # Environment-specific configuration
└── assets               # Static assets
Contact
For any questions or issues, please open an issue on the GitHub repository.
