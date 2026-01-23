# Resolute ISR Website

## Project Overview
A modern Next.js 13+ website built with React and TypeScript for Resolute ISR - Intelligence, Surveillance & Reconnaissance solutions featuring the Resolute Eagle UAS platform.

## Tech Stack
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Project Structure
```
app/
├── layout.tsx                 # Root layout with metadata
├── page.tsx                   # Homepage
├── globals.css               # Global Tailwind styles
├── components/
│   ├── Navigation.tsx        # Header with responsive menu
│   └── Footer.tsx            # Footer with links and contact info
├── services/
│   └── page.tsx              # Services detail page
├── contact/
│   └── page.tsx              # Contact form and info
├── gallery/
│   └── page.tsx              # Photo gallery
└── about/
    └── page.tsx              # About the company

public/
├── css/
├── js/
└── images/
```

## Pages

### Homepage (`/`)
- Hero section highlighting Intelligence, Surveillance, Reconnaissance
- Resolute Eagle UAS specifications (18.2 ft wingspan, 300 lbs MTOW, 33 Hp engine, VTOL capability)
- Three main capability cards:
  - Wingspan & Specifications
  - Payload Capacity (2,500W total power, 1,842 cubic in fuselage)
  - Runway Independence (VTOL & Fixed Wing)
- Company information about OEM capabilities
- Contact information: 855-880-2233, 4100 Lambert Drive, Howell, MI 48855
- CTA for downloading capabilities briefing

### About (`/about`)
- Company mission and ISR philosophy
- Resolute Eagle UAS platform details
- Design to deployment capabilities
- Why choose Resolute ISR

### Services (`/services`)
- Detailed UAS specifications and capabilities

### Contact (`/contact`)
- Contact form
- Corporate headquarters information
- Phone: 855-880-2233
  - Concrete Polishing
  - Metallic Resin Floors
  - Concrete Polishing
- Key benefits and applications for each service
- Process explanation
- Call-to-action

### Contact (`/contact`)
- Contact form
- Business information
- Phone, email, address, hours
- Form submission handling

### Gallery (`/gallery`)
- Image gallery showcasing projects
- Category filtering
- Hover effects

### About (`/about`)
- Company story
- Mission statement
- Why choose us section

## Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark theme with orange accents (#ff8c00)
- ✅ Fast performance with Next.js
- ✅ SEO-friendly structure
- ✅ Contact form with validation
- ✅ Mobile menu navigation
- ✅ Service navigation links
- ✅ Social media links
- ✅ Smooth scrolling

## Color Scheme
- **Primary Orange**: #ff8c00
- **Dark Background**: #1a1a1a / #000000
- **Light Gray**: #f8f9fa
- **Text Dark**: #333333

## Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

The development server will start at `http://localhost:3000`

## Business Information
- **Company**: Tampa Bay Concrete Coatings
- **Phone**: (727) 743-7242
- **Address**: 386 Tavernier Cir, Oldsmar, FL 34677
- **Service Areas**: Tampa Bay, Florida

## Services
1. **Epoxy Garage Floors** - 10-20 year durability
2. **Metallic Resin Floors** - 3D effect, 15+ years
3. **Concrete Polishing** - Natural stone look, LEED certified

## Deployment
Ready to deploy to Vercel, Netlify, or any Node.js hosting:

```bash
# Vercel
vercel

# Build command: npm run build
# Start command: npm run start
```

## Development Notes
- Pages are built with TypeScript for type safety
- Component-based architecture for reusability
- Tailwind CSS for utility-first styling
- SVG icons for social media
- Form validation on contact page
- Mobile-first responsive design
