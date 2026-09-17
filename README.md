# 🎬 Movie Explorer

A responsive **Movie Explorer Application** built with **React** that allows users to discover movies/shows, search by title, and view detailed information through an interactive modal.

## 🚀 Live Demo

🔗 **Live Site:** https://cinevia-six.vercel.app/

## 📂 Repository

🔗 **GitHub:** https://github.com/visiovirex/cinevia

---

## 📌 About The Project

**Movie Explorer** is a React-based application designed to provide a simple and interactive way to explore movies and TV shows.

Users can browse available shows, search for specific titles, and open a detailed modal to view additional information about a selected movie or show.

The project uses the **TVMaze API** to fetch real-time show data.

---

## ✨ Features

### 🏠 Home Page

* Responsive navigation bar
* Application logo/brand name
* Navigation links
* Call-to-action button for exploring movies
* Attractive movie-themed hero banner
* Short application description
* Responsive footer
* Copyright information

### 🎬 Movie Listing Page

* Browse available movies/shows
* Responsive movie card grid
* Movie/show poster images
* Movie/show title
* Release year/date
* Rating
* `See Details` button
* Dynamic search functionality

### 🔍 Search Functionality

Users can search for movies or shows by title.

The application uses the TVMaze search endpoint:

```text
GET https://api.tvmaze.com/search/shows?q=:query
```

Example:

```text
GET https://api.tvmaze.com/search/shows?q=girls
```

### 🎞️ Movie Details Modal

Clicking the **See Details** button opens an interactive modal containing:

* Large poster/backdrop image
* Movie/show title
* Summary/overview
* Rating
* Release date
* Genre
* Additional information available from the API
* Close button

The modal can be closed using the `✕` button.

---

## 🛠️ Technology Stack

* **JavaScript**
* **React**
* **Tailwind CSS**
* **TVMaze API**
* **React Router**

---

## 🌐 API

This project uses the free **TVMaze API** to retrieve show information.

### Get All Shows

```text
GET https://api.tvmaze.com/shows
```

### Search Shows

```text
GET https://api.tvmaze.com/search/shows?q=:query
```

### TVMaze Documentation

https://www.tvmaze.com/api

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

Movie cards use a responsive **CSS Grid/Flexbox** layout to provide a consistent browsing experience.

---

## 📁 Project Structure


movie-explorer/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieModal.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md


> The structure may vary depending on the final implementation.

---



## 👨‍💻 Author

**MD Mainul Islam Rabby**


---


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
