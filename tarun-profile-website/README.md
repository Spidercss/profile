# Tarun Garg - Portfolio Website

A beautiful, modern, and fully customizable portfolio website with stunning animations and an aesthetic purple/blue gradient color scheme.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Animations** - Eye-catching animations and transitions throughout
- **Typing Effect** - Dynamic typing animation in the hero section
- **Scroll Animations** - Elements animate as you scroll
- **Counter Animation** - Animated statistics in the about section
- **Gradient Background** - Beautiful floating gradient orbs
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Contact Form** - Functional contact form with validation
- **Easy Customization** - Simple configuration file to update all content

## 🎨 Color Scheme

The website uses an aesthetic purple/blue gradient theme:
- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)
- Background: Dark theme with `#0f0f1e` and `#1a1a2e`

## 📁 Project Structure

```
tarun-profile-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and animations
├── js/
│   ├── config.js       # Configuration file (EDIT THIS!)
│   └── script.js       # Main JavaScript functionality
├── assets/             # Place your images here
└── README.md           # This file
```

## 🚀 Getting Started

### 1. Open the Website

Simply open `index.html` in your web browser:
- Double-click the `index.html` file, or
- Right-click and select "Open with" → Your browser

### 2. Customize Your Content

Edit the `js/config.js` file to customize all content:

```javascript
const CONFIG = {
    personal: {
        name: "Your Name",
        title: "Your Title",
        typingTexts: ["Developer", "Designer", "Creator"],
        // ... more options
    },
    // ... other sections
};
```

### 3. Add Your Profile Picture (Optional)

1. Place your image in the `assets/` folder (e.g., `assets/profile.jpg`)
2. Update `config.js`:
   ```javascript
   profileImage: "assets/profile.jpg"
   ```

## 🎯 Customization Guide

### Personal Information
Edit these fields in `config.js`:
- `name` - Your full name
- `title` - Your professional title
- `description` - Brief introduction
- `typingTexts` - Array of texts for typing animation

### About Section
- `paragraphs` - Array of paragraphs about yourself
- `stats` - Your statistics (years, projects, etc.)

### Skills
Add or modify skills:
```javascript
skills: [
    {
        icon: "💻",
        title: "Programming",
        items: ["Python", "Java", "JavaScript"]
    }
]
```

### Education
Update your educational background:
```javascript
education: [
    {
        date: "2020 - 2024",
        title: "B.Tech",
        institution: "University Name",
        description: "Description..."
    }
]
```

### Projects
Showcase your projects:
```javascript
projects: [
    {
        icon: "🚀",
        title: "Project Name",
        description: "Project description...",
        tags: ["React", "Node.js"],
        demoLink: "https://demo.com",
        sourceLink: "https://github.com/..."
    }
]
```

### Contact Information
Update your contact details:
```javascript
contact: {
    details: [
        { icon: "📧", title: "Email", value: "your@email.com" }
    ],
    social: [
        { name: "LinkedIn", icon: "in", url: "https://linkedin.com/..." }
    ]
}
```

## 🎨 Advanced Customization

### Change Colors
Uncomment and modify the `theme` section in `config.js`:
```javascript
theme: {
    primaryColor: "#6366f1",
    secondaryColor: "#8b5cf6",
    accentColor: "#ec4899"
}
```

### Modify CSS Variables
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... more variables */
}
```

## 📱 Sections Included

1. **Hero Section** - Introduction with typing animation
2. **About Section** - About you with animated statistics
3. **Skills Section** - Your technical skills organized by category
4. **Education Section** - Timeline of your education
5. **Projects Section** - Showcase of your work
6. **Contact Section** - Contact form and information
7. **Footer** - Copyright and credits

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📝 Tips

1. **Images**: For best results, use square images (1:1 ratio) for profile picture
2. **Icons**: You can use emojis or replace with icon libraries
3. **Links**: Update all `#` links with your actual URLs
4. **Form**: The contact form shows a notification. Connect it to a backend for actual functionality
5. **SEO**: Update meta tags in `index.html` for better SEO

## 🔧 Troubleshooting

**Animations not working?**
- Make sure JavaScript is enabled in your browser
- Check browser console for errors (F12)

**Styling looks broken?**
- Ensure all files are in correct folders
- Check that CSS file path is correct in HTML

**Config changes not showing?**
- Hard refresh the page (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## 🤝 Support

For issues or questions:
1. Check this README first
2. Review the `config.js` file comments
3. Inspect browser console for errors

## 🎉 Enjoy Your New Portfolio!

Your portfolio website is ready to impress! Customize it, add your content, and share it with the world.

---

**Built with ❤️ and creativity**
