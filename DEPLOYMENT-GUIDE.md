# 🚀 Angular GitHub Pages Deployment Guide

This comprehensive guide will walk you through deploying Angular applications to GitHub Pages successfully.

## 📋 Prerequisites

- [x] Angular CLI installed (`npm install -g @angular/cli`)
- [x] Git repository on GitHub
- [x] Node.js and npm installed
- [x] Angular project ready for deployment

## 🛠️ Step-by-Step Deployment Process

### 1. Prepare Your Angular Project

```bash
# Navigate to your Angular project directory
cd your-angular-project

# Install dependencies
npm install

# Test local build
ng build --configuration production
```

### 2. Install GitHub Pages Deployment Tool

```bash
# Install angular-cli-ghpages globally
npm install -g angular-cli-ghpages

# Or add to your project dependencies
npm install --save-dev angular-cli-ghpages
```

### 3. Build for GitHub Pages

**CRITICAL**: Use the correct base-href pointing to your GitHub repository name.

```bash
# Replace "your-repo-name" with your actual GitHub repository name
ng build --configuration production --base-href="/your-repo-name/"
```

**Example:**
```bash
ng build --configuration production --base-href="/Angular-20-Exercise-Project-/"
```

### 4. Deploy to GitHub Pages

```bash
# Deploy using angular-cli-ghpages
npx angular-cli-ghpages --dir=dist/your-project-name/browser --repo=https://github.com/username/your-repo-name.git
```

**Example:**
```bash
npx angular-cli-ghpages --dir=dist/newStandalone/browser --repo=https://github.com/MohamedTwfiek-7/Angular-20-Exercise-Project-.git
```

### 5. Verify Deployment

1. Wait 2-3 minutes for GitHub Pages to process
2. Visit: `https://username.github.io/your-repo-name/`
3. Check browser console for any 404 errors

## 🔧 Common Issues & Solutions

### Problem: 404 Errors for CSS/JS Files

**Cause**: Incorrect base-href configuration

**Solution**:
```bash
# Ensure base-href matches your repository name exactly
ng build --configuration production --base-href="/your-exact-repo-name/"
```

### Problem: Angular 17+ Build Output Structure

**Note**: Angular 17+ outputs to `dist/project-name/browser` instead of `dist/project-name`

**Solution**: Always use the correct path in deployment:
```bash
--dir=dist/your-project-name/browser
```

### Problem: GitHub Pages Not Updating

**Solutions**:
1. Clear browser cache
2. Wait 5-10 minutes for propagation
3. Check GitHub repository Settings > Pages
4. Ensure gh-pages branch is selected as source

## 📁 Project Structure After Deployment

```
your-project/
├── dist/
│   └── your-project-name/
│       └── browser/          # ← Deploy this folder
│           ├── index.html
│           ├── main-*.js
│           ├── polyfills-*.js
│           ├── styles-*.css
│           └── ...
├── src/
├── package.json
└── angular.json
```

## 🎯 Production-Ready Checklist

### Before Deployment:
- [ ] Project builds successfully locally
- [ ] All routes work with Angular Router
- [ ] API endpoints are configured for production
- [ ] Environment variables are set correctly
- [ ] Bundle size is optimized

### After Deployment:
- [ ] Site loads without errors
- [ ] All CSS styles are applied
- [ ] JavaScript functionality works
- [ ] Navigation between routes works
- [ ] No 404 errors in browser console
- [ ] Site is responsive on mobile devices

## 🔄 Automated Deployment (Optional)

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
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
      run: ng build --configuration production --base-href="/your-repo-name/"
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/your-project-name/browser
```

### Package.json Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "build:prod": "ng build --configuration production",
    "build:gh": "ng build --configuration production --base-href=\"/your-repo-name/\"",
    "deploy:gh": "npm run build:gh && npx angular-cli-ghpages --dir=dist/your-project-name/browser",
    "deploy:gh-repo": "npm run build:gh && npx angular-cli-ghpages --dir=dist/your-project-name/browser --repo=https://github.com/username/your-repo-name.git"
  }
}
```

## 🌐 Custom Domain (Optional)

### Setup Custom Domain:

1. Add `CNAME` file to `src/` folder:
```
yourdomain.com
```

2. Configure in `angular.json`:
```json
{
  "build": {
    "options": {
      "assets": [
        "src/favicon.ico",
        "src/assets",
        "src/CNAME"
      ]
    }
  }
}
```

3. Update base-href for custom domain:
```bash
ng build --configuration production --base-href="/"
```

## 🔍 Troubleshooting Commands

### Check Build Output:
```bash
# List build files
ls -la dist/your-project-name/browser/

# Check index.html base href
cat dist/your-project-name/browser/index.html | grep "base href"
```

### Force Clean Build:
```bash
# Clear Angular cache
ng cache clean

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clean build
rm -rf dist/
ng build --configuration production --base-href="/your-repo-name/"
```

### Verify GitHub Pages Settings:
1. Go to GitHub repository
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: gh-pages
5. Folder: / (root)

## 📊 Success Indicators

✅ **Deployment Successful When:**
- No 404 errors in browser console
- CSS styles load correctly
- JavaScript executes without errors
- Angular routing works properly
- Site loads at `https://username.github.io/repo-name/`

## 🎉 Quick Deployment Commands

For future deployments, use these quick commands:

```bash
# One-line deployment
ng build --configuration production --base-href="/your-repo-name/" && npx angular-cli-ghpages --dir=dist/your-project-name/browser

# With specific repository
ng build --configuration production --base-href="/your-repo-name/" && npx angular-cli-ghpages --dir=dist/your-project-name/browser --repo=https://github.com/username/your-repo-name.git
```

---

## 📝 Notes

- Replace `your-repo-name` with your actual GitHub repository name
- Replace `your-project-name` with your Angular project name
- Replace `username` with your GitHub username
- Base-href must include leading and trailing slashes: `/repo-name/`
- GitHub Pages may take 5-10 minutes to reflect changes

## 🆘 Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Verify the base-href is correct
3. Ensure the build output path is accurate
4. Check GitHub Pages settings in repository
5. Wait 10 minutes and try again

---

**Happy Deploying! 🚀**