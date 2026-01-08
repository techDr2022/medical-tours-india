# Deployment Guide: Git & Vercel

## Step 1: Push to GitHub

### 1.1 Stage all files
```bash
git add .
```

### 1.2 Make your first commit
```bash
git commit -m "Initial commit: Medical Tours India website with treatment pages"
```

### 1.3 Create a GitHub repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it (e.g., `medical-tours-india` or `mti-website`)
4. **Don't** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### 1.4 Add remote and push
```bash
# Replace YOUR_USERNAME and REPO_NAME with your actual values
git remote add origin https://github.com/techDr2022/medical-tours-india.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub (recommended) or email

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the repository you just pushed

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Environment Variables** (if needed)
   - If you have any `.env` variables (like Resend API keys), add them here:
     - Click "Environment Variables"
     - Add each variable:
       - Name: `RESEND_API_KEY`
       - Value: `your-api-key-here`
       - Environment: Production, Preview, Development (select all)

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at `your-project.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production: `vercel --prod`

## Step 3: Post-Deployment Checklist

### 3.1 Update Domain (Optional)
- Go to Vercel Dashboard → Your Project → Settings → Domains
- Add your custom domain (e.g., `cost.medicaltoursindia.com`)

### 3.2 Verify Environment Variables
- Ensure all API keys are set in Vercel dashboard
- Check that `RESEND_API_KEY` is configured if using email

### 3.3 Test Your Site
- Visit your Vercel URL
- Test form submissions
- Check all pages load correctly
- Verify logo displays properly

### 3.4 Update External Links
- Update any hardcoded URLs in your code to use the production domain
- Check `app/layout.tsx` for metadata URLs

## Troubleshooting

### Build Errors
- Check Vercel build logs in the dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses 18.x by default)

### Image Loading Issues
- Verify `next.config.js` has correct `remotePatterns` for external images
- Check that logo URL is accessible

### Environment Variables Not Working
- Make sure variables are set in Vercel dashboard
- Redeploy after adding new variables
- Use `process.env.VARIABLE_NAME` in your code

## Quick Commands Reference

```bash
# Git commands
git add .
git commit -m "Your commit message"
git push origin main

# Vercel CLI commands
vercel login
vercel              # Deploy to preview
vercel --prod       # Deploy to production
vercel env ls       # List environment variables
```

## Next Steps After Deployment

1. **Set up custom domain** (if you have one)
2. **Configure analytics** (optional - Google Analytics, etc.)
3. **Set up monitoring** (Vercel Analytics is free)
4. **Test all forms and functionality**
5. **Share your live URL!**

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
