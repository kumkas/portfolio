# Nithin V - AI Engineer Portfolio

A modern, interactive portfolio website showcasing AI engineering expertise, built with Next.js 14, Three.js, and TypeScript.

## 🚀 Features

- **Interactive 3D Animations**: Neural network visualizations and floating elements
- **AI Twin Chatbot**: Interactive AI assistant representing Nithin V
- **RAG Document Chat**: Demo of document-based AI chat functionality
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Lazy loading, code splitting, and caching strategies
- **SEO Enhanced**: Structured data, sitemaps, and meta optimization
- **PWA Ready**: Web app manifest and offline capabilities

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Three.js
- **Icons**: Lucide React

### Performance & SEO
- Turbopack for fast development
- Dynamic imports for code splitting
- Image optimization with WebP/AVIF
- Structured data (JSON-LD)
- Comprehensive meta tags
- Sitemap generation

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure environment variables** (if needed):
   - `GOOGLE_VERIFICATION` - Google Search Console verification
   - `BING_VERIFICATION` - Bing Webmaster Tools verification
   - `NEXT_PUBLIC_GA_ID` - Google Analytics ID

3. **Deploy**
   ```bash
   npx vercel
   ```

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify  
- Railway
- Render

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── sitemap.ts        # Sitemap generation
├── components/
│   ├── demos/            # AI demo components
│   ├── layout/           # Layout components (nav, footer)
│   ├── sections/         # Page sections
│   ├── seo/              # SEO components
│   ├── three/            # 3D components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
└── lib/                  # Utilities and configurations
```

## 🎨 Customization

### Theming
- Colors defined in `tailwind.config.ts`
- CSS custom properties in `globals.css`
- Dark/light mode toggle included

### Content Updates
1. **Personal Info**: Update in layout components and SEO config
2. **Projects**: Modify projects data in `sections/projects.tsx`
3. **Experience**: Update timeline in `sections/experience.tsx`
4. **Skills**: Adjust skills visualization in `sections/skills.tsx`

### 3D Animations
- Particle count and complexity in `three/neural-network.tsx`
- Performance automatically adjusts for mobile devices

## 📱 Mobile Optimization

- Touch gestures for interactive elements
- Reduced particle counts for performance
- Responsive typography and spacing
- Progressive enhancement for 3D features

## 🔧 Performance Features

- **Code Splitting**: Dynamic imports for heavy components
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Caching**: Strategic cache headers for static assets
- **Bundle Analysis**: Optimized chunk splitting for Three.js and other libraries
- **Mobile Performance**: Reduced complexity on mobile devices

## 🔍 SEO Features

- **Structured Data**: Person and Organization schema
- **Meta Tags**: Comprehensive Open Graph and Twitter cards
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Performance Monitoring**: Core Web Vitals tracking

## 📞 Contact

**Nithin V** - Senior AI Engineer
- Email: nithinv@email.com
- LinkedIn: [linkedin.com/in/nithinv](https://linkedin.com/in/nithinv)
- GitHub: [github.com/nithinv](https://github.com/nithinv)
- Portfolio: [https://portfolio.nkumarv18.workers.dev/](https://portfolio.nkumarv18.workers.dev/)

---

Built with ❤️ by Nithin V using cutting-edge web technologies.
