// Product Data
const products = [
    {
        id: 101,
        name: "Aviator Pro Sunglasses",
        description: "Classic aviator design with premium polarized lenses. Lightweight titanium frame with UV400 protection. Perfect for driving and outdoor activities.",
        price: 149.99,
        category: "Sunglasses",
        brand: "RAYELLE Signature",
        colors: ["Black", "Gold", "Silver"],
        sizes: ["Medium", "Large"],
        inventory: 15,
        images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"],
        rating: 4.7
    },
    {
        id: 102,
        name: "Wayfarer Classic",
        description: "Timeless wayfarer design with durable acetate frame. Features polarized lenses with 100% UV protection. A versatile choice for any occasion.",
        price: 129.99,
        category: "Sunglasses",
        brand: "MANULE",
        colors: ["Black", "Tortoise", "Brown"],
        sizes: ["Medium"],
        inventory: 22,
        images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"],
        rating: 4.5
    },
    {
        id: 103,
        name: "Cat-Eye Elegance",
        description: "Feminine cat-eye frame with a touch of vintage glamour. Lightweight design with gradient lenses. Perfect for making a fashion statement.",
        price: 159.99,
        category: "Sunglasses",
        brand: "RAYELLE Signature",
        colors: ["Black", "Gold", "Tortoise"],
        sizes: ["Small", "Medium"],
        inventory: 12,
        images: ["https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
        rating: 4.8
    },
    {
        id: 104,
        name: "Round Retro Frames",
        description: "Vintage-inspired round frames with blue light filtering technology. Lightweight and comfortable for all-day wear.",
        price: 119.99,
        category: "Eyeglasses",
        brand: "MANULE",
        colors: ["Black", "Brown", "Tortoise"],
        sizes: ["Medium", "Large"],
        inventory: 18,
        images: ["https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"],
        rating: 4.3
    },
    {
        id: 105,
        name: "Clubmaster Premium",
        description: "Sophisticated clubmaster design with a bold browline. Features premium polarized lenses and a comfortable fit.",
        price: 139.99,
        category: "Sunglasses",
        brand: "RAYELLE Signature",
        colors: ["Black", "Brown", "Tortoise"],
        sizes: ["Medium"],
        inventory: 14,
        images: ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"],
        rating: 4.6
    },
    {
        id: 106,
        name: "Shield Sport Sunglasses",
        description: "Wraparound shield design for maximum coverage and protection. Ideal for sports and outdoor activities with anti-slip nose pads.",
        price: 169.99,
        category: "Sunglasses",
        brand: "MANULE",
        colors: ["Black", "Blue", "Red"],
        sizes: ["Medium", "Large"],
        inventory: 10,
        images: ["https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
        rating: 4.4
    },
    {
        id: 107,
        name: "Wrap-Around Performance",
        description: "Performance-oriented wrap-around design with polarized lenses. Perfect for running, cycling, and other high-intensity activities.",
        price: 179.99,
        category: "Sunglasses",
        brand: "RAYELLE Signature",
        colors: ["Black", "Gray", "Blue"],
        sizes: ["Medium", "Large"],
        inventory: 8,
        images: ["https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
        rating: 4.7
    },
    {
        id: 108,
        name: "Oval Vintage Frames",
        description: "Elegant oval frames with a vintage aesthetic. Features blue light filtering for digital eye strain relief.",
        price: 124.99,
        category: "Eyeglasses",
        brand: "MANULE",
        colors: ["Black", "Brown", "Tortoise"],
        sizes: ["Small", "Medium"],
        inventory: 16,
        images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"],
        rating: 4.2
    },
    {
        id: 109,
        name: "Butterfly Elegance",
        description: "Dramatic butterfly-shaped frames with a sophisticated appeal. Lightweight design with premium lens coating.",
        price: 149.99,
        category: "Sunglasses",
        brand: "RAYELLE Signature",
        colors: ["Black", "Gold", "Silver"],
        sizes: ["Medium"],
        inventory: 11,
        images: ["https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
        rating: 4.8
    },
    {
        id: 110,
        name: "Browline Classic",
        description: "Distinctive browline design with a retro-modern aesthetic. Durable frame with anti-reflective coating.",
        price: 134.99,
        category: "Eyeglasses",
        brand: "MANULE",
        colors: ["Black", "Brown", "Tortoise"],
        sizes: ["Medium", "Large"],
        inventory: 13,
        images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"],
        rating: 4.5
    },
    {
        id: 111,
        name: "Sport Performance",
        description: "High-performance sport sunglasses with wraparound design. Features polarized lenses and anti-fog coating.",
        price: 189.99,
        category: "Sunglasses",
        brand: "RAYELLE Signature",
        colors: ["Black", "Blue", "Red"],
        sizes: ["Medium", "Large"],
        inventory: 9,
        images: ["https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
        rating: 4.6
    },
    {
        id: 112,
        name: "Oversized Glamour",
        description: "Bold oversized frames for maximum style and sun protection. Features gradient lenses and lightweight construction.",
        price: 159.99,
        category: "Sunglasses",
        brand: "MANULE",
        colors: ["Black", "Brown", "Tortoise"],
        sizes: ["Medium", "Large"],
        inventory: 7,
        images: ["https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
        rating: 4.7
    },
    {
        id: 113,
        name: "Geometric Modern",
        description: "Contemporary geometric frames with a unique angular design. Features blue light filtering for digital device use.",
        price: 139.99,
        category: "Eyeglasses",
        brand: "RAYELLE Signature",
        colors: ["Black", "Silver", "Gold"],
        sizes: ["Medium"],
        inventory: 14,
        images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"],
        rating: 4.4
    },
    {
        id: 114,
        name: "Pilot Classic",
        description: "Authentic pilot-style sunglasses with teardrop-shaped lenses. Features polarized lenses and metal frame construction.",
        price: 149.99,
        category: "Sunglasses",
        brand: "MANULE",
        colors: ["Black", "Gold", "Silver"],
        sizes: ["Medium", "Large"],
        inventory: 12,
        images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"],
        rating: 4.6
    },
    {
        id: 115,
        name: "Mirrored Aviators",
        description: "Stylish aviator design with mirrored lenses for maximum glare reduction. Lightweight and durable construction.",
        price: 169.99,
        category: "Sunglasses",
        brand: "RAYELLE Signature",
        colors: ["Silver", "Gold", "Blue"],
        sizes: ["Medium", "Large"],
        inventory: 10,
        images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"],
        rating: 4.7
    },
    {
        id: 116,
        name: "Gradient Lenses",
        description: "Fashion-forward frames with gradient lenses that transition from dark to light. Perfect for style-conscious individuals.",
        price: 139.99,
        category: "Sunglasses",
        brand: "MANULE",
        colors: ["Brown", "Gray", "Green"],
        sizes: ["Medium"],
        inventory: 15,
        images: ["https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
        rating: 4.5
    },
    {
        id: 117,
        name: "Polarized Performance",
        description: "High-performance polarized sunglasses with 100% UV protection. Ideal for driving, fishing, and outdoor activities.",
        price: 179.99,
        category: "Sunglasses",
        brand: "RAYELLE Signature",
        colors: ["Black", "Brown", "Blue"],
        sizes: ["Medium", "Large"],
        inventory: 11,
        images: ["https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
        rating: 4.8
    },
    {
        id: 118,
        name: "Retro Classic",
        description: "Vintage-inspired frames with a modern twist. Features blue light filtering and anti-reflective coating.",
        price: 124.99,
        category: "Eyeglasses",
        brand: "MANULE",
        colors: ["Black", "Tortoise", "Brown"],
        sizes: ["Small", "Medium"],
        inventory: 17,
        images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"],
        rating: 4.3
    },
    {
        id: 119,
        name: "Classic Elegance",
        description: "Timeless design that never goes out of style. Durable frame construction with premium lens materials.",
        price: 129.99,
        category: "Eyeglasses",
        brand: "RAYELLE Signature",
        colors: ["Black", "Brown", "Tortoise"],
        sizes: ["Medium", "Large"],
        inventory: 20,
        images: ["https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"],
        rating: 4.4
    },
    {
        id: 120,
        name: "Vintage Collection",
        description: "Authentic vintage design with modern comfort features. Handcrafted details and premium materials.",
        price: 159.99,
        category: "Sunglasses",
        brand: "MANULE",
        colors: ["Gold", "Silver", "Tortoise"],
        sizes: ["Medium"],
        inventory: 8,
        images: ["https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"],
        rating: 4.7
    },
    {
        id: 121,
        name: "CAPONI High Class Spectacles",
        description: "Premium CAPONI spectacles with exquisite craftsmanship and luxurious materials. Features advanced blue light filtering technology and anti-reflective coating for optimal visual clarity.",
        price: 299.99,
        category: "Eyeglasses",
        brand: "CAPONI",
        colors: ["Gold", "Silver", "Black"],
        sizes: ["Medium", "Large"],
        inventory: 5,
        images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"],
        rating: 4.9
    }
];

// Shopping Cart
let cart = [];
let isLoggedIn = false;
let currentUser = null;

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTax = document.getElementById('cart-tax');
const cartTotal = document.getElementById('cart-total');
const productModal = document.getElementById('product-modal');
const modalProductDetails = document.getElementById('modal-product-details');
const checkoutModal = document.getElementById('checkout-modal');
const authModal = document.getElementById('auth-modal');
const adminModal = document.getElementById('admin-modal');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const authBtn = document.getElementById('auth-btn');

// Initialize the application
function init() {
    renderProducts();
    setupEventListeners();
    updateCartCount();
}

// Render products to the grid
function renderProducts(filteredProducts = products) {
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-rating">
                    <span class="rating-stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                    <span>${product.rating}</span>
                </div>
                <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
        
        // Add event listener to product image and name for modal
        productCard.querySelector('.product-image').addEventListener('click', () => openProductModal(product));
        productCard.querySelector('.product-name').addEventListener('click', () => openProductModal(product));
        
        // Add event listener to add to cart button
        productCard.querySelector('.add-to-cart').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product);
        });
    });
}

// Open product modal
function openProductModal(product) {
    modalProductDetails.innerHTML = `
        <div class="modal-product-image-container">
            <img src="${product.images[0]}" alt="${product.name}" class="modal-product-image">
        </div>
        <div class="modal-product-info">
            <h2>${product.name}</h2>
            <p class="modal-product-price">$${product.price.toFixed(2)}</p>
            <p class="modal-product-description">${product.description}</p>
            <div class="modal-product-options">
                <div class="option-group">
                    <h4>Color</h4>
                    <div class="option-buttons">
                        ${product.colors.map(color => `
                            <button class="option-btn" data-option="color" data-value="${color}">${color}</button>
                        `).join('')}
                    </div>
                </div>
                <div class="option-group">
                    <h4>Size</h4>
                    <div class="option-buttons">
                        ${product.sizes.map(size => `
                            <button class="option-btn" data-option="size" data-value="${size}">${size}</button>
                        `).join('')}
                    </div>
                </div>
            </div>
            <button class="modal-add-to-cart" data-id="${product.id}">ADD TO CART</button>
        </div>
    `;
    
    // Add event listeners to option buttons
    modalProductDetails.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const option = this.getAttribute('data-option');
            const value = this.getAttribute('data-value');
            
            // Remove active class from all buttons in the same group
            this.parentElement.querySelectorAll('.option-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
    
    // Add event listener to add to cart button in modal
    modalProductDetails.querySelector('.modal-add-to-cart').addEventListener('click', () => {
        addToCart(product);
        closeModal(productModal);
    });
    
    productModal.classList.add('open');
}

// Add product to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            selectedColor: product.colors[0],
            selectedSize: product.sizes[0]
        });
    }
    
    updateCartCount();
    renderCartItems();
    showNotification(`${product.name} added to cart`);
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCartItems();
}

