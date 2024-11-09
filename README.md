# My Store – Frontend

This is the frontend client for the **My Store** e-commerce application, built with **Angular** and styled using **Tailwind CSS**.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Running the Application](#running-the-application)
7. [Deployment](#deployment)
8. [Technologies Used](#technologies-used)
9. [Folder Structure](#folder-structure)
10. [Contact](#contact)

---

## Project Overview

This Angular application serves as the client for the My Store platform, connecting with the backend API to retrieve and manage product data, handle sales orders, and provide an interactive user experience.

---

## Features

- **Product Listing**: Browse a list of products with filtering capabilities.
- **Search Functionality**: Real-time search bar for finding products by name.
- **Product Details**: View detailed information for each product.
- **Order Management**: Create and manage sales orders.
- **Responsive Design**: Styled with Tailwind CSS for a responsive and modern UI.

---

## Prerequisites

Before setting up the frontend application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://npmjs.com/)
- Angular CLI:

    ```bash
    npm install -g @angular/cli
    ```

---

## Installation

1. **Clone the Repository**:

    ```bash
    git clone <frontend-repo-url>
    cd frontend
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

---

## Configuration

Configure the API base URL in the environment files to point to the backend API:

1. **Development Configuration**:
   - Open `src/environments/environment.ts` and set `apiUrl` to your local backend API URL.

    ```typescript
    export const environment = {
      production: false,
      apiUrl: 'http://localhost:3000/api'  // Local backend URL
    };
    ```

2. **Production Configuration**:
   - Open `src/environments/environment.prod.ts` and set `apiUrl` to your deployed backend API URL.

    ```typescript
    export const environment = {
      production: true,
      apiUrl: 'https://orderease-sll9.onrender.com/api'  // Deployed backend URL
    };
    ```

---

## Running the Application

1. **Start the Development Server**:

    ```bash
    ng serve
    ```

2. **Access the Application**:
   - Open your browser and go to `http://localhost:4200`.

---

## Deployment

You can deploy the Angular application on platforms like **Vercel**, **Netlify**, or **GitHub Pages**. Below are the steps to deploy on **Vercel**:

1. **Push your code to GitHub** (or any other Git hosting platform).
2. **Deploy on Vercel**:
   - Log in to [Vercel](https://vercel.com/) and import your repository.
   - During deployment, set the **Environment Variables** for `apiUrl` in Vercel’s dashboard:
     - `production.apiUrl` should be set to `https://orderease-sll9.onrender.com/api`.

3. **Update Angular Production Config**:
   - Make sure `environment.prod.ts` is configured to use the correct production `apiUrl` before deployment.

---

## Technologies Used

- **Angular** – Frontend framework for building dynamic single-page applications.
- **Tailwind CSS** – Utility-first CSS framework for custom, responsive designs.
- **Angular Router** – Handles navigation and routing.
- **HTTPClient** – For API requests to the backend server.

---

## Folder Structure

```plaintext
src
├── app
│   ├── components       # Shared components like header, footer
│   ├── services         # Services for handling API requests
│   ├── pages            # Different pages (e.g., home, products, about)
│   └── app.component.ts # Root component
├── environments         # Environment-specific configuration
└── assets               # Static assets
