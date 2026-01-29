# CA Soluciones Digitales y Tecnológicas

This is a premium agency website built with Next.js 14+, Tailwind CSS (v4), and Framer Motion.

## Features
- **Modern Dark Aesthetic**: Glassmorphism, neon accents, and smooth animations.
- **Responsive Design**: Mobile-first approach with custom interactive components.
- **Core Pages**: Services, Portfolio (with Modal), Contact (Formspree), Packages comparison.
- **Interactive Chatbot**: Custom decision-tree based floating assistant.
- **Performance**: Optimized with Next.js App Router and static generation.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## Configuration

### Images
- Place your logo at `public/assets/logo.png`.
- Place your bot icon at `public/assets/bot.png`.
- (Optional) Update portfolio placeholder images in `src/app/portafolio/page.tsx`.

### Contact Form
The contact form uses [Formspree](https://formspree.io). 
- Go to `src/components/features/ContactForm.tsx`.
- Update the `useForm("mpwlzjjo")` with your own Formspree ID if needed.

### Colors & Fonts
- Colors are defined in `src/app/globals.css` under the `@theme` block.
- Fonts used: `Inter` (Body) and `Sora` (Headings).

## Deployment

### Vercel (Recommended)
1. Push this code to GitHub.
2. Log in to [Vercel](https://vercel.com).
3. Import the repository.
4. Click **Deploy**. Vercel will automatically detect Next.js.

### Netlify
1. Push to GitHub.
2. Log in to Netlify.
3. "New site from Git".
4. Build command: `npm run build`.
5. Publish directory: `.next`.

---
© 2026 CA Soluciones Digitales.
