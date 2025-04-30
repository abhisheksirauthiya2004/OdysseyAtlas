Odyssey Atlas 🌍
Odyssey Atlas is a travel blog website where you can explore destinations, book trips, and share stories! It has an interactive map, blog posts, and a booking system, all built with HTML, CSS, and JavaScript. It uses Leaflet.js for maps and Font Awesome for icons, with custom styling for a great look.
✨ Visit the Live Project! ✨Click here to try it!

What’s Inside? (Features)

📄 Multiple Pages: Home, Map, Blog, Add Post, About, Book, and Community pages.
🗺️ Interactive Map: See destinations on a map with filters, markers, and popups.
📝 Blog Posts: Read travel stories, search, filter, like, and comment on posts.
🖼️ Image Gallery: Click images to view them larger in a lightbox.
✍️ Add Posts: Create your own travel posts with images and locations (needs login).
📅 Booking System: Book trips by selecting destinations and dates.
🔒 Login System: Log in to add posts (use username: user, password: pass).
📱 Mobile-Friendly: Works on phones with a menu that opens/closes.
🔍 Search History: See your recent searches on the Blog page.
🎨 Custom Design: Beautiful styling with animations and gradients (no Tailwind).

How to Set Up and Run
Follow these simple steps to try Odyssey Atlas on your computer:

Download the Project:

Clone the repository:
git clone https://github.com/abhisheksirauthiya2004/OdysseyAtlas.git
cd OdysseyAtlas




Add Images:

Create an images/ folder in the OdysseyAtlas directory.

Add these images (or use your own):

image1.jpg to image8.jpg (for blog posts)
fallback.jpg (backup image)
hero.jpg (for the homepage background)


Folder should look like:
OdysseyAtlas/
└── images/
    ├── image1.jpg
    ├── image2.jpg
    ├── ...
    ├── image8.jpg
    ├── fallback.jpg
    └── hero.jpg




Run the Project:

Option 1 (Best): Use a local server:
npm install -g live-server
live-server

This opens the website at http://localhost:8080.

Option 2: Open index.html in your browser (some features may need a server).



Internet Needed:

The project uses online libraries (Leaflet.js, Font Awesome), so connect to the internet.



What You Need (Dependencies)
These are loaded automatically from the internet (no installation needed):

Leaflet.js: For the map.
Leaflet.MarkerCluster: To group map markers.
Font Awesome: For icons like hearts and tags.

Project Files
Here’s what’s in the project:
OdysseyAtlas/
├── index.html          # Homepage
├── map.html            # Map page with filters
├── blog.html           # Blog page with posts
├── add-post.html       # Form to add new posts
├── about.html          # About page
├── book.html           # Booking form
├── community.html      # Community page
├── styles.css          # Styling for the website
├── script.js           # Code for interactivity
├── data.js            # Sample travel data
├── images/             # Folder for images
└── README.md           # This guide

How to Use It
Here’s how to explore Odyssey Atlas:

Navigate: Click the top menu (Home, Map, Blog, etc.) to visit pages.
Map Page:
Use filters (Adventure, Culture, etc.) to find destinations.
Click markers to see details and book.


Blog Page:
Search or filter posts by category.
Click a post to read more, like, or comment.
View images in a lightbox by clicking them.


Add Post:
Log in (username: user, password: pass).
Add a title, content, image, and location.


Book a Trip:
Go to the Book page, pick a destination, and enter dates.
Submit to see a confirmation.


Mobile:
Tap the menu icon to open/close the navigation.



License
This project uses the MIT License. You can use, change, or share it freely!

you can see my project live on 
https://abhisheksirauthiya2004.github.io/OdysseyAtlas/

🌟 Enjoy Odyssey Atlas! If you have questions, visit the GitHub page. 🌟



