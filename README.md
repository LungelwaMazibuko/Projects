# Projects Repository

This repository contains a collection of my built websites and web projects. Each project can be viewed using Live Server, a development server with live reload capability.

## Table of Contents
- [Overview](#overview)
- [Requirements](#requirements)
- [Installation](#installation)
- [How to View Projects](#how-to-view-projects)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

## Overview

This repository serves as a portfolio of my web development projects. Each project is contained in its own directory and can be viewed locally using Live Server.

## Requirements

- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/) (or another code editor)
- [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/Projects.git
   ```

2. Navigate to the repository:
   ```bash
   cd Projects
   ```

3. If you're using VS Code, open the repository:
   ```bash
   code .
   ```

4. Install the Live Server extension in VS Code:
   - Click on the Extensions icon in the Activity Bar
   - Search for "Live Server"
   - Click "Install" on the extension by Ritwick Dey

## How to View Projects

### Using VS Code and Live Server:

1. Open the Projects repository in VS Code.
2. Navigate to the specific project directory you want to view.
3. Open the main HTML file of the project (usually `index.html`).
4. Right-click on the HTML file in the editor and select "Open with Live Server" or click on the "Go Live" button in the status bar at the bottom.
5. The project will open in your default web browser with a local development server (usually at http://127.0.0.1:5500 or similar).
6. Live Server will automatically reload the page when you make changes to any file in the project.

### Alternative Method (without VS Code):

If you're not using VS Code, you can use any local development server. Some options include:

- Python's built-in HTTP server:
  ```bash
  # For Python 3
  python -m http.server
  
  # For Python 2
  python -m SimpleHTTPServer
  ```
  Then open http://localhost:8000 in your browser.

- Node.js's http-server (requires npm):
  ```bash
  npm install -g http-server
  http-server
  ```
  Then open http://localhost:8080 in your browser.

## Project Structure

The repository is organized as follows:

```
Projects/
├── Project1/
│   ├── index.html
│   ├── css/
│   └── js/
├── Project2/
│   ├── index.html
│   ├── css/
│   └── js/
├── Project3/
│   ├── index.html
│   ├── css/
│   └── js/
└── ...
```

Each project directory contains all the necessary files for that specific website or web application.

## Troubleshooting

- **Live Server doesn't start**: Make sure the Live Server extension is properly installed in VS Code. Restart VS Code if necessary.
- **Page doesn't load**: Check if the path to your HTML file is correct and that all references to CSS, JavaScript, and other assets use the correct relative paths.
- **Conflicts with other servers**: If you already have a server running on the same port, Live Server might not start. Check your terminal or task manager for already running server processes.

## Contact

If you have any questions or suggestions regarding these projects, feel free to contact me:

- GitHub: [lungelwa-mazibuko](https://github.com/lungelwa-mazibuko)
- Email: lungelwa.mazibuko.dev@gmail.com

---

*Last updated: April 9, 2025*
