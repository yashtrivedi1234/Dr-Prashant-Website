# Dr. Prashant - Official Website

Welcome to the official website of **Dr. Prashant**, a leading Homeopathy Doctor & Healthcare Advocate specializing in comprehensive healthcare solutions.

## 🌟 Features

- **Responsive Design**: Fully responsive website optimized for all devices
- **Multi-Clinic Services**: Dedicated pages for specialty clinics:
  - Allergy Clinic
  - Oral Immunotherapy Clinic
  - Snoring Clinic
  - Vertigo Clinic
- **Service Showcase**: Detailed information about all healthcare services
- **Blog Section**: Educational blog posts on health topics
- **Gallery**: Photo gallery showcasing clinic and practice
- **Testimonials**: Patient testimonials and success stories
- **Contact Form**: Easy-to-use contact system
- **Statistics**: Key metrics and achievements
- **Smooth Animations**: Modern UI with Framer Motion animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Component Library**: shadcn-ui
- **Animations**: Framer Motion
- **Testing**: Vitest
- **Linting**: ESLint
- **Package Manager**: Bun

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn-ui components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer section
│   ├── HeroCarousel.tsx
│   ├── ServicesSection.tsx
│   ├── BlogSection.tsx
│   ├── GallerySection.tsx
│   ├── TestimonialsSection.tsx
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Services.tsx    # Services listing
│   ├── ServiceDetail.tsx
│   ├── Blog.tsx        # Blog listing
│   ├── BlogDetail.tsx
│   ├── Gallery.tsx
│   ├── AboutUs.tsx
│   ├── Contact.tsx
│   ├── AllergyClinic.tsx
│   ├── OralImmunotherapyClinic.tsx
│   ├── SnoringClinic.tsx
│   ├── VertigoClinic.tsx
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and static assets
└── test/               # Test files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ or Bun installed

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Dr-Prashant-Website
   ```

2. Install dependencies using Bun:
   ```bash
   bun install
   ```

### Development

Start the development server:
```bash
bun run dev
```
The site will be available at `http://localhost:5173`

### Build for Production

```bash
bun run build
```

### Testing

Run tests with:
```bash
bun run test
```

### Linting

Check code quality:
```bash
bun run lint
```

## 🌐 Deployment

This project is deployed on **Vercel**. The `vercel.json` configuration ensures proper client-side routing for single-page application navigation.

To deploy:
1. Push changes to the main branch
2. Vercel automatically builds and deploys

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero carousel and key services |
| Services | `/services` | All available healthcare services |
| Service Details | `/service/:id` | Detailed information about specific service |
| Blog | `/blog` | Blog posts listing |
| Blog Post | `/blog/:id` | Individual blog post |
| Gallery | `/gallery` | Photo gallery |
| About | `/about-us` | About Dr. Prashant and clinic |
| Contact | `/contact` | Contact form and information |
| Allergy Clinic | `/allergy-clinic` | Allergy-specific clinic info |
| Oral Immunotherapy | `/oral-immunotherapy-clinic` | Oral immunotherapy services |
| Snoring Clinic | `/snoring-clinic` | Snoring treatment services |
| Vertigo Clinic | `/vertigo-clinic` | Vertigo treatment services |

## 🎨 Components

### Main Components
- **Navbar**: Navigation menu with links
- **Footer**: Footer with social links and information
- **HeroCarousel**: Animated hero section carousel
- **ServicesSection**: Showcase of healthcare services
- **BlogSection**: Featured blog posts
- **GallerySection**: Photo gallery display
- **TestimonialsSection**: Patient testimonials
- **StatsSection**: Key statistics and achievements
- **WhyChooseUs**: Reasons to choose the clinic
- **CTA Section**: Call-to-action sections
- **ScrollToTop**: Scroll-to-top button

## 📝 License

This project is private and proprietary to Dr. Prashant.

## 👨‍💻 Author

**Dr. Prashant** - Homeopathy Doctor & Healthcare Advocate

---

**Last Updated**: March 2026
