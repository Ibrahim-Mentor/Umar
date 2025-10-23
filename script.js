// Product Data - Now only includes glasses
const products = [
    { id: 101, name: "Aviator Pro Sunglasses", description: "Classic aviator design with premium polarized lenses...", price: 149.99, category: "Sunglasses", brand: "RAYELLE Signature", colors: ["Black", "Gold", "Silver"], sizes: ["Medium", "Large"], inventory: 15, images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"], rating: 4.7 },
    { id: 102, name: "Wayfarer Classic", description: "Timeless wayfarer design with durable acetate frame...", price: 129.99, category: "Sunglasses", brand: "MANULE", colors: ["Black", "Tortoise", "Brown"], sizes: ["Medium"], inventory: 22, images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"], rating: 4.5 },
    { id: 103, name: "Cat-Eye Elegance", description: "Feminine cat-eye frame with a touch of vintage glamour...", price: 159.99, category: "Sunglasses", brand: "RAYELLE Signature", colors: ["Black", "Gold", "Tortoise"], sizes: ["Small", "Medium"], inventory: 12, images: ["https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"], rating: 4.8 },
    { id: 104, name: "Round Retro Frames", description: "Vintage-inspired round frames with blue light filtering technology...", price: 119.99, category: "Eyeglasses", brand: "MANULE", colors: ["Black", "Brown", "Tortoise"], sizes: ["Medium", "Large"], inventory: 18, images: ["https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"], rating: 4.3 },
    { id: 121, name: "CAPONI High Class Spectacles", description: "Premium CAPONI spectacles with exquisite craftsmanship...", price: 299.99, category: "Eyeglasses", brand: "CAPONI", colors: ["Gold", "Silver", "Black"], sizes: ["Medium", "Large"], inventory: 5, images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"], rating: 4.9 }
];

// Admin Security
const ADMIN_PASSWORD = "admin"; // Change this to a secure password
let isAdmin = false;

// Page Navigation
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link, .cta-btn, .logo a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId + '-page');
    });
});

function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageId) {
            page.classList.add('active');
        }
    });
}

// Account Page Logic
document.getElementById('account-btn').addEventListener('click', () => {
    // For simplicity, we'll just show the account page.
    // In a real app, you'd check if the user is logged in.
    showPage('account-page');
});

const accountTabs = document.querySelectorAll('.account-menu-item');
const accountContents = document.querySelectorAll('.account-tab');

accountTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');

        accountTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        accountContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabId + '-tab') {
                content.classList.add('active');
            }
        });
    });
});

document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = document.getElementById('user-name').value;
    const newImg = document.getElementById('user-img').value;

    if (newName) {
        document.getElementById('profile-name').textContent = newName;
    }
    if (newImg) {
        document.getElementById('profile-img').src = newImg;
    }
    alert("Settings saved!");
});

document.getElementById('logout-btn').addEventListener('click', () => {
    // In a real app, you would handle a full logout process
    alert("You have been logged out.");
    showPage('home-page');
});

// Admin Access
document.body.insertAdjacentHTML('beforeend', '<button id="admin-access" class="admin-access">Admin</button>');
document.getElementById('admin-access').addEventListener('click', () => {
    if (!isAdmin) {
        const password = prompt("Enter admin password:");
        if (password === ADMIN_PASSWORD) {
            isAdmin = true;
            // You can now show an admin modal or navigate to an admin page
            alert("Admin access granted!");
        } else {
            alert("Incorrect password!");
        }
    } else {
        alert("You are already in admin mode.");
    }
});


// All other JavaScript functions (renderProducts, addToCart, etc.) remain here
function init() {
    renderProducts();
    // Add other event listeners from your previous script.js
}
document.addEventListener('DOMContentLoaded', init);