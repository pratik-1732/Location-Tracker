
```markdown
# Real-Time Location Tracking App

This is a real-time location tracking app built with **Node.js**, **Express**, **Socket.IO**, and **Leaflet**. It allows users to share their geolocation with others and view their positions on a map.

## Features

- Real-time geolocation tracking using the **Geolocation API**.
- **Socket.IO** for real-time communication between users.
- **Leaflet** for displaying a live map of user locations.
- Server-side handling of user locations and connections using **Node.js** and **Express**.

## Tech Stack

- **Backend**: Node.js, Express.js, Socket.IO
- **Frontend**: HTML, CSS, JavaScript, Leaflet.js
- **Environment Variables**: .env file for sensitive configuration
- **Real-time Communication**: Socket.IO
- **Map**: Leaflet.js
- **Deployment**: Render (for hosting)

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Node package manager
- [Git](https://git-scm.com/) - Version control system

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/pratik-1732/Location-Tracker.git
```

### 2. Install Dependencies

Navigate to the project folder and install the required dependencies:

```bash
cd your-repository-name
npm install
```

### 3. Create .env File

Create a `.env` file in the root of your project and add the necessary environment variables. For this app, you can start with:

```
PORT=3000
```

### 4. Run the App Locally

Start the application using `npm start`:

```bash
npm start
```

This will start the server at `http://localhost:3000`. Open this URL in your browser to test the application locally.

### 5. Access the Map

The app uses **Leaflet.js** to display the map. Users' real-time locations are tracked and updated on the map as they move. The app uses **Socket.IO** for real-time communication and updates.

## Deployment

The app is deployed on **Render**. You can access it by visiting the following URL:

[https://your-app-name.onrender.com](https://location-tracker-y30h.onrender.com/)

## File Structure

- `public/` - Contains the frontend assets like images, styles, and scripts.
- `views/` - Contains EJS templates for rendering the views.
- `server.js` - Main server file that sets up the backend, listens for connections, and handles geolocation updates.
- `.env` - Stores environment variables.
- `package.json` - Contains project dependencies and scripts.

## Contributing

If you want to contribute to this project:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes and open a pull request.
