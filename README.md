# plummers-leads

A static, multi-page HTML/CSS website for Plummer Leads showcasing company information, services, and contact functionality.  

---

## Table of Contents

1. [Project Description](#project-description)  
2. [Overview](#overview)  
3. [Installation](#installation)  
4. [Usage](#usage)  
5. [Project Structure & Components](#project-structure--components)  
6. [Dependencies](#dependencies)  
7. [Next Steps](#next-steps)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Project Description

**plummers-leads** is a responsive, multi-page website built with semantic HTML5, CSS3, and minimal JavaScript. It features:

- A modern, accessible layout for desktop and mobile  
- Multiple pages: Home, About, Services, Contact  
- Off-canvas sidebar navigation  
- Utility-first CSS for rapid styling  
- A contact form, image lightbox, and optional carousel  

---

## Overview

### Architecture

- Static HTML5 pages  
- CSS for layout, typography, color, responsive behavior, and utility classes  
- Minimal JS (`scripts.js`) for enhancements (mobile menu toggle, lightbox)  

### Page Flow

- **index.html** ? Home page with hero banner, feature overview, CTA  
- **about.html** ? Company/team info, mission, history  
- **services.html** ? Services list with icons  
- **contact.html** ? Contact form, address/map, support details  
- **sidebar.html** ? Off-canvas navigation include  

### Key Features

- Responsive header with logo and primary navigation  
- Collapsible mobile menu (hamburger toggle)  
- Hero section with background image and CTA button  
- Service grids with SVG icons  
- Contact form (name, email, message)  
- Footer with copyright, secondary links, social icons  
- Utility classes for spacing, typography, and color  
- Image optimization and alt-text for accessibility  
- Optional lightbox/modal and carousel  

---

## Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/plummers-leads.git
   cd plummers-leads
   ```  
2. (Optional) Start a local HTTP server to test relative paths  
   ```bash
   # Python 3
   python -m http.server 8000
   # Node.js (http-server)
   npx http-server -p 8000
   ```  
3. Open your browser at `http://localhost:8000` or double-click `index.html`.  

---

## Usage

- Navigate between pages using the top menu or off-canvas sidebar  
- Resize the browser to view responsive breakpoints  
- Click the hamburger icon on mobile to open/close the sidebar  
- Submit the contact form (you?ll need to hook up a backend or form-handling service)  
- (Optional) View images in a lightbox by clicking any gallery item  

---

## Project Structure & Components

src/  
?? index.html           # Home page  
?? about.html           # About us  
?? services.html        # Services overview  
?? contact.html         # Contact form & map  
?? sidebar.html         # Off-canvas navigation include  
?? css/  
?   ?? reset.css        # CSS reset  
?   ?? normalize.css    # CSS normalization  
?   ?? styles.css       # Core styles  
?   ?? responsive.css   # Media queries & mobile menu styles  
?   ?? utilities.css    # Utility classes (spacing, typography, grids)  
?? js/  
?   ?? scripts.js       # Mobile menu toggle, lightbox/carousel logic  
?? images/  
?   ?? logo.png         # Site logo  
?   ?? banner.jpg       # Hero background  
?   ?? icons/  
?       ?? icon-service1.svg  
?       ?? icon-service2.svg  
?       ?? ?additional SVG icons  
?? assets/  
    ?? fonts/           # Custom font files  
    ?? downloads/       # PDFs, docs  

### Component Purposes

- **HTML Pages**  
  ? index.html: Hero, features, CTA  
  ? about.html: Mission, team, history  
  ? services.html: Service descriptions & icons  
  ? contact.html: Form and contact details  
  ? sidebar.html: Reusable off-canvas nav  

- **CSS**  
  ? reset.css & normalize.css: Cross-browser consistency  
  ? styles.css: Base typography, colors, layout  
  ? responsive.css: Breakpoints, mobile menu, sidebar  
  ? utilities.css: Classes like `.m-4`, `.p-2`, `.grid`, `.text-center`  

- **JavaScript**  
  ? scripts.js:  
    ? Toggle `.sidebar-active` class on mobile menu button  
    ? Initialize lightbox or carousel plugins (if enabled)  

- **Assets**  
  ? images/: Logo, banner, SVG service icons  
  ? fonts/: Custom web fonts  
  ? downloads/: PDF brochures, spec sheets  

---

## Dependencies

- No external frameworks or libraries out of the box  
- (Optional) Lightbox or carousel plugin if enabled (e.g., [GLightbox], [Swiper])  
- Modern browsers with ES6 support  

---

## Next Steps

- Verify directory structure matches the file list above  
- Audit HTML files for semantic markup and ARIA attributes  
- Link CSS files in this order: reset ? normalize ? styles ? utilities ? responsive  
- Include `<meta name="viewport" content="width=device-width, initial-scale=1.0">` and favicon in each `<head>`  
- Place `<script src="js/scripts.js"></script>` before closing `</body>`  
- Test across devices and browsers; validate HTML/CSS and accessibility  
- Integrate a form backend or service (e.g., Formspree, Netlify Forms)  

---

## Contributing

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature/foo`)  
3. Commit your changes (`git commit -m "Add feature"`)  
4. Push to branch (`git push origin feature/foo`)  
5. Open a Pull Request  

Please follow semantic commit messages and ensure all new code is accessible and responsive.

---

## License

Distributed under the MIT License. See `LICENSE` for details.