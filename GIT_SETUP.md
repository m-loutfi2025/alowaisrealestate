# Git Setup Instructions

Follow these steps to upload the Al Owais Real Estate website to GitHub.

## 🚀 Quick Setup

### 1. Initialize Git Repository
```bash
# Navigate to project directory
cd /Users/mohamedloutfi/Library/CloudStorage/OneDrive-Personal/Downloads/alowais\ realestate-website

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial commit - Al Owais Real Estate website v1.0.0

- Complete bilingual website (English/Arabic)
- RTL support with Arabic number formatting
- 6 project showcases and team profiles
- Contact form with Google Maps integration
- News section and comprehensive footer
- Responsive design with accessibility features
- Modern React 19 + TypeScript + Vite stack"
```

### 2. Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository" (green button)
3. Repository name: `alowais-realestate-website`
4. Description: `Al Owais Real Estate LLC - Investment & Development in Dubai. Bilingual website with Arabic/English support.`
5. Set to **Public** or **Private** (your choice)
6. **DO NOT** initialize with README (we already have one)
7. Click "Create repository"

### 3. Connect Local Repository to GitHub
```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/alowais-realestate-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🔧 Alternative: Using GitHub CLI
If you have GitHub CLI installed:
```bash
# Create repository and push in one command
gh repo create alowais-realestate-website --public --source=. --remote=origin --push

# Or for private repository
gh repo create alowais-realestate-website --private --source=. --remote=origin --push
```

## 📋 Pre-upload Checklist

Before uploading to GitHub, ensure:

### ✅ Files Ready
- [ ] `.gitignore` is properly configured
- [ ] `.env.local` is NOT committed (should be ignored)
- [ ] `README.md` is comprehensive and up-to-date
- [ ] `package.json` has correct project information
- [ ] All documentation files are included

### ✅ Code Quality
- [ ] Project builds successfully (`npm run build`)
- [ ] No sensitive information in code
- [ ] All components are properly documented
- [ ] Translation keys are complete

### ✅ Repository Settings
- [ ] Repository name is descriptive
- [ ] Description explains the project
- [ ] Topics/tags are added for discoverability
- [ ] License is specified (MIT)

## 🏷️ Repository Configuration

After creating the repository, configure these settings:

### Repository Topics
Add these topics for better discoverability:
```
real-estate, dubai, react, typescript, vite, bilingual, arabic, rtl, tailwindcss, responsive-design
```

### Branch Protection (Optional)
For collaborative development:
1. Go to Settings → Branches
2. Add rule for `main` branch
3. Enable "Require pull request reviews"
4. Enable "Require status checks"

### GitHub Pages (Optional)
To host the website on GitHub Pages:
1. Go to Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `main` / `docs` or use GitHub Actions
4. Custom domain: `www.alowaisrealestate.com` (if you own it)

## 🔄 Development Workflow

### Daily Development
```bash
# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push feature branch
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

### Release Process
```bash
# Update version in package.json
npm version patch  # or minor/major

# Tag the release
git tag -a v1.0.1 -m "Release v1.0.1"

# Push tags
git push origin --tags
```

## 🌐 Deployment Integration

### Automatic Deployment
Many platforms can auto-deploy from GitHub:

#### Vercel
1. Connect GitHub repository
2. Auto-deploys on every push to `main`
3. Preview deployments for pull requests

#### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

#### GitHub Pages
Use GitHub Actions for automatic deployment (see `DEPLOYMENT.md`)

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files
- Use platform-specific environment variables
- Document required variables in `.env.example`

### Sensitive Information
- No API keys in code
- No personal information
- No internal business data

## 📞 Support

If you encounter issues:
1. Check GitHub's [documentation](https://docs.github.com)
2. Contact: info@alowaisrealestate.com
3. Create an issue in the repository

## 🎉 After Upload

Once uploaded to GitHub:
1. ✅ Verify all files are present
2. ✅ Check that README displays correctly
3. ✅ Test clone and build process
4. ✅ Set up deployment (if desired)
5. ✅ Share repository with team members

---

**Congratulations! Your Al Owais Real Estate website is now on GitHub!** 🎊

Repository URL will be: `https://github.com/YOUR_USERNAME/alowais-realestate-website`
