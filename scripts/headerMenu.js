// Dynamically creates and inserts the header and navigation menu into the page
function createHeaderAndMenu() {
    // HTML structure for the header, hamburger menu, and navigation links
    const headerHTML = `
            <header>
                <h1>QuickBooks Services</h1>
                <div class="menu-toggle" tabindex="0" aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>                  
                </div>
                <nav>
                    <a href="home.html">Home</a> <!-- Home page link -->
                    <a href="about.html">About</a> <!-- About page link -->
                    <a href="services.html">Services</a> <!-- Services page link -->
                    <a href="pricing.html">Pricing</a> <!-- Pricing page link -->
                    <a href="contact.html">Contact</a> <!-- Contact page link -->
                </nav>
            </header>
    `;

    // Insert the header HTML at the top of the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Get references to the hamburger menu and nav
    const menuToggle = document.querySelector('.menu-toggle'); // Hamburger icon
    const nav = document.querySelector('nav'); // Navigation menu

    // Closes the mobile menu and removes the outside click listener
    function closeMenu() {
        nav.classList.remove('active'); // Hide nav
        document.removeEventListener('click', handleOutsideClick, true); // Remove outside click listener
    }

    /* @param {MouseEvent} e */
    // Handles clicks outside the nav/menu to close the menu
    function handleOutsideClick(e) {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    }

    // Only add event listeners if both menuToggle and nav exist
    if(menuToggle && nav) {
        // Toggle nav visibility on hamburger click
        menuToggle.addEventListener('click', (e) => {
            nav.classList.toggle('active'); // Show/hide nav
            if (nav.classList.contains('active')) {
                // Add outside click listener after nav is shown
                setTimeout(() => {
                    document.addEventListener('click', handleOutsideClick, true);
                }, 0);
            } else {
                document.removeEventListener('click', handleOutsideClick, true);
            }
        });

        // Allow toggling menu with Enter key for accessibility
        menuToggle.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                nav.classList.toggle('active');
                if (nav.classList.contains('active')) {
                    setTimeout(() => {
                        document.addEventListener('click', handleOutsideClick, true);
                    }, 0);
                } else {
                    document.removeEventListener('click', handleOutsideClick, true);
                }
            }
        });

        // Close menu when a nav link is clicked (on mobile)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            });
        }); 
    }
}

// Expose the function globally so it can be called from HTML
window.createHeaderAndMenu = createHeaderAndMenu;




