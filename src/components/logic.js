const products = [
    {
        id: 1, 
        name: "GoldKey Security Token", 
        price: 45, 
        category: "Access", 
        rating: 4.9, 
        description: "USB-C hardware authenticator for passwordless login and 2FA.", 
        img: "./imgs/token.jpg" 
    },
    { 
        id: 2, 
        name: "StealthDrive 2TB", 
        price: 210, 
        category: "Storage", 
        rating: 4.7, 
        description: "Military-grade encrypted SSD with a physical PIN keypad for data access.", 
        img: "./imgs/drive.jpg"
    },
    { 
        id: 3, 
        name: "PrivacyGuard Screen", 
        price: 35, 
        category: "Privacy", 
        rating: 4.2, 
        description: "Magnetic 15.6-inch laptop filter that blacks out side views to prevent spying.", 
        img: "./imgs/screen.jpg"
    },
    { 
        id: 4, 
        name: "SignalShield Faraday Bag", 
        price: 25, 
        category: "Privacy", 
        rating: 4.5, 
        description: "Blocks all RFID, Cell, and WiFi signals. Ideal for protecting key fobs and phones.", 
        img: "./imgs/bag.jpg"
    },
    { 
        id: 5, 
        name: "CamSlide Pro (3-Pack)", 
        price: 12, 
        category: "Privacy", 
        rating: 4.8, 
        description: "Ultra-thin mechanical webcam covers compatible with laptops and tablets.", 
        img: "./imgs/camslide.jpg" 
    },
    { 
        id: 6, 
        name: "NetArmor VPN Router", 
        price: 185, 
        category: "Network", 
        rating: 4.6, 
        description: "Pre-configured OpenVPN router that encrypts every device on your home network.", 
        img: "./imgs/router.jpg" 
    },
    { 
        id: 7, 
        name: "JuiceJail USB Blocker", 
        price: 15, 
        category: "Access", 
        rating: 4.4, 
        description: "Prevents accidental data exchange when charging on public USB ports.", 
        img: "./imgs/blocker.jpg" 
    },
    { 
        id: 8, 
        name: "BioLock Fingerprint Padlock", 
        price: 65, 
        category: "Access", 
        rating: 4.3, 
        description: "Stainless steel smart lock with 0.5s fingerprint recognition for server racks.", 
        img: "./imgs/lock.jpg"
    },
    { 
        id: 9, 
        name: "Sentinel Hardware Firewall", 
        price: 299, 
        category: "Network", 
        rating: 4.9, 
        description: "Deep packet inspection hardware to stop intrusions before they hit your PC.", 
        img: "./imgs/firewall.jpg"
    },
    { 
    id: 10, 
    name: "Mic-Lock USB-C", 
    price: 18, 
    category: "Privacy", 
    rating: 4.6, 
    description: "Hardware-level microphone blocker to prevent unauthorized audio recording.", 
    img: "./imgs/micblock.jpg" 
    }
];

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = products.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.name}" style="width:100%">
            <h3>${p.name}</h3>
            <p><em>${p.category}</em></p>
            <p><strong>$${p.price}</strong></p>
            <a href="info.html?id=${p.id}">View Security Specs</a>
        </div>
    `).join('');
}

function filterProducts() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    const grid = document.getElementById('product-grid');
    grid.innerHTML = filtered.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.name}" style="width:100%">
            <h3>${p.name}</h3>
            <p><em>${p.category}</em></p>
            <p><strong>$${p.price}</strong></p>
            <a href="items.html?id=${p.id}">View Product</a>
        </div>
    `).join('');
}

function filterOrders() {
    const input = document.getElementById("orderSearch");
    const filter = input.value.toUpperCase();
    const tableBody = document.getElementById("orderTableBody");
    const rows = tableBody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const orderIdCell = rows[i].getElementsByTagName("td")[0];
        const itemNameCell = rows[i].getElementsByTagName("td")[1];
        
        if (orderIdCell || itemNameCell) {
            const orderText = orderIdCell.textContent || orderIdCell.innerText;
            const itemText = itemNameCell.textContent || itemNameCell.innerText;
            
            if (orderText.toUpperCase().indexOf(filter) > -1 || itemText.toUpperCase().indexOf(filter) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}
window.onload = renderProducts;