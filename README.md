# Prince Kakadiya - Portfolio Website

A modern, interactive portfolio website built with React, featuring a black and white theme with smooth animations.

## Features

- **Interactive Design**: Smooth animations and transitions using Framer Motion
- **Black & White Theme**: Clean, professional monochrome design
- **Responsive Layout**: Fully responsive design that works on all devices
- **Sections**:
  - Home/Hero section with profile photo placeholder
  - About Me section
  - Skills showcase
  - Work Experience & Education
  - Projects portfolio
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

## License

This project is personal and proprietary.

## Contact

Prince Kakadiya
- Email: kakadiyaprince902@gmail.com
- LinkedIn: [linkedin.com/in/princekakadiya](https://www.linkedin.com/in/princekakadiya/)