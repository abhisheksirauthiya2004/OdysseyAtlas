# Odyssey Atlas 🌍

## Overview
Odyssey Atlas is an interactive travel blog website where users can explore destinations on a map, read and share travel stories, and book trips to exciting locations around the world.

## Features
- 📄 **Multiple Pages**: Home, Map, Blog, Add Post, About, Book, and Community
- 🗺️ **Interactive Map**: Explore destinations with filters, markers, and information popups
- 📝 **Blog System**: Read posts, search, filter by category, like, and comment
- 🖼️ **Image Gallery**: View travel photos in a lightbox display
- ✍️ **Content Creation**: Add your own travel posts with images and location tagging
- 📅 **Booking System**: Book trips by selecting destinations and dates
- 🔒 **User System**: Login to create content (demo: username: `user`, password: `pass`)
- 📱 **Responsive Design**: Works on all devices with collapsible navigation

## Setup Instructions

### 1. Download the Project
```bash
git clone https://github.com/abhisheksirauthiya2004/OdysseyAtlas.git
cd OdysseyAtlas
```

### 2. Add Required Images
Create an `images/` folder in the project directory and add:
- `image1.jpg` through `image8.jpg` (sample blog images)
- `hero.jpg` (homepage background)
- `fallback.jpg` (backup image)

Your folder structure should look like:
```
OdysseyAtlas/
└── images/
    ├── image1.jpg
    ├── image2.jpg
    ...
    ├── image8.jpg
    ├── fallback.jpg
    └── hero.jpg
```

### 3. Run the Website
**Option 1 (Recommended)**: Use a local server
```bash
npm install -g live-server
live-server
```
This will open the website at `http://localhost:8080`

**Option 2**: Open `index.html` directly in your browser
* Note: Some features may not work without a server

### 4. Important Note
The project requires an internet connection to load external libraries:
- Leaflet.js for maps
- Font Awesome for icons

## Project Structure
```
OdysseyAtlas/
├── index.html          # Homepage
├── map.html            # Interactive map with filters
├── blog.html           # Blog listing and search
├── add-post.html       # Post creation form
├── about.html          # Information about the site
├── book.html           # Trip booking system
├── community.html      # Community features
├── styles.css          # Main stylesheet
├── script.js           # Core functionality
├── data.js             # Sample travel data
├── images/             # Image assets
└── README.md           # This documentation
```

## How to Use

### Navigation
Use the top menu to access different sections of the website.

### Map Page
- Toggle filters to find destinations by category (Adventure, Culture, etc.)
- Click on map markers to view destination details
- Use the "Book Now" button in popups to navigate to booking

### Blog Page
- Browse travel stories with image thumbnails
- Search by keyword or filter by category
- Click on posts to read full content
- Like and comment on posts (requires login)
- Click images to view larger versions

### Add Post
- Log in with demo credentials (username: `user`, password: `pass`)
- Fill in the form with title, content, and location
- Upload an image for your post
- Submit to publish to the blog

### Booking
- Select a destination from the dropdown
- Choose arrival and departure dates
- Fill in traveler information
- Submit to receive booking confirmation

### Mobile Use
- Tap the hamburger menu icon to open/close navigation
- All features are optimized for smaller screens

## Dependencies
- Leaflet.js (map functionality)
- Leaflet.MarkerCluster (marker grouping)
- Font Awesome (icons)

## Additional Information
This project was created as a demonstration of front-end web development skills using HTML, CSS, and JavaScript.

---

you can also check my project live:-
https://abhisheksirauthiya2004.github.io/OdysseyAtlas/

🌟 **Enjoy exploring with Odyssey Atlas!** 🌟



