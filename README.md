# Designer Portfolio Website

A modern, minimal portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing design work, projects, and experience.

## Features

- **Responsive Design** - Works beautifully on desktop, tablet, and mobile devices
- **Modern Minimal Aesthetic** - Clean, professional design with smooth interactions
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Smooth Animations** - Fade-in effects and transitions throughout
- **Easy to Customize** - Placeholder sections ready for your content
- **No Dependencies** - Pure HTML, CSS, and JavaScript

## File Structure

```
├── index.html          # Main HTML file with all sections
├── styles.css          # All styling and responsive breakpoints
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── assets/             # Place for your images and media files
    ├── projects/       # Project screenshots
    ├── photos/         # Your photos
    └── resume.pdf      # Your resume (optional)
```

## Sections

### 1. **Home**
- Hero section with your headline and call-to-action
- Customize the title and subtitle to match your personal brand

### 2. **Work Samples**
- Grid layout showcasing your best design projects
- Each project has a title, category, and description
- The gray boxes are placeholders for your project images

### 3. **Resume**
- Experience section with your work history
- Skills section with tags for your design tools and expertise
- Download link for your full resume (PDF)

### 4. **Contact**
- Multiple contact methods (email, LinkedIn, Dribbble, Twitter)
- Simple icon-based design for easy navigation

## Customization Guide

### Edit the Hero Section
Open `index.html` and find the hero section:
```html
<h1 class="hero-title">Creative Designer</h1>
<p class="hero-subtitle">Crafting beautiful digital experiences</p>
```
Replace with your name and tagline.

### Add Your Projects
In the work section, replace each project placeholder:
- **Title**: Change "Project One", "Project Two", etc.
- **Category**: Update to your project type (Branding, UI/UX, etc.)
- **Description**: Write about what you did and the impact
- **Image**: Replace `.work-image-placeholder` div with an `<img>` tag

Example:
```html
<div class="work-item">
    <img src="assets/projects/project-1.jpg" alt="Project description" class="work-image">
    <h3>Your Project Name</h3>
    <p class="work-category">Your Category</p>
    <p class="work-description">Your project description</p>
</div>
```

### Update Your Resume
In the resume section:
- Update your job titles, companies, and dates
- Add your relevant skills as tags
- Update the resume download link

### Add Contact Methods
Find your social profile URLs and update:
```html
<a href="https://linkedin.com/in/yourprofile" target="_blank" class="contact-method">
    <span class="method-icon">💼</span>
    <span class="method-text">LinkedIn</span>
</a>
```

### Change Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
    --primary-color: #1a1a1a;           /* Primary text color */
    --secondary-color: #ffffff;         /* Background color */
    --accent-color: #6c5ce7;            /* Highlight/button color */
    --light-gray: #f5f5f5;              /* Light backgrounds */
    --dark-gray: #333333;               /* Secondary text color */
}
```

### Add Your Images
1. Create an `assets` folder in your project directory
2. Add subfolders: `projects/`, `photos/`
3. Add your images to these folders
4. Update the image paths in your HTML

## How to View Locally

1. **Using Python** (if installed):
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

2. **Using Node.js** (if installed):
   ```bash
   npx http-server
   ```

3. **Direct with VS Code**:
   - Install the "Live Server" extension from VS Code marketplace
   - Right-click `index.html` → "Open with Live Server"

## Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Push your files to the repository
3. Go to Settings → Pages → Select main branch
4. Your site will be available at `https://yourusername.github.io/repo-name`

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site goes live instantly with a custom URL

### Traditional Hosting
1. Upload files via FTP to your web hosting provider
2. Access via your custom domain

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Tips for Best Results

- **Images**: Use high-quality images, optimize for web (max 1-2MB per image)
- **Descriptions**: Keep project descriptions concise (2-3 sentences)
- **Categories**: Use consistent category names
- **Resume**: Keep it updated and relevant
- **Contact**: Make sure all social links are correct
- **Mobile Testing**: Always test on mobile devices before deploying

## Next Steps

1. Replace placeholder text with your information
2. Add your project images
3. Update social media links
4. Add your resume PDF
5. Test on mobile devices
6. Deploy to your chosen hosting platform

Good luck with your portfolio! 🎨