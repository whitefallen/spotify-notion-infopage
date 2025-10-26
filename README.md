# Notion Spotify Playlist - Info Page

This is an informative website for the [Notion Spotify Playlist](https://github.com/whitefallen/notion-spotify-playlist) project.

## About

This website provides information about the Notion Spotify Playlist application, which automatically creates monthly Spotify playlists based on your Notion artist database.

## Features

- **Modern Design**: Clean, responsive design that works on all devices
- **Informative Content**: Detailed explanation of the app's features and functionality
- **Visual Elements**: Includes Notion and Spotify logos for brand recognition
- **Interactive Navigation**: Smooth scrolling and animated elements
- **Call-to-Action**: Direct links to the GitHub repository

## Technologies Used

- HTML5
- **Tailwind CSS** - Utility-first CSS framework for styling
- Vanilla JavaScript (no framework dependencies)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the CSS:
   ```bash
   npm run build:css
   ```

3. Open `index.html` in your web browser, or use a local server:
   ```bash
   python3 -m http.server 8080
   ```

## Build Process

The project uses Tailwind CSS for styling. To build the CSS:

- **Build for production**: `npm run build:css` (minified)
- **Watch mode for development**: `npm run watch:css` (rebuilds on changes)

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by a GitHub Actions workflow that:

1. Installs Node.js dependencies
2. Builds the Tailwind CSS
3. Deploys to GitHub Pages

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # GitHub Pages deployment workflow
├── src/
│   └── input.css             # Tailwind CSS source file
├── index.html                # Main HTML file
├── styles.css                # Built CSS (generated from src/input.css)
├── script.js                 # JavaScript functionality
├── package.json              # Node.js dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # This file
```

## Related Projects

- [Notion Spotify Playlist](https://github.com/whitefallen/notion-spotify-playlist) - The main application

## License

This project is open source and available under the MIT License.