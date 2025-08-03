# 🚀 Tapasvi Madhak - Personal Portfolio

A modern, responsive portfolio website showcasing my cybersecurity expertise and projects. Built with React, TypeScript, and Tailwind CSS, featuring custom animations, dark mode support, and a sleek design.

## 🌟 Features

- **Modern Design**: Clean, professional interface with custom animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Mode**: Theme switching with smooth transitions
- **Custom Cursor**: Interactive cursor effects for enhanced UX
- **Animated Components**: Smooth scrolling and hover effects
- **Performance Optimized**: Built with Vite for fast loading times

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives with shadcn/ui
- **Build Tool**: Vite
- **Icons**: React Icons (Font Awesome)
- **Development**: ESLint for code quality

## 📱 Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal information and background
- **Projects**: Featured projects showcase
- **Skills**: Technical expertise and tools
- **Medium**: Latest blog posts integration
- **Contact**: Get in touch form
- **Footer**: Simple, clean footer design

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TapasviMadhak/TM-portfolio.git
cd TM-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Adding New Projects

Edit `src/components/Projects.tsx` and add your project to the `projects` array:

```typescript
{
  title: 'Your Project Name',
  description: 'Project description...',
  icon: YourIcon,
  color: 'from-color-500 to-color-600',
  tags: ['Tech1', 'Tech2', 'Tech3'],
  repoUrl: 'https://github.com/username/repo',
}
```

### Updating Profile Photo

Replace `src/assets/me.jpg` with your photo and update the import in `src/components/About.tsx`.

### Modifying Colors

Update the color scheme in `tailwind.config.js` and component files.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing section
│   ├── Medium.tsx      # Blog posts
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Images and static files
```

## 🔗 Links

- **Live Website**: [https://tapasvi-madhak.surge.sh](https://tapasvi-madhak.surge.sh)
- **GitHub**: [https://github.com/TapasviMadhak](https://github.com/TapasviMadhak)
- **LinkedIn**: [https://www.linkedin.com/in/tapasvi-madhak-159945248/](https://www.linkedin.com/in/tapasvi-madhak-159945248/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📞 Contact

**Tapasvi Madhak**
- Email: [Your email]
- GitHub: [@TapasviMadhak](https://github.com/TapasviMadhak)

---

⭐ **If you found this portfolio helpful, please give it a star!**