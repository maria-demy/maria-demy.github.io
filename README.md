# Maria Demy - Personal Portfolio

A modern, privacy-first personal portfolio website built with React, Vite, and Tailwind CSS.

## 🎨 Features

- **Clean, Modern Design**: Light pink theme with subtle flower pattern background
- **Responsive Layout**: Optimized for both desktop and mobile devices
- **Privacy-First**: No tracking, analytics, or personal data collection
- **Smooth Navigation**: Fixed navbar with smooth scrolling between sections
- **Professional Sections**: About, Apps, Blog, and Contact sections

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom pink theme
- **Fonts**: Inter (Google Fonts)
- **Deployment**: GitHub Pages
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/maria-demy/maria-demy.github.io.git
cd maria-demy.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📦 Project Structure

```
maria-demy.github.io/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── About.jsx      # About section
│   │   ├── Apps.jsx       # Applications section
│   │   ├── Blog.jsx       # Blog posts section
│   │   ├── Contact.jsx    # Contact section
│   │   ├── Footer.jsx     # Footer component
│   │   └── Navbar.jsx     # Navigation component
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles with Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

## 🌐 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://maria-demy.github.io`

### Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your web server

## 🎨 Customization

### Colors and Theme

The site uses a custom pink color palette defined in `tailwind.config.js`. You can modify the colors by updating the `pink` color object.

### Content

- **About Section**: Update the skills and strengths in `src/components/About.jsx`
- **Apps Section**: Add your projects in `src/components/Apps.jsx`
- **Blog Section**: Add blog posts in `src/components/Blog.jsx`
- **Contact Section**: Update contact information in `src/components/Contact.jsx`

### Background Pattern

The flower pattern background is defined as an SVG data URL in `src/index.css`. You can modify or replace this pattern as needed.

## 🔒 Privacy

This site is built with privacy in mind:

- No analytics or tracking scripts
- No cookies or local storage for tracking
- No external dependencies that could track users
- All assets are self-hosted or from trusted CDNs

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or collaboration opportunities, please reach out through the contact information provided on the website.

---

Built with ❤️ and ☕ by Maria Demy
