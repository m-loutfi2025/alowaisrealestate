# Deployment Guide

This guide covers various deployment options for the Al Owais Real Estate website.

## 🚀 Quick Deploy Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🔧 Build Configuration

### Environment Variables
Create `.env.production` for production builds:
```bash
VITE_SITE_URL=https://www.alowaisrealestate.com
VITE_CONTACT_EMAIL=info@alowaisrealestate.com
VITE_CONTACT_PHONE=+97142664999
GEMINI_API_KEY=your_production_api_key
```

### Build Commands
```bash
# Development build
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

## 🌐 Domain Configuration

### Custom Domain Setup
1. **DNS Configuration**:
   - Add CNAME record pointing to your hosting provider
   - Configure A records if needed

2. **SSL Certificate**:
   - Most hosting providers offer free SSL
   - Ensure HTTPS redirect is enabled

3. **CDN Configuration**:
   - Configure caching for static assets
   - Set appropriate cache headers

## 📊 Performance Optimization

### Pre-deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test both English and Arabic versions
- [ ] Verify all images are optimized
- [ ] Check mobile responsiveness
- [ ] Test contact form functionality
- [ ] Verify Google Maps integration
- [ ] Test language switching
- [ ] Check RTL layout in Arabic
- [ ] Validate SEO meta tags
- [ ] Test accessibility features

### Build Optimization
```bash
# Analyze bundle size
npm run build -- --analyze

# Check for unused dependencies
npx depcheck

# Optimize images (if needed)
# Consider using tools like imagemin
```

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files to repository
- Use platform-specific environment variable settings
- Rotate API keys regularly

### Content Security Policy
Add to your hosting platform:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.gemini.com;
```

## 📈 Monitoring & Analytics

### Recommended Tools
- **Google Analytics** for traffic analysis
- **Google Search Console** for SEO monitoring
- **Hotjar** or similar for user behavior
- **Uptime monitoring** services

### Performance Monitoring
- **Core Web Vitals** tracking
- **Lighthouse** scores monitoring
- **Real User Monitoring** (RUM)

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run type-check
    - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - name: Deploy to Production
      # Add your deployment step here
```

## 🌍 Multi-region Deployment

### CDN Configuration
- **CloudFlare** for global CDN
- **AWS CloudFront** for enterprise solutions
- **Azure CDN** for Microsoft ecosystem

### Regional Considerations
- **Middle East** servers for better Arabic user experience
- **Global** CDN for international visitors
- **Caching strategies** for different regions

## 📱 Mobile App Deployment (Future)

### Progressive Web App (PWA)
- Add service worker for offline functionality
- Configure app manifest
- Enable push notifications
- Add to home screen functionality

## 🆘 Troubleshooting

### Common Issues
1. **Build Failures**:
   - Check Node.js version compatibility
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

2. **Arabic Text Issues**:
   - Verify font loading
   - Check RTL CSS classes
   - Test on different browsers

3. **Performance Issues**:
   - Optimize images
   - Check bundle size
   - Review third-party scripts

### Support Contacts
- **Technical Issues**: Create GitHub issue
- **Business Inquiries**: info@alowaisrealestate.com
- **Emergency**: +971 4 266 4999

---

**Last Updated**: November 2025
**Version**: 1.0.0
