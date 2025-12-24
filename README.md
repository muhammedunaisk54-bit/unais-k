# Portfolio Project

A premium, high-performance personal portfolio website built with modern web technologies. This project is designed to run completely offline with local dependencies.

## 🛠️ Technology Stack

This project uses the following technologies:

*   **HTML5**: Semantic markup for the structure of the pages.
*   **CSS3 (Tailwind CSS)**: Utility-first CSS framework for styling, animations, and responsive design.
    *   *Configuration*: Defined in `tailwind.config.js`.
    *   *Source*: `css/input.css`.
    *   *Output*: `css/output.css`.
*   **JavaScript (Vanilla)**: Lightweight logic for interactive elements like the starfield background, meteor shower animations, and scroll reveal effects. No heavy framework (React/Vue/Angular) is required for run-time, keeping it fast.
*   **Node.js & npm**: Used for the development environment to manage dependencies (Tailwind CSS) and run the local server.

## 📂 Project Structure

```
E:\portfolio\
├── css\
│   ├── input.css       # Source CSS file (Edit this for custom styles)
│   ├── output.css      # Generated CSS file (Do not edit directly)
│   └── all.min.css     # Font Awesome icons (Local copy)
├── fonts\              # Local Inter font files
├── webfonts\           # Local Font Awesome font files
├── node_modules\       # Node.js dependencies
├── index.html          # Main website file
├── tailwind.config.js  # Tailwind CSS configuration (Colors, fonts, animations)
├── package.json        # Project metadata and scripts
└── favicon.svg         # Site icon
```

## 🚀 How to Run & Maintain

### 1. Prerequisites
Ensure you have **Node.js** installed on your computer.

### 2. Setup (First Time Only)
If you move this project or delete `node_modules`, reinstall dependencies:
```bash
npm install
```

### 3. Running the Website
To start a local server and view the site:
```bash
npx http-server . -o -c-1
```
*   This will open your default browser to `http://127.0.0.1:8080`.
*   To stop the server, press `Ctrl+C` in the terminal.

### 4. Making Changes

**Editing Content:**
*   Open `index.html` in your text editor.
*   Modify text, links, and images directly in the HTML.

**Editing Styles:**
1.  Modifying `index.html` classes: Tailwind allows you to styles directly in HTML.
2.  Modifying Custom CSS: Edit `css/input.css`.
3.  **Important:** After changing specific Tailwind classes or `input.css`, you must rebuild the CSS file:
    ```bash
    npx tailwindcss -i ./css/input.css -o ./css/output.css
    ```
    *   *Tip:* You can run this in "watch" mode to automatically update while you edit:
        ```bash
        npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
        ```

## 🎨 Customization Guide

*   **Colors**: defined in `tailwind.config.js` under `theme.extend.colors`.
*   **Animations**: Javascript logic for the stars and meteors is located at the bottom of `index.html` inside the `<script>` tag.
