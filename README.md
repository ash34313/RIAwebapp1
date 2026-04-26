Securo WebStore
A Hardened Hardware Catalog for Security Professionals.

Securo WebStore is a full-stack Single Page Application (SPA) designed to provide a secure environment for browsing and managing specialized cybersecurity hardware. The platform features a signature Mint Green interface and robust role-based access control.

 Tech Stack
Frontend: React (Vite)

Backend/BaaS: Supabase (PostgreSQL, Auth)

Styling: Custom CSS with Mint Green Variables (#2ecc71)

Deployment: Nginx on Google Cloud Platform (GCP) Compute Engine

 Features
Hardware Catalog: Dynamic rendering of products fetched directly from a Supabase PostgreSQL database.

Authentication: Secure login via email/password or GitHub OAuth.

Secure Checkout: Integration for order processing and persistence.

Admin Dashboard: Restricted view for authorized personnel providing full CRUD (Create, Read, Update, Delete) capabilities for the hardware inventory.

Identity Verification: User profiles displaying verified status and encrypted order history.

 Local Setup
Clone the Repository:
`git clone https://github.com/ash34313/RIAwebapp1.git`
`cd webapp1`

Install Dependencies:
`npm install`
Environment Configuration: Create a .env file in the root directory and add your Supabase credentials: `nano .env`
Copy and paste your credentials: 
`VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key`

Run Development Server:
`npm run dev`

 Cloud Deployment (GCP)
The application is deployed on a GCP Virtual Machine using an Nginx reverse proxy.

Production Build
`npm run build`
# Files are generated in the dist/ directory

Server Configuration
The VM is configured with the following parameters to ensure proper SPA routing:

Web Server: Nginx

Root Directory: /var/www/html

Routing Logic: try_files $uri $uri/ /index.html;

Network Security
The deployment utilizes specific GCP Firewall policies to allow external access:

Port 80 (HTTP): Enabled for all incoming traffic (0.0.0.0/0).

Network Tags: The VM instance is tagged with http-server to map the firewall policy correctly.

 Main Project Files & Folders
- assets/             # Static assets
- components/         # React components (Navbar, Cart, Admin, etc.)
- logic.js            # Supabase service layer and CRUD logic
- styles.css          # Global Mint Green theme
- App.jsx             # Main routing and state controller
- main.jsx            # Entry point

 Role-Based Access Control (RBAC)
Public: Can browse the hardware catalog.

Customer: Can manage profiles and view personal order history.

Admin: Full inventory management rights (CRUD). Restricted to authorized users only.
