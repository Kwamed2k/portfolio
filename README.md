# Project 0 -  Cloud-Hosted Portfolio Website
Portfolio Page

A responsive personal portfolio website designed, built, and deployed as a cloud-hosted static website using HTML, CSS, JavaScript, Amazon S3, Cloudflare, GitHub, and GitHub Actions.
The project demonstrates the practical application of web development fundamentals together with AWS cloud hosting, DNS, HTTPS, CDN, security configuration, performance optimization, and CI/CD automation.

# 🌐 Live Website
danielkusi.com

# 🎯 Project Objective
The objective of this project is to build and deploy a professional personal portfolio website while gaining practical, hands-on experience with AWS cloud infrastructure, web hosting, DNS, HTTPS, CDN, security, performance optimization, version control, and automated deployment.
Rather than relying solely on traditional web hosting, the website is deployed using cloud services and an automated deployment workflow to simulate a practical cloud engineering environment.

# ✨ Key Features
    • Responsive portfolio website built with HTML, CSS, and JavaScript
    • Static website hosting using Amazon S3
    • Custom domain configuration
    • DNS management through Cloudflare
    • HTTPS enabled through Cloudflare
    • Cloudflare CDN and caching
    • Cloudflare security headers and additional security configuration
    • Performance optimization and caching configuration
    • Custom error handling
    • Dedicated project-under-construction page for incomplete projects
    • Source code managed with Git and GitHub
    • Automated deployment from GitHub to Amazon S3 using GitHub Actions
    • Continuous deployment workflow for publishing website updates



# 🏗️ Architecture
The portfolio website uses a cloud-based static hosting architecture with Amazon S3 serving as the origin and Cloudflare providing DNS, HTTPS, CDN, caching, and additional security capabilities.
Website visitors access the portfolio through the custom domain, while deployment is automated through GitHub Actions.

# 🌐 Website Request Flow
Visitor
   │
   │ HTTPS
   ▼
Cloudflare
(DNS + CDN + SSL/TLS)
   │
   ▼
Amazon S3
(Static Website Hosting)
When a visitor accesses the portfolio, the request is handled through Cloudflare. Cloudflare provides DNS resolution, HTTPS, CDN functionality, and caching before requests are served from the Amazon S3-hosted website.

# 🚀 Deployment Flow
Developer
   │
   │ git push
   ▼
GitHub Repository
   │
   │ GitHub Actions
   ▼
AWS IAM Role
(OIDC Federation)
   │
   │ Temporary credentials
   ▼
Amazon S3
   │
   │ Cache purge
   ▼
Cloudflare
Website changes are automatically deployed through a GitHub Actions workflow.
The workflow:
    1. Checks out the repository.
    2. Configures the required AWS credentials.
    3. Authenticates to AWS using an IAM role through GitHub's OIDC federation.
    4. Synchronizes the website files to the Amazon S3 bucket.
    5. Purges the Cloudflare cache so that updated content can be delivered to visitors.

# ☁️ Architecture Components
        Component                           Purpose
Git                         Version control and change tracking; changes are pushed to the remote GitHub repository
GitHub                      Remote repository hosting and collaboration platform
GitHub Actions              CI/CD automation
AWS IAM                     Secure access control for deployment
GitHub OIDC                 Keyless authentication between GitHub Actions and AWS
Amazon S3                   Static website hosting and file storage
Cloudflare DNS              Domain and DNS management
Cloudflare CDN              Content delivery and caching
Cloudflare SSL/TLS          HTTPS protection
Cloudflare Cache Purge      Ensures updated website content is delivered after deployment
Namecheap                   Domain registration



# 🛠️ Technologies & Services
Frontend
    • HTML5 — Website structure and content
    • CSS3 — Styling, layout and responsive design
    • JavaScript — Client-side functionality and interactions
Version Control & CI/CD
    • Git — Version control and change tracking
    • GitHub — Remote repository hosting
    • GitHub Actions — Automated deployment workflow
Cloud & Infrastructure
    • Amazon S3 — Static website hosting and file storage
    • AWS IAM — Deployment permissions and access control
    • GitHub OIDC — Keyless authentication between GitHub Actions and AWS
Edge, DNS & Security
    • Cloudflare DNS — DNS management for the custom domain
    • Cloudflare CDN — Content delivery and caching
    • Cloudflare SSL/TLS — HTTPS
    • Cloudflare Cache Purge — Cache invalidation after deployment
Domain
    • Namecheap — Domain registration

# 📁 Project Structure
portfolio/
├── assets/              # Supporting project assets
├── css/                 # Stylesheets
├── images/              # Website images and visual assets
├── js/                  # JavaScript files
├── construction.html    # Page displayed for projects still under development
├── error404.html        # Custom 404 error page
├── favicon.ico          # Website favicon
├── index.html           # Main portfolio homepage
└── README.md            # Project documentation
The project follows a simple separation of concerns by keeping the HTML, CSS, JavaScript, images, and supporting assets organized in dedicated directories.
