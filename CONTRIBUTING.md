# Contributing to Al Owais Real Estate Website

Thank you for your interest in contributing to the Al Owais Real Estate website! This document provides guidelines for contributing to this project.

## 🌟 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and TailwindCSS

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/alowais-realestate-website.git`
3. Install dependencies: `npm install`
4. Create a `.env.local` file based on `.env.example`
5. Start development server: `npm run dev`

## 🔧 Development Guidelines

### Code Style
- Use **TypeScript** for all new components
- Follow **React functional components** with hooks
- Use **TailwindCSS** for styling
- Maintain **bilingual support** (English/Arabic)
- Ensure **RTL compatibility** for Arabic content

### Component Structure
```typescript
import React from 'react';
import { useLanguage } from './LanguageContext';

interface ComponentProps {
  // Define props here
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  const { isArabic, t } = useLanguage();
  
  return (
    <div className={`base-classes ${isArabic ? 'arabic-specific' : 'english-specific'}`}>
      {t('translation.key')}
    </div>
  );
};

export default Component;
```

### Translation Guidelines
- Add new translation keys to `LanguageContext.tsx`
- Use descriptive key names: `section.component.element`
- Provide both English and Arabic translations
- Use Arabic-Indic numerals for Arabic content
- Test RTL layout for Arabic text

### Commit Messages
Use conventional commit format:
- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

Example: `feat: add new project showcase component`

## 🌐 Internationalization (i18n)

### Adding New Translations
1. Add keys to the `translations` object in `LanguageContext.tsx`
2. Use the `t()` function in components: `{t('your.key')}`
3. Apply appropriate fonts: `${isArabic ? 'font-brand-arabic' : 'font-brand-latin'}`
4. Consider RTL layout adjustments

### Arabic Content Guidelines
- Use Arabic-Indic numerals (١٢٣) instead of Western numerals (123)
- Ensure proper RTL text direction
- Test icon positioning for RTL layout
- Use appropriate Arabic fonts (Cairo)

## 🎨 Design Guidelines

### Color Palette
- Primary Blue: `#21A1D9`
- Dark Blue: `#1a7fb0`
- Dark Gray: `#2B3A4A`
- Light backgrounds and neutral tones

### Responsive Design
- Mobile-first approach
- Test on multiple screen sizes
- Ensure touch-friendly interfaces
- Optimize images for different devices

### Accessibility
- Use semantic HTML elements
- Provide proper ARIA attributes
- Ensure keyboard navigation
- Maintain good color contrast
- Add alt text for images

## 🚀 Deployment

### Build Process
```bash
npm run build    # Creates production build
npm run preview  # Preview production build locally
```

### Pre-deployment Checklist
- [ ] All translations are complete
- [ ] RTL layout works correctly
- [ ] Images are optimized
- [ ] SEO meta tags are updated
- [ ] Contact information is correct
- [ ] All links are functional

## 📝 Pull Request Process

1. **Create a feature branch**: `git checkout -b feature/your-feature-name`
2. **Make your changes** following the guidelines above
3. **Test thoroughly** in both languages
4. **Update documentation** if needed
5. **Submit a pull request** with:
   - Clear description of changes
   - Screenshots for UI changes
   - Testing notes for both languages

### PR Review Criteria
- Code follows established patterns
- Bilingual functionality works correctly
- RTL layout is properly implemented
- No accessibility regressions
- Performance is not negatively impacted

## 🐛 Bug Reports

When reporting bugs, please include:
- **Environment**: Browser, OS, device
- **Language**: English or Arabic
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** if applicable

## 💡 Feature Requests

For new features, please:
- Check existing issues first
- Provide clear use case
- Consider bilingual implications
- Suggest implementation approach

## 📞 Contact

For questions or support:
- **Email**: info@alowaisrealestate.com
- **Phone**: +971 4 266 4999

---

Thank you for contributing to Al Owais Real Estate website! 🏢✨
