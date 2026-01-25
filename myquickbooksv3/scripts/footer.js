// Dynamically creates and inserts the footer into the page
function createFooter() {
    // HTML structure for the footer
    const footerHTML = `
        <footer class="site-footer" role="contentinfo">
            <div class="footer-content">
                <p>&copy; 2025 MyQuickBooks. All rights reserved.</p>
            <div>
        </footer>
    `;
    // Insert the footer HTML at the end of the body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Expose the function globally so it can be called from HTML
window.createFooter = createFooter;
