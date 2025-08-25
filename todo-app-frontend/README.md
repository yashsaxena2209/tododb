# Full-Stack To-Do Application (MERN-like with TypeScript)

This is a complete full-stack web application featuring a robust backend API built with Node.js, Express, and TypeScript, and a modern, reactive frontend built with React and TypeScript. The application is designed to be a feature-rich, production-ready to-do list manager.

This version of the application provides a stable foundation with core task management functionalities.

## Features

*   *Create Tasks:* Easily add new tasks with a title and a priority level (low, medium, high).
*   *View All Tasks:* See a clean, real-time list of all your to-do items.
*   *Mark as Complete:* Toggle the completion status of any task with a checkbox.
*   *Delete Tasks:* Remove tasks you no longer need.
*   *User Feedback:* Receive instant, non-intrusive toast notifications for all actions (create, update, delete).
*   *Responsive Design:* The user interface is designed to work smoothly on both desktop and mobile devices.

## Tech Stack

### Backend
*   *Runtime:* Node.js
*   *Framework:* Express.js
*   *Language:* TypeScript
*   *Database:* MongoDB with Mongoose ODM
*   *Security:* Helmet for setting secure HTTP headers, Express Rate Limit for abuse prevention.
*   *Validation:* Joi for robust request body validation.
*   *Logging:* Morgan for HTTP request logging.

### Frontend
*   *Library:* React
*   *Language:* TypeScript
*   *UI:* Material-UI (MUI) for a professional and clean component library.
*   *State Management:* Zustand for simple and powerful global state.
*   *API Communication:* Axios for making HTTP requests to the backend.
*   *Notifications:* React Hot Toast for user feedback.

## Project Structure

The project is organized in a monorepo-like structure with two main directories:


.
├── todo-app/           # The backend Node.js/Express application
└── todo-app-frontend/  # The frontend React application


## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
*   [Node.js](https://nodejs.org/en/) (v16 or later recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js)
*   [MongoDB](https://www.mongodb.com/try/download/community) (ensure the MongoDB server is running)
*   A code editor like [Visual Studio Code](https://code.visualstudio.com/)

## Setup and Installation

### 1. Clone the Repository
First, clone this repository to your local machine.

### 2. Backend Setup
Navigate into the backend directory and install the dependencies.

bash
cd todo-app
npm install


Next, create a .env file in the root of the todo-app directory. This file will hold your environment variables. Copy the following into it:

env
# .env
MONGO_URI=mongodb://localhost:27017/todoapp
PORT=5000

*   MONGO_URI: The connection string for your local MongoDB database.
*   PORT: The port on which the backend server will run.

### 3. Frontend Setup
In a separate terminal, navigate into the frontend directory and install the dependencies.

bash
cd todo-app-frontend
npm install


## Running the Application

To run the application, you need to have three processes running simultaneously: the database, the backend server, and the frontend server.

### 1. Start the Database
Ensure your local MongoDB server is running. If you installed it as a service, it should already be running in the background.

### 2. Start the Backend Server
In your terminal inside the todo-app directory, run:

bash
npm run dev

The API server should now be running on http://localhost:5000. You should see a "MongoDB Connected" message in the console.

### 3. Start the Frontend Server
In your second terminal inside the todo-app-frontend directory, run:

bash
npm start

The React development server will start, and your application will automatically open in your web browser at http://localhost:3000.

You can now use the application!