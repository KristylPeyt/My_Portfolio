
async function loadComponent(containerId, filePath) {
    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Could not load ${filePath}`);
        }

        const html = await response.text();

        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

async function initializePortfolio() {
    await loadComponent("navbar-container", "components/navbar.html");
    await loadComponent("footer-container", "components/footer.html");
}

initializePortfolio();