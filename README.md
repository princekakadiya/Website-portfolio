# Prince Kakadiya - Portfolio Website

A modern, interactive portfolio website built with React, featuring a server-themed interface with boot animation, terminal aesthetics, and reactive UI elements.

## Features

- **Server Boot Animation**: Terminal-style boot sequence on initial load
- **Interactive Design**: Smooth animations and transitions using Framer Motion
- **Black & White Theme**: Clean, professional monochrome design
- **Reactive UI**: Server command-style interactions with terminal feedback
- **Live Server Status**: Real-time uptime and request counter
- **Terminal Aesthetics**: Code-themed elements, typing effects, and terminal prompts
- **Responsive Layout**: Fully responsive design that works on all devices
- **Sections**:
  - Home/Hero section with typing effect and profile photo placeholder
  - About Me section
  - Skills showcase with code-style brackets
  - Work Experience & Education with timeline
  - Projects portfolio with interactive cards
  - Contact form with social links
  - Black-themed footer

## Technologies Used

- React 18
- Vite
- Framer Motion (for animations)
- React Icons
- CSS3 (with custom properties)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── About.jsx          # Home and About sections
│   ├── Skills.jsx         # Skills showcase
│   ├── Experience.jsx    # Work experience and education
│   ├── Projects.jsx      # Projects portfolio
│   ├── Contact.jsx       # Contact form and info
│   └── Footer.jsx        # Footer component
├── App.jsx               # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Customization

### Adding Your Photo

Replace the profile photo placeholder in `src/components/About.jsx`:
- Add your image to the `public` folder
- Update the `profile-image-placeholder` div to use an `<img>` tag instead of the initials

### Updating Content

All content is based on the CV information. Update the following files to customize:
- `src/components/About.jsx` - Personal information
- `src/components/Skills.jsx` - Skills list
- `src/components/Experience.jsx` - Work experience and education
- `src/components/Projects.jsx` - Projects showcase
- `src/components/Contact.jsx` - Contact information

## Deployment

### Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
}
```

5. Deploy:
```bash
npm run deploy
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

## License

This project is personal and proprietary.

## Contact

Prince Kakadiya
- Email: kakadiyaprince902@gmail.com
- LinkedIn: [linkedin.com/in/princekakadiya](https://www.linkedin.com/in/princekakadiya/)