Odyssey Atlas
A dynamic, multi-page travel blog website with an interactive map, inspired by travelmap.net. Built with HTML, CSS, and JavaScript, using Leaflet.js and Font Awesome, with custom CSS for styling.
Features

Multi-Page Structure: Home, Map, Blog, Add Post, and About pages.
Interactive Map: Custom map with marker clustering, image popups, and date range filtering.
Dynamic Content: Posts stored in localStorage with search, filters, likes, and comments.
Custom CSS: Parallax heroes, gradient cards, animations, and lightbox gallery without Tailwind.
Add Posts: Form with image preview, coordinate validation, and timestamp.
User Authentication: Basic login/logout system to restrict Add Post access.
Responsive Design: Mobile-friendly with collapsible navbar.
Contact Form: Simulated submission on About page.
Search History: Displays recent search terms on the Blog page.
Image Gallery: Lightbox effect for viewing larger images on the Blog page.

Setup

Save all files in a directory named OdysseyAtlas.
Create an images/ folder and add the following images: image1.jpg to image8.jpg, fallback.jpg, and hero.jpg.
Open index.html in a web browser.
Ensure an internet connection for CDN-hosted libraries (Leaflet.js, Leaflet.MarkerCluster, Font Awesome).

Technologies

HTML5: Page structure
CSS3: Custom styling and animations
JavaScript: Interactivity and storage
Leaflet.js: Map with CartoDB tiles
Font Awesome: Icons

File Structure

index.html: Homepage with login
map.html: Interactive map with date filters
blog.html: Blog with gallery and search history
add-post.html: Add post form with timestamp
about.html: About and contact
styles.css: Custom CSS
script.js: JavaScript logic
data.js: Initial travel data with timestamps
images/: Folder containing static images
README.md: Documentation

Usage

Navigate: Use the navbar to switch pages.
Map: Filter by category, search, or date range; click markers for details.
Blog: Search or filter posts; view images in a lightbox; see recent searches.
Add Post: Log in, then enter title, content, category, coordinates, image path, and date (requires login).
About: View mission and submit a contact form.
Mobile: Toggle navbar via menu icon.
Login: Use username "user" and password "pass" to access Add Post.

Notes

Coordinates must be valid (lat: -90 to 90, lng: -180 to 180).
Image paths should be relative to the images/ folder (e.g., images/my-image.jpg).
Likes and comments persist in localStorage.
Extendable with backend or geocoding API.

License
MIT License


