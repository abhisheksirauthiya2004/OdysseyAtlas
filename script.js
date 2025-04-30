document.addEventListener('DOMContentLoaded', () => {
    // Language Support
    const translations = {
        en: {
            home: "Home",
            map: "Map",
            blog: "Blog",
            addPost: "Add Post",
            about: "About",
            community: "Community",
            bookNow: "Book Now",
            login: "Login",
            logout: "Logout",
            featuredDestinations: "Featured Destinations",
            subscribe: "Subscribe",
            emailPlaceholder: "Enter your email",
            discoverJourney: "Discover Your Journey",
            filters: "Filters",
            searchPlaceholder: "Search destinations or tags...",
            all: "All",
            dateRange: "Date Range",
            startDate: "Start Date",
            endDate: "End Date",
            season: "Season",
            allSeasons: "All Seasons",
            continent: "All Continents",
            country: "All Countries",
            city: "All Cities",
            mapStyle: "Street View",
            myLocation: "My Location",
            fullscreen: "Fullscreen",
            travelStories: "Travel Stories",
            recentSearches: "Recent Searches",
            favorites: "Favorites",
            myTripLists: "My Trip Lists",
            newTripName: "New Trip Name",
            createTrip: "Create Trip",
            bookYourAdventure: "Book Your Adventure",
            reserveSpot: "Reserve your spot at stunning destinations!",
            destination: "Destination",
            selectDestination: "Select a Destination",
            startDateBooking: "Start Date",
            endDateBooking: "End Date",
            travelers: "Number of Travelers",
            emailBooking: "Email",
            yourEmail: "Your email",
            submitBooking: "Submit Booking",
            bookingConfirmed: "Booking Confirmed!",
            close: "Close",
            meetOurAuthors: "Meet Our Authors",
            authorIntro: "Our talented authors share their travel experiences to inspire your next adventure!"
        },
        es: {
            home: "Inicio",
            map: "Mapa",
            blog: "Blog",
            addPost: "Agregar Publicación",
            about: "Acerca",
            community: "Comunidad",
            bookNow: "Reservar Ahora",
            login: "Iniciar Sesión",
            logout: "Cerrar Sesión",
            featuredDestinations: "Destinos Destacados",
            subscribe: "Suscribirse",
            emailPlaceholder: "Ingresa tu correo",
            discoverJourney: "Descubre Tu Viaje",
            filters: "Filtros",
            searchPlaceholder: "Busca destinos o etiquetas...",
            all: "Todo",
            dateRange: "Rango de Fechas",
            startDate: "Fecha de Inicio",
            endDate: "Fecha de Fin",
            season: "Temporada",
            allSeasons: "Todas las Temporadas",
            continent: "Todos los Continentes",
            country: "Todos los Países",
            city: "Todas las Ciudades",
            mapStyle: "Vista de Calle",
            myLocation: "Mi Ubicación",
            fullscreen: "Pantalla Completa",
            travelStories: "Historias de Viaje",
            recentSearches: "Búsquedas Recientes",
            favorites: "Favoritos",
            myTripLists: "Mis Listas de Viajes",
            newTripName: "Nombre del Nuevo Viaje",
            createTrip: "Crear Viaje",
            bookYourAdventure: "Reserva Tu Aventura",
            reserveSpot: "¡Reserva tu lugar en destinos impresionantes!",
            destination: "Destino",
            selectDestination: "Selecciona un Destino",
            startDateBooking: "Fecha de Inicio",
            endDateBooking: "Fecha de Fin",
            travelers: "Número de Viajeros",
            emailBooking: "Correo Electrónico",
            yourEmail: "Tu correo",
            submitBooking: "Enviar Reserva",
            bookingConfirmed: "¡Reserva Confirmada!",
            close: "Cerrar",
            meetOurAuthors: "Conoce a Nuestros Autores",
            authorIntro: "¡Nuestros talentosos autores comparten sus experiencias de viaje para inspirar tu próxima aventura!"
        }
    };

    // Language Switcher
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (e) => {
            const lang = e.target.value;
            document.documentElement.setAttribute('data-lang', lang);
            updateLanguage(lang);
            localStorage.setItem('language', lang);
        });

        const savedLang = localStorage.getItem('language') || 'en';
        languageSwitcher.value = savedLang;
        document.documentElement.setAttribute('data-lang', savedLang);
        updateLanguage(savedLang);
    }

    function updateLanguage(lang) {
        const t = translations[lang];
        const elements = {
            '.nav-link[href="index.html"]': t.home,
            '.nav-link[href="map.html"]': t.map,
            '.nav-link[href="blog.html"]': t.blog,
            '.nav-link[href="add-post.html"]': t.addPost,
            '.nav-link[href="about.html"]': t.about,
            '.nav-link[href="community.html"]': t.community,
            '.nav-link[href="book.html"]': t.bookNow,
            '#login-btn': t.login,
            '#logout-btn': t.logout,
            '#featured-posts + .section-title': t.featuredDestinations,
            '#subscribe-form + .section-title': t.subscribe,
            '#subscribe-email': { attr: 'placeholder', value: t.emailPlaceholder },
            '.map-section .section-title': t.discoverJourney,
            '.sidebar-title': [
                t.filters,
                t.recentSearches,
                t.favorites,
                t.myTripLists
            ],
            '#search-input': { attr: 'placeholder', value: t.searchPlaceholder },
            '#filter-all': t.all,
            '.filter-date .form-label': t.dateRange,
            '#start-date': { attr: 'placeholder', value: t.startDate },
            '#end-date': { attr: 'placeholder', value: t.endDate },
            '.filter-season .form-label': t.season,
            '#season-filter option[value="all"]': t.allSeasons,
            '.filter-location .form-label:nth-child(1)': t.continent,
            '#continent-filter option[value="all"]': t.continent,
            '.filter-location .form-label:nth-child(3)': t.country,
            '#country-filter option[value="all"]': t.country,
            '.filter-location .form-label:nth-child(5)': t.city,
            '#city-filter option[value="all"]': t.city,
            '#map-style option[value="street"]': t.mapStyle,
            '#user-location': t.myLocation,
            '#fullscreen-map': t.fullscreen,
            '.blog-section + .section-title': t.travelStories,
            '#new-trip-name': { attr: 'placeholder', value: t.newTripName },
            '#create-trip': t.createTrip,
            '.section-title:has(i.fas.fa-calendar-check)': t.bookYourAdventure,
            '.section-subtitle': t.reserveSpot,
            '.form-group:nth-child(1) .form-label': t.destination,
            '#booking-destination option[value=""]': t.selectDestination,
            '.form-group:nth-child(2) .form-label': t.startDateBooking,
            '.form-group:nth-child(3) .form-label': t.endDateBooking,
            '.form-group:nth-child(4) .form-label': t.travelers,
            '.form-group:nth-child(5) .form-label': t.emailBooking,
            '#booking-email': { attr: 'placeholder', value: t.yourEmail },
            '#booking-form .btn-primary': t.submitBooking,
            '#booking-confirmation .section-title': t.bookingConfirmed,
            '#close-confirmation': t.close,
            '#authors-section .section-title': t.meetOurAuthors,
            '#authors-section .section-subtitle': t.authorIntro
        };

        for (const selector in elements) {
            if (Array.isArray(elements[selector])) {
                document.querySelectorAll(selector).forEach((el, index) => {
                    if (elements[selector][index]) el.textContent = elements[selector][index];
                });
            } else if (typeof elements[selector] === 'object') {
                const el = document.querySelector(selector);
                if (el) el.setAttribute(elements[selector].attr, elements[selector].value);
            } else {
                const el = document.querySelector(selector);
                if (el) el.textContent = elements[selector];
            }
        }
    }

    // Navigation Toggle
    const navToggle = document.getElementById('toggle-nav');
    const navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Authentication
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const loginSection = document.getElementById('login-section');
    const loginForm = document.getElementById('login-form');
    const authSection = document.getElementById('auth-section');

    if (loginBtn && logoutBtn && authSection) {
        const user = localStorage.getItem('user');
        if (user) {
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'inline';
            if (loginSection) loginSection.style.display = 'none';
        }

        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginSection) loginSection.style.display = loginSection.style.display === 'none' ? 'block' : 'none';
        });

        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('user');
            loginBtn.style.display = 'inline';
            logoutBtn.style.display = 'none';
            if (loginSection) loginSection.style.display = 'block';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                localStorage.setItem('user', username);
                if (loginBtn) loginBtn.style.display = 'none';
                if (logoutBtn) logoutBtn.style.display = 'inline';
                if (loginSection) loginSection.style.display = 'none';
                loginForm.reset();
            }
        });
    }

    // Featured Posts (Home Page)
    const featuredPosts = document.getElementById('featured-posts');
    if (featuredPosts) {
        const recentPosts = [...initialTravelData]
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, 3);

        recentPosts.forEach(post => {
            const card = document.createElement('div');
            card.className = 'blog-card';
            card.innerHTML = `
                <img src="${post.image || 'images/fallback.jpg'}" alt="${post.title}">
                <div class="content">
                    <h3>${post.title}</h3>
                    <p class="category"><i class="fas fa-tag"></i> ${post.category}</p>
                    <p>${post.content.substring(0, 100)}...</p>
                    <p class="likes"><i class="fas fa-heart"></i> ${post.likes} Likes</p>
                    <p class="comments"><i class="fas fa-comment"></i> ${post.comments.length} Comments</p>
                    <p class="ratings"><i class="fas fa-star"></i> Average Rating: ${post.ratings.length ? (post.ratings.reduce((a, b) => a + b, 0) / post.ratings.length).toFixed(1) : 0}</p>
                    ${post.sponsored ? '<p class="sponsored"><i class="fas fa-ad"></i> Sponsored</p>' : ''}
                    <a href="book.html?destinationId=${post.id}" class="book-now"><i class="fas fa-calendar-check"></i> Book Now</a>
                </div>
            `;
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('book-now')) {
                    openModal(post);
                }
            });
            featuredPosts.appendChild(card);
        });
    }

    // Subscribe Form
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('subscribe-email').value;
            if (email) {
                alert('Subscribed successfully!');
                subscribeForm.reset();
            }
        });
    }

    // Map Page
    const mapElement = document.getElementById('map');
    if (mapElement) {
        const map = L.map('map').setView([20, 0], 2);
        let currentLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        const markers = L.markerClusterGroup();
        initialTravelData.forEach(post => {
            const marker = L.marker([post.lat, post.lng]);
            marker.bindPopup(`
                <b>${post.title}</b><br>
                <img src="${post.image || 'images/fallback.jpg'}" alt="${post.title}" style="width:100%;height:auto;border-radius:5px;margin:5px 0;">
                ${post.content.substring(0, 50)}...<br>
                <a href="#" class="view-post" data-id="${post.id}">View Post</a> |
                <a href="book.html?destinationId=${post.id}" class="book-now">Book Now</a>
            `);
            markers.addLayer(marker);
        });
        map.addLayer(markers);

        map.on('popupopen', (e) => {
            document.querySelectorAll('.view-post').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const postId = link.getAttribute('data-id');
                    const post = initialTravelData.find(p => p.id == postId);
                    if (post) openModal(post);
                });
            });
        });

        const mapStyle = document.getElementById('map-style');
        mapStyle.addEventListener('change', (e) => {
            map.removeLayer(currentLayer);
            if (e.target.value === 'satellite') {
                currentLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    attribution: '© Esri'
                });
            } else if (e.target.value === 'terrain') {
                currentLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenTopoMap'
                });
            } else {
                currentLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                });
            }
            map.addLayer(currentLayer);
        });

        const userLocationBtn = document.getElementById('user-location');
        userLocationBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        map.setView([latitude, longitude], 13);
                        L.marker([latitude, longitude])
                            .addTo(map)
                            .bindPopup('You are here!')
                            .openPopup();
                    },
                    (error) => {
                        alert('Unable to retrieve your location.');
                    }
                );
            } else {
                alert('Geolocation is not supported by your browser.');
            }
        });

        const fullscreenBtn = document.getElementById('fullscreen-map');
        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                mapElement.requestFullscreen();
                mapElement.classList.add('fullscreen');
            } else {
                document.exitFullscreen();
                mapElement.classList.remove('fullscreen');
            }
        });

        map.on('fullscreenchange', () => {
            map.invalidateSize();
        });
    }

    // Blog Page
    const blogPosts = document.getElementById('blog-posts');
    if (blogPosts) {
        renderPosts(initialTravelData);
    }

    function renderPosts(posts) {
        blogPosts.innerHTML = '';
        posts.forEach(post => {
            const card = document.createElement('div');
            card.className = 'blog-card';
            card.innerHTML = `
                <img src="${post.image || 'images/fallback.jpg'}" alt="${post.title}">
                <div class="content">
                    <h3>${post.title}</h3>
                    <p class="category"><i class="fas fa-tag"></i> ${post.category}</p>
                    <p>${post.content.substring(0, 100)}...</p>
                    <p class="likes"><i class="fas fa-heart"></i> ${post.likes} Likes</p>
                    <p class="comments"><i class="fas fa-comment"></i> ${post.comments.length} Comments</p>
                    <p class="ratings"><i class="fas fa-star"></i> Average Rating: ${post.ratings.length ? (post.ratings.reduce((a, b) => a + b, 0) / post.ratings.length).toFixed(1) : 0}</p>
                    ${post.sponsored ? '<p class="sponsored"><i class="fas fa-ad"></i> Sponsored</p>' : ''}
                    <a href="book.html?destinationId=${post.id}" class="book-now"><i class="fas fa-calendar-check"></i> Book Now</a>
                </div>
            `;
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('book-now')) {
                    openModal(post);
                }
            });
            blogPosts.appendChild(card);
        });
    }

    // Filters
    const searchInput = document.getElementById('search-input');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const seasonFilter = document.getElementById('season-filter');
    const continentFilter = document.getElementById('continent-filter');
    const countryFilter = document.getElementById('country-filter');
    const cityFilter = document.getElementById('city-filter');
    const startDateFilter = document.getElementById('start-date');
    const endDateFilter = document.getElementById('end-date');

    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const searchHistoryList = document.getElementById('search-history');
    if (searchHistoryList) {
        searchHistory.forEach(term => {
            const li = document.createElement('li');
            li.textContent = term;
            li.addEventListener('click', () => {
                searchInput.value = term;
                filterPosts();
            });
            searchHistoryList.appendChild(li);
        });
    }

    function filterPosts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const category = document.querySelector('.filter-btn.active')?.dataset.category || 'all';
        const season = seasonFilter ? seasonFilter.value : 'all';
        const continent = continentFilter ? continentFilter.value : 'all';
        const country = countryFilter ? countryFilter.value : 'all';
        const city = cityFilter ? cityFilter.value : 'all';
        const startDate = startDateFilter ? new Date(startDateFilter.value).getTime() : null;
        const endDate = endDateFilter ? new Date(endDateFilter.value).getTime() : null;

        if (searchTerm && !searchHistory.includes(searchTerm)) {
            searchHistory.push(searchTerm);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            if (searchHistoryList) {
                const li = document.createElement('li');
                li.textContent = searchTerm;
                li.addEventListener('click', () => {
                    searchInput.value = searchTerm;
                    filterPosts();
                });
                searchHistoryList.appendChild(li);
            }
        }

        const filteredPosts = initialTravelData.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm) ||
                post.content.toLowerCase().includes(searchTerm) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            const matchesCategory = category === 'all' || post.category === category;
            const matchesSeason = season === 'all' || post.season === season;
            const matchesContinent = continent === 'all' || post.continent === continent;
            const matchesCountry = country === 'all' || post.country === country;
            const matchesCity = city === 'all' || post.city === city;
            const matchesDate = (!startDate || post.timestamp >= startDate) &&
                               (!endDate || post.timestamp <= endDate);
            return matchesSearch && matchesCategory && matchesSeason && matchesContinent && matchesCountry && matchesCity && matchesDate;
        });

        if (blogPosts) {
            renderPosts(filteredPosts);
        }
    }

    if (searchInput) searchInput.addEventListener('input', filterPosts);
    if (seasonFilter) seasonFilter.addEventListener('change', filterPosts);
    if (continentFilter) continentFilter.addEventListener('change', filterPosts);
    if (countryFilter) countryFilter.addEventListener('change', filterPosts);
    if (cityFilter) cityFilter.addEventListener('change', filterPosts);
    if (startDateFilter) startDateFilter.addEventListener('change', filterPosts);
    if (endDateFilter) endDateFilter.addEventListener('change', filterPosts);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPosts();
        });
    });

    // Modal
    const modal = document.getElementById('post-modal');
    const closeModal = document.getElementById('close-modal');

    function openModal(post) {
        modal.classList.add('show');

        document.getElementById('modal-title').textContent = post.title;
        const modalImage = document.getElementById('modal-image');
        const modalVideo = document.getElementById('modal-video');
        if (post.video) {
            modalImage.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = post.video;
        } else {
            modalImage.style.display = 'block';
            modalVideo.style.display = 'none';
            modalImage.src = post.image || 'images/fallback.jpg';
            modalImage.alt = post.title;
        }
        document.getElementById('modal-content').textContent = post.content;
        document.getElementById('modal-category').textContent = `Category: ${post.category}`;
        document.getElementById('modal-author').textContent = `Author: ${post.author}`;
        document.getElementById('modal-tags').textContent = `Tags: ${post.tags.join(', ')}`;
        document.getElementById('like-count').textContent = post.likes;
        document.getElementById('book-now').href = `book.html?destinationId=${post.id}`;

        const ratingStars = document.querySelectorAll('#rating-stars i');
        const ratingAverage = document.getElementById('rating-average');
        const average = post.ratings.length ? (post.ratings.reduce((a, b) => a + b, 0) / post.ratings.length).toFixed(1) : 0;
        ratingAverage.textContent = `Average: ${average} (${post.ratings.length} votes)`;

        ratingStars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.dataset.value);
                post.ratings.push(rating);
                const newAverage = (post.ratings.reduce((a, b) => a + b, 0) / post.ratings.length).toFixed(1);
                ratingAverage.textContent = `Average: ${newAverage} (${post.ratings.length} votes)`;
                ratingStars.forEach(s => {
                    if (parseInt(s.dataset.value) <= rating) {
                        s.classList.add('filled');
                    } else {
                        s.classList.remove('filled');
                    }
                });
            });
        });

        const commentList = document.getElementById('comment-list');
        commentList.innerHTML = '';
        post.comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment;
            commentList.appendChild(li);
        });

        const addCommentBtn = document.getElementById('add-comment');
        addCommentBtn.addEventListener('click', () => {
            const commentInput = document.getElementById('comment-input');
            if (commentInput.value) {
                post.comments.push(commentInput.value);
                const li = document.createElement('li');
                li.textContent = commentInput.value;
                commentList.appendChild(li);
                commentInput.value = '';
            }
        });

        const shareTwitter = document.getElementById('share-twitter');
        shareTwitter.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${window.location.href}`;
        const shareFacebook = document.getElementById('share-facebook');
        shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
        const shareWhatsapp = document.getElementById('share-whatsapp');
        shareWhatsapp.href = `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`;

        const relatedPosts = initialTravelData.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);
        const relatedList = document.getElementById('related-posts');
        relatedList.innerHTML = '';
        relatedPosts.forEach(related => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#" data-id="${related.id}">${related.title}</a>`;
            li.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                const relatedPost = initialTravelData.find(p => p.id == related.id);
                openModal(relatedPost);
            });
            relatedList.appendChild(li);
        });

        const favoriteBtn = document.getElementById('favorite-post');
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favoriteBtn.addEventListener('click', () => {
            if (!favorites.includes(post.id)) {
                favorites.push(post.id);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert('Added to favorites!');
            }
        });

        const addToTripBtn = document.getElementById('add-to-trip');
        addToTripBtn.addEventListener('click', () => {
            const tripLists = JSON.parse(localStorage.getItem('tripLists')) || [];
            if (tripLists.length > 0) {
                const tripName = prompt('Enter the trip name to add this post to:');
                const trip = tripLists.find(t => t.name === tripName);
                if (trip) {
                    if (!trip.posts.includes(post.id)) {
                        trip.posts.push(post.id);
                        localStorage.setItem('tripLists', JSON.stringify(tripLists));
                        alert(`Added to ${tripName}!`);
                    }
                } else {
                    alert('Trip not found!');
                }
            } else {
                alert('Create a trip first!');
            }
        });

        const downloadBtn = document.getElementById('download-post');
        downloadBtn.addEventListener('click', () => {
            const content = `
                Title: ${post.title}
                Category: ${post.category}
                Author: ${post.author}
                Content: ${post.content}
                Tags: ${post.tags.join(', ')}
            `;
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${post.title}.txt`;
            a.click();
            URL.revokeObjectURL(url);
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
            const modalVideo = document.getElementById('modal-video');
            if (modalVideo.src) {
                modalVideo.src = '';
            }
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            const modalVideo = document.getElementById('modal-video');
            if (modalVideo.src) {
                modalVideo.src = '';
            }
        }
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.getElementById('close-lightbox');

    document.querySelectorAll('.blog-card img, .gallery-item img').forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            lightboxImage.src = img.src;
            lightboxCaption.textContent = img.alt;
            lightbox.style.display = 'flex';
        });
    });

    if (closeLightbox) {
        closeLightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Favorites
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');
    if (favoritesList) {
        favorites.forEach(postId => {
            const post = initialTravelData.find(p => p.id == postId);
            if (post) {
                const li = document.createElement('li');
                li.textContent = post.title;
                li.addEventListener('click', () => {
                    openModal(post);
                });
                favoritesList.appendChild(li);
            }
        });
    }

    // Trip Lists
    let tripLists = JSON.parse(localStorage.getItem('tripLists')) || [];
    const tripList = document.getElementById('trip-list');
    const createTripBtn = document.getElementById('create-trip');
    const newTripNameInput = document.getElementById('new-trip-name');

    if (tripList) {
        tripLists.forEach(trip => {
            const li = document.createElement('li');
            li.className = 'trip-item';
            li.innerHTML = `
                ${trip.name} (${trip.posts.length} posts)
                <button class="remove-trip"><i class="fas fa-trash"></i></button>
            `;
            li.addEventListener('click', (e) => {
                if (!e.target.classList.contains('remove-trip')) {
                    const posts = initialTravelData.filter(p => trip.posts.includes(p.id));
                    renderPosts(posts);
                }
            });
            li.querySelector('.remove-trip').addEventListener('click', () => {
                tripLists = tripLists.filter(t => t.name !== trip.name);
                localStorage.setItem('tripLists', JSON.stringify(tripLists));
                li.remove();
            });
            tripList.appendChild(li);
        });
    }

    if (createTripBtn && newTripNameInput) {
        createTripBtn.addEventListener('click', () => {
            const tripName = newTripNameInput.value.trim();
            if (tripName && !tripLists.some(t => t.name === tripName)) {
                tripLists.push({ name: tripName, posts: [] });
                localStorage.setItem('tripLists', JSON.stringify(tripLists));
                const li = document.createElement('li');
                li.className = 'trip-item';
                li.innerHTML = `
                    ${tripName} (0 posts)
                    <button class="remove-trip"><i class="fas fa-trash"></i></button>
                `;
                li.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('remove-trip')) {
                        const posts = initialTravelData.filter(p => tripLists.find(t => t.name === tripName).posts.includes(p.id));
                        renderPosts(posts);
                    }
                });
                li.querySelector('.remove-trip').addEventListener('click', () => {
                    tripLists = tripLists.filter(t => t.name !== tripName);
                    localStorage.setItem('tripLists', JSON.stringify(tripLists));
                    li.remove();
                });
                tripList.appendChild(li);
                newTripNameInput.value = '';
            }
        });
    }

    // Rich Text Editor
    const editorContent = document.querySelector('.editor-content');
    const editorToolbar = document.querySelector('.editor-toolbar');
    if (editorContent && editorToolbar) {
        editorToolbar.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                const command = btn.dataset.command;
                if (command === 'createLink') {
                    const url = prompt('Enter the URL:');
                    if (url) document.execCommand(command, false, url);
                } else {
                    document.execCommand(command, false, null);
                }
            });
        });
    }

    // Add Post Form
    const addPostForm = document.getElementById('add-post-form');
    if (addPostForm) {
        const imageInput = document.getElementById('post-image');
        const imagePreview = document.getElementById('image-preview');
        imageInput.addEventListener('change', () => {
            const file = imageInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imagePreview.src = e.target.result;
                    imagePreview.classList.add('show');
                };
                reader.readAsDataURL(file);
            }
        });

        addPostForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('post-title').value;
            const content = editorContent.innerHTML;
            const category = document.getElementById('post-category').value;
            const lat = parseFloat(document.getElementById('post-lat').value);
            const lng = parseFloat(document.getElementById('post-lng').value);
            const image = imageInput.files[0] ? URL.createObjectURL(imageInput.files[0]) : 'images/fallback.jpg';
            const season = document.getElementById('post-season').value;
            const continent = document.getElementById('post-continent').value;
            const country = document.getElementById('post-country').value;
            const city = document.getElementById('post-city').value;
            const tags = document.getElementById('post-tags').value.split(',').map(tag => tag.trim());

            const newPost = {
                id: initialTravelData.length + 1,
                title,
                content,
                category,
                lat,
                lng,
                image,
                video: "",
                timestamp: new Date().getTime(),
                season,
                continent,
                country,
                city,
                author: localStorage.getItem('user') || 'Anonymous',
                tags,
                likes: 0,
                comments: [],
                ratings: [],
                sponsored: false,
                affiliateLink: "",
                availability: true,
                price: 1000,
                maxTravelers: 10
            };

            initialTravelData.push(newPost);
            alert('Post added successfully!');
            addPostForm.reset();
            imagePreview.classList.remove('show');
            window.location.href = 'blog.html';
        });
    }

    // Authors Section (About Page)
    const authorsSection = document.getElementById('authors-section');
    if (authorsSection) {
        const authorsList = document.createElement('div');
        authorsList.className = 'authors-list';
        const authors = [
            { name: "Abhishek Sirauthiya", bio: "A passionate traveler and storyteller, Abhishek loves exploring hidden gems in Asia." },
            { name: "Priya Sharma", bio: "Priya captures the essence of European culture through her vivid travel narratives." },
            { name: "Carlos Rivera", bio: "Carlos is an adventure enthusiast, sharing thrilling experiences from South America." },
            { name: "Aisha Khan", bio: "Aisha blends history and travel, uncovering the secrets of ancient Middle Eastern cities." },
            { name: "Michael O’Connor", bio: "Michael’s journeys through Africa highlight the continent’s diverse landscapes and cultures." }
        ];

        authors.forEach(author => {
            const authorCard = document.createElement('div');
            authorCard.className = 'author-card';
            authorCard.innerHTML = `
                <h3>${author.name}</h3>
                <p>${author.bio}</p>
            `;
            authorsList.appendChild(authorCard);
        });

        authorsSection.appendChild(authorsList);
    }

    // Booking Functionality
    const bookingForm = document.getElementById('booking-form');
    const bookingConfirmation = document.getElementById('booking-confirmation');
    const confirmationDetails = document.getElementById('confirmation-details');
    const closeConfirmation = document.getElementById('close-confirmation');
    const bookingDestination = document.getElementById('booking-destination');

    if (bookingForm) {
        // Ensure the dropdown is populated with destinations
        if (bookingDestination) {
            // Clear any existing options except the default
            bookingDestination.innerHTML = '<option value="">Select a Destination</option>';

            // Populate destinations from initialTravelData
            initialTravelData.forEach(destination => {
                if (destination.availability) {
                    const option = document.createElement('option');
                    option.value = destination.id;
                    option.textContent = `${destination.title} - $${destination.price}`;
                    bookingDestination.appendChild(option);
                }
            });

            // Pre-select destination if coming from a modal or blog card
            const urlParams = new URLSearchParams(window.location.search);
            const destinationId = urlParams.get('destinationId');
            if (destinationId) {
                bookingDestination.value = destinationId;
            }
        }

        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const destinationId = bookingDestination.value;
            const startDate = document.getElementById('booking-start-date').value;
            const endDate = document.getElementById('booking-end-date').value;
            const travelers = document.getElementById('booking-travelers').value;
            const email = document.getElementById('booking-email').value;

            // Validation
            if (!destinationId) {
                alert('Please select a destination.');
                return;
            }
            if (!startDate || !endDate) {
                alert('Please select both start and end dates.');
                return;
            }
            if (new Date(startDate) >= new Date(endDate)) {
                alert('End date must be after start date.');
                return;
            }
            if (!travelers || travelers <= 0) {
                alert('Please enter a valid number of travelers.');
                return;
            }
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const destination = initialTravelData.find(d => d.id == destinationId);
            if (destination && travelers <= destination.maxTravelers) {
                confirmationDetails.textContent = `Booking confirmed for ${destination.title}! Dates: ${startDate} to ${endDate}. Travelers: ${travelers}. Email: ${email}. Total: $${destination.price * travelers}`;
                bookingConfirmation.style.display = 'block';
                bookingForm.reset();
            } else {
                alert('Booking unavailable or too many travelers!');
            }
        });

        if (closeConfirmation) {
            closeConfirmation.addEventListener('click', () => {
                bookingConfirmation.style.display = 'none';
            });
        } else {
            console.warn('Close confirmation button not found in the DOM.');
        }
    }
});