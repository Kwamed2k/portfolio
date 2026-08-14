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
| Component | Purpose |
|---|---|
| **Git** | Version control and change tracking; changes are pushed to the remote GitHub repository |
| **GitHub** | Remote repository hosting and collaboration platform |
| **GitHub Actions** | CI/CD automation |
| **AWS IAM** | Secure access control for deployment |
| **GitHub OIDC** | Keyless authentication between GitHub Actions and AWS |
| **Amazon S3** | Static website hosting and file storage |
| **Cloudflare DNS** | Domain and DNS management |
| **Cloudflare CDN** | Content delivery and caching |
| **Cloudflare SSL/TLS** | HTTPS protection |
| **Cloudflare Cache Purge** | Ensures updated website content is delivered after deployment |
| **Namecheap** | Domain registration |



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

# 🚀 Deployment Process

Website deployments are automated using GitHub Actions.

When changes are committed and pushed to the main branch, the deployment workflow:

Checks out the latest source code from GitHub.
Configures the AWS deployment environment.
Uses GitHub OIDC to authenticate securely with AWS.
Assumes the configured AWS IAM deployment role using temporary credentials.
Synchronizes the website files to the Amazon S3 bucket.
Purges the Cloudflare cache so visitors receive the latest version of the website.
Deployment Flow
Developer
   │
   │ git push origin main
   ▼
GitHub Repository
   │
   │ GitHub Actions
   ▼
GitHub OIDC
   │
   ▼
AWS IAM Role
   │
   │ Temporary credentials
   ▼
Amazon S3
   │
   │ Cache purge
   ▼
Cloudflare
   │
   ▼
Updated Website

This approach eliminates the need for manual website uploads after changes are committed to the repository.

# 🌐 Domain, DNS & HTTPS

The portfolio is accessible through the custom domain:

**[danielkusi.com](https://danielkusi.com)**

The domain was registered through **Namecheap**, while DNS management is handled by **Cloudflare**.

Cloudflare sits in front of the Amazon S3 website and provides:

* DNS resolution for the custom domain
* HTTPS through SSL/TLS
* CDN and caching
* Additional security controls
* Cache invalidation after deployments

This configuration allows the website to use a professional custom domain while benefiting from Cloudflare's edge network and security features.



# 🔐 Security Considerations
Security was considered throughout the design and deployment of the portfolio.

# AWS Access Control
The GitHub Actions deployment workflow does not rely on long-lived AWS access keys stored as GitHub secrets. Instead, **GitHub OIDC** is used to establish a trusted identity relationship with AWS, allowing the workflow to assume a dedicated **IAM deployment role** and obtain temporary credentials.

This reduces the risk associated with storing permanent AWS credentials in the repository or CI/CD environment.

# HTTPS
The portfolio is served through **HTTPS using Cloudflare SSL/TLS**, helping protect data exchanged between visitors and the website.

# Security Headers
Cloudflare security headers are configured to provide additional browser-side protections for the website.

# Repository & Credential Security
Sensitive credentials and configuration values are kept outside the source code and are not committed to the GitHub repository.

The deployment process uses controlled IAM permissions rather than broad AWS account access.


# Challenges & Solutions
Building and deploying the portfolio involved several practical issues that required troubleshooting and configuration changes.
1. Amazon S3 NoSuchKey Error
Challenge:
The initial website deployment returned an S3 NoSuchKey error because the index.html file had been uploaded inside a portfolio directory instead of being located at the expected root of the S3 bucket.
Solution:
The directory structure was corrected so that index.html and the required website files were stored in the appropriate location within the bucket. The website then loaded successfully.
2. External CSS and JavaScript Files
Challenge:
After separating the HTML, CSS, and JavaScript into dedicated files, the JavaScript functionality did not initially behave as expected.
Solution:
The JavaScript loading behavior was corrected by using the defer attribute so the script executes after the HTML document has been parsed.
<script src="js/script.js" defer></script>
This allowed the separated frontend files to work correctly together.
3. Cloudflare and HTTPS Configuration
Challenge:
Configuring the custom domain, Cloudflare DNS, SSL/TLS, caching, and the S3 website endpoint required several rounds of configuration and troubleshooting.
Solution:
The Cloudflare configuration was adjusted until DNS resolution, HTTPS access, caching, and the custom domain were functioning correctly.
4. GitHub Actions and AWS Authentication
Challenge:
The initial automated deployment workflow required troubleshooting around the GitHub Actions configuration and AWS authentication.
Solution:
The workflow and AWS IAM configuration were corrected, including the GitHub OIDC trust relationship. The deployment workflow was then successfully configured to upload website changes to S3 and purge the Cloudflare cache.
The completed workflow now provides automated deployment from the GitHub repository to the live website.



# 🧠 Engineering Decisions
Several design decisions were made to keep the portfolio simple, cost-conscious, secure, and suitable as a practical cloud engineering project.

# Amazon S3 for Static Hosting
Amazon S3 was selected because the portfolio is a static website and does not require a continuously running application server or database.

This provides a simple and cost-conscious hosting architecture while giving practical experience with AWS storage and static website hosting.

# Cloudflare in Front of S3
Cloudflare was used for DNS, HTTPS, CDN, caching, and additional security capabilities.

Using Cloudflare in front of the S3 origin provides edge delivery and reduces the need to use additional AWS services for functions already available through the Cloudflare free tier.

# GitHub Actions for CI/CD
GitHub Actions was selected to automate deployment and eliminate the need to manually upload website files after each change.

This also provides practical experience with CI/CD concepts and infrastructure automation.

# GitHub OIDC and IAM Role-Based Access
GitHub OIDC was chosen instead of storing long-lived AWS access keys in the repository or CI/CD environment.

The workflow assumes a dedicated IAM role and uses temporary credentials for deployment, providing a more secure authentication model.

# Custom Error and Construction Pages
Custom `error404.html` and `construction.html` pages were implemented to provide a better visitor experience when a requested page does not exist or a portfolio project is still under development.

Rather than exposing a generic error or broken link, the website provides a controlled and informative response.

# Cloudflare Cache Purging After Deployment
The deployment workflow includes a Cloudflare cache purge step so that newly deployed website content becomes available to visitors without requiring them to wait for cached content to expire.