// Update product quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            renderCartItems();
        }
    }
}

// Update cart count in header
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Render cart items in sidebar
function renderCartItems() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.images[0]}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-actions">
                    <button class="quantity-btn" data-id="${item.id}" data-change="-1">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-change="1">+</button>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Calculate and update totals
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const shipping = 10.00;
    const total = subtotal + tax + shipping;
    
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTax.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--accent-gold);
        color: var(--black);
        padding: 15px 20px;
        border-radius: 4px;
        z-index: 1004;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Cart toggle
    document.getElementById('cart-btn').addEventListener('click', () => {
        cartSidebar.classList.add('open');
    });
    
    document.getElementById('close-cart').addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });
    
    // Modal close buttons
    document.getElementById('close-modal').addEventListener('click', () => {
        closeModal(productModal);
    });
    
    document.getElementById('close-checkout').addEventListener('click', () => {
        closeModal(checkoutModal);
    });
    
    document.getElementById('close-auth').addEventListener('click', () => {
        closeModal(authModal);
    });
    
    document.getElementById('close-admin').addEventListener('click', () => {
        closeModal(adminModal);
    });
    
    // Close modals when clicking outside
    [productModal, checkoutModal, authModal, adminModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Cart item actions
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const change = parseInt(e.target.getAttribute('data-change'));
            updateQuantity(productId, change);
        }
        
        if (e.target.classList.contains('remove-item')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
    });
    
    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('Your cart is empty');
            return;
        }
        
        cartSidebar.classList.remove('open');
        openCheckoutModal();
    });
    
    // Checkout form steps
    document.querySelectorAll('.next-step').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentStep = e.target.closest('.checkout-step');
            const nextStepId = `step-${parseInt(currentStep.id.split('-')[1]) + 1}`;
            
            currentStep.classList.remove('active');
            document.getElementById(nextStepId).classList.add('active');
            
            // Update step indicator
            document.querySelectorAll('.step').forEach(step => {
                step.classList.remove('active');
            });
            document.querySelector(`.step[data-step="${nextStepId.split('-')[1]}"]`).classList.add('active');
            
            if (nextStepId === 'step-3') {
                renderOrderSummary();
            }
        });
    });
    
    document.querySelectorAll('.prev-step').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentStep = e.target.closest('.checkout-step');
            const prevStepId = `step-${parseInt(currentStep.id.split('-')[1]) - 1}`;
            
            currentStep.classList.remove('active');
            document.getElementById(prevStepId).classList.add('active');
            
            // Update step indicator
            document.querySelectorAll('.step').forEach(step => {
                step.classList.remove('active');
            });
            document.querySelector(`.step[data-step="${prevStepId.split('-')[1]}"]`).classList.add('active');
        });
    });
    
    // Place order
    document.querySelector('.place-order').addEventListener('click', (e) => {
        e.preventDefault();
        if (cart.length === 0) return;
        
        // Simulate order processing
        showNotification('Order placed successfully!');
        cart = [];
        updateCartCount();
        renderCartItems();
        closeModal(checkoutModal);
    });
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query)
        );
        
        if (filteredProducts.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
        } else {
            searchResults.innerHTML = filteredProducts.map(product => `
                <div class="search-result-item" data-id="${product.id}">
                    <strong>${product.name}</strong> - $${product.price.toFixed(2)}
                </div>
            `).join('');
        }
        
        searchResults.style.display = 'block';
        
        // Add event listeners to search results
        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const productId = parseInt(item.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                if (product) {
                    openProductModal(product);
                    searchResults.style.display = 'none';
                    searchInput.value = '';
                }
            });
        });
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
    
    // Auth button
    authBtn.addEventListener('click', () => {
        if (isLoggedIn) {
            logout();
        } else {
            authModal.classList.add('open');
        }
    });
    
    // Auth tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            // Update active tab
            document.querySelectorAll('.auth-tab').forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');
            
            // Show corresponding form
            document.querySelectorAll('.auth-form').forEach(form => {
                form.classList.remove('active');
            });
            document.getElementById(`${tabName}-form`).classList.add('active');
        });
    });
    
    // Login form
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;
        
        // Simulate login
        if (email && password) {
            isLoggedIn = true;
            currentUser = { email, name: email.split('@')[0] };
            authBtn.textContent = 'LOGOUT';
            closeModal(authModal);
            showNotification('Logged in successfully!');
        }
    });
    
    // Register form
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.querySelector('input[type="text"]').value;
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;
        
        // Simulate registration
        if (name && email && password && password === confirmPassword) {
            isLoggedIn = true;
            currentUser = { email, name };
            authBtn.textContent = 'LOGOUT';
            closeModal(authModal);
            showNotification('Account created successfully!');
        }
    });
    
    // Admin access
    document.getElementById('admin-access').addEventListener('click', () => {
        adminModal.classList.add('open');
    });
    
    // Admin actions
    document.getElementById('add-product-btn').addEventListener('click', () => {
        document.getElementById('admin-product-form').style.display = 'block';
        document.getElementById('admin-products-list').style.display = 'none';
    });
    
    document.getElementById('manage-products-btn').addEventListener('click', () => {
        document.getElementById('admin-product-form').style.display = 'none';
        document.getElementById('admin-products-list').style.display = 'block';
        renderAdminProducts();
    });
    
    // Product form
    document.getElementById('product-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const productId = document.getElementById('product-id').value;
        const name = document.getElementById('product-name').value;
        const description = document.getElementById('product-description').value;
        const price = parseFloat(document.getElementById('product-price').value);
        const category = document.getElementById('product-category').value;
        const brand = document.getElementById('product-brand').value;
        const colors = document.getElementById('product-colors').value.split(',').map(c => c.trim());
        const sizes = document.getElementById('product-sizes').value.split(',').map(s => s.trim());
        const inventory = parseInt(document.getElementById('product-inventory').value);
        const rating = parseFloat(document.getElementById('product-rating').value);
        
        if (productId) {
            // Edit existing product
            const index = products.findIndex(p => p.id === parseInt(productId));
            if (index !== -1) {
                products[index] = {
                    ...products[index],
                    name,
                    description,
                    price,
                    category,
                    brand,
                    colors,
                    sizes,
                    inventory,
                    rating
                };
            }
        } else {
            // Add new product
            const newId = Math.max(...products.map(p => p.id)) + 1;
            products.push({
                id: newId,
                name,
                description,
                price,
                category,
                brand,
                colors,
                sizes,
                inventory,
                rating,
                images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"]
            });
        }
        
        renderProducts();
        showNotification(`Product ${productId ? 'updated' : 'added'} successfully!`);
        document.getElementById('product-form').reset();
        document.getElementById('product-id').value = '';
    });
    
    // Filters and sorting
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    document.getElementById('sort-select').addEventListener('change', applyFilters);
    
    // Filters toggle for mobile
    document.getElementById('filters-toggle-btn').addEventListener('click', () => {
        document.querySelector('.filters-container').classList.toggle('open');
    });
    
    // Mobile menu toggle
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('open');
    });
    
    // CTA button
    document.querySelector('.cta-btn').addEventListener('click', () => {
        document.querySelector('#sunglasses').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Newsletter form
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        if (email) {
            showNotification('Thank you for subscribing to our newsletter!');
            e.target.reset();
        }
    });
    
    // Contact form
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Your message has been sent! We will get back to you soon.');
        e.target.reset();
    });
    
    // Coupon code
    document.getElementById('apply-coupon').addEventListener('click', () => {
        const code = document.getElementById('coupon-code').value;
        if (code.toUpperCase() === 'RAYELLE15') {
            showNotification('Coupon applied! 15% discount added.');
            // In a real application, you would apply the discount to the cart totals
        } else {
            showNotification('Invalid coupon code');
        }
    });
}

// Apply filters and sorting
function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);
    const selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(cb => cb.value);
    const sortBy = document.getElementById('sort-select').value;
    
    let filteredProducts = products.filter(product => 
        selectedCategories.includes(product.category) &&
        selectedBrands.includes(product.brand) &&
        product.colors.some(color => selectedColors.includes(color))
    );
    
    // Apply sorting
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        // Default sorting (by id) is already applied
    }
    
    renderProducts(filteredProducts);
}

// Open checkout modal
function openCheckoutModal() {
    checkoutModal.classList.add('open');
    
    // Reset to first step
    document.querySelectorAll('.checkout-step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('step-1').classList.add('active');
    
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.querySelector('.step[data-step="1"]').classList.add('active');
}

// Render order summary
function renderOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = '';
    
    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span>${item.name} (x${item.quantity})</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
        orderSummary.appendChild(orderItem);
    });
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const shipping = 10.00;
    const total = subtotal + tax + shipping;
    
    orderSummary.innerHTML += `
        <hr style="margin: 15px 0; border-color: var(--light-gray);">
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>Tax (5%):</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
            <span>Shipping:</span>
            <span>$${shipping.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-weight: bold; margin-top: 10px;">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
}

// Render admin products
function renderAdminProducts() {
    const adminProducts = document.getElementById('admin-products');
    adminProducts.innerHTML = '';
    
    products.forEach(product => {
        const adminProduct = document.createElement('div');
        adminProduct.className = 'admin-product-item';
        adminProduct.innerHTML = `
            <div class="admin-product-info">
                <h4>${product.name}</h4>
                <p>$${product.price.toFixed(2)} | ${product.category} | Stock: ${product.inventory}</p>
            </div>
            <div class="admin-product-actions">
                <button class="edit-product" data-id="${product.id}">Edit</button>
                <button class="delete-product" data-id="${product.id}">Delete</button>
            </div>
        `;
        adminProducts.appendChild(adminProduct);
    });
    
    // Add event listeners to edit and delete buttons
    document.querySelectorAll('.edit-product').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            
            if (product) {
                document.getElementById('product-id').value = product.id;
                document.getElementById('product-name').value = product.name;
                document.getElementById('product-description').value = product.description;
                document.getElementById('product-price').value = product.price;
                document.getElementById('product-category').value = product.category;
                document.getElementById('product-brand').value = product.brand;
                document.getElementById('product-colors').value = product.colors.join(', ');
                document.getElementById('product-sizes').value = product.sizes.join(', ');
                document.getElementById('product-inventory').value = product.inventory;
                document.getElementById('product-rating').value = product.rating;
                
                document.getElementById('admin-product-form').style.display = 'block';
                document.getElementById('admin-products-list').style.display = 'none';
            }
        });
    });
    
    document.querySelectorAll('.delete-product').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.getAttribute('data-id'));
            if (confirm('Are you sure you want to delete this product?')) {
                const index = products.findIndex(p => p.id === productId);
                if (index !== -1) {
                    products.splice(index, 1);
                    renderAdminProducts();
                    renderProducts();
                    showNotification('Product deleted successfully!');
                }
            }
        });
    });
}

// Close modal
function closeModal(modal) {
    modal.classList.remove('open');
}

// Logout function
function logout() {
    isLoggedIn = false;
    currentUser = null;
    authBtn.textContent = 'LOGIN';
    showNotification('Logged out successfully!');
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);