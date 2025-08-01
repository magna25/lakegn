# Deployment Guide

## GitHub Actions Setup

This project uses GitHub Actions for CI/CD with automatic deployment to Vercel.

### Required GitHub Secrets

Add these secrets in your GitHub repository settings (Settings → Secrets and variables → Actions):

#### Telegram Configuration
- `TELEGRAM_BOT_TOKEN` - Your Telegram bot token from BotFather
- `TELEGRAM_CHAT_ID` - Your Telegram channel/chat ID

#### Vercel Configuration
- `VERCEL_TOKEN` - Your Vercel API token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

### Vercel Setup

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Initialize your project:**
```bash
# In your project directory
vercel

# Follow the prompts:
# - Link to existing project or create new? Create new
# - Project name: lakegn
# - Directory: ./
# - Override settings? No
```

4. **Get your Vercel IDs:**
```bash
# This creates .vercel/project.json with your IDs
cat .vercel/project.json
```

5. **Get your Vercel Token:**
- Go to https://vercel.com/account/tokens
- Create a new token
- Copy the token value

6. **Add Environment Variables in Vercel:**
- Go to your project dashboard on Vercel
- Settings → Environment Variables
- Add:
  - `TELEGRAM_BOT_TOKEN` = `7306110680:AAG1soLSWcovHSHOVSsSxSpmtFIPcfZImBk`
  - `TELEGRAM_CHAT_ID` = `-1002371990205`

### Workflow Overview

#### PR Validation (`.github/workflows/pr-validation.yml`)
- Triggers on pull requests to `main`
- Installs dependencies
- Runs linting and type checking
- Builds the application
- Validates build artifacts

#### Deployment (`.github/workflows/deploy.yml`)
- Triggers on pushes to `main` branch
- Builds the application
- Deploys to Vercel automatically
- Zero-downtime deployments
- Automatic rollbacks on failure

### Manual Deployment Commands

If you need to deploy manually:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

### Monitoring

Monitor your application:
- Vercel Dashboard: https://vercel.com/dashboard
- View logs: `vercel logs`
- View deployments: `vercel ls`
- View functions: Vercel dashboard → Functions tab

### Troubleshooting

1. **Build fails**: Check if all environment variables are set in Vercel dashboard and GitHub secrets
2. **Deployment fails**: Verify VERCEL_TOKEN, VERCEL_ORG_ID, and VERCEL_PROJECT_ID in GitHub secrets
3. **API routes not working**: Check function logs in Vercel dashboard
4. **Environment variables missing**: Ensure they're set in both Vercel dashboard and GitHub secrets

### Vercel Benefits

- **Free tier**: Perfect for consultancies (1,000 function calls/day)
- **Automatic HTTPS**: SSL certificates included
- **Global CDN**: Fast worldwide delivery
- **Serverless functions**: Your API routes scale automatically
- **Zero config**: Works out of the box with Next.js
- **Custom domains**: Free custom domain support

### Security Notes

- Never commit `.env.local` or sensitive credentials
- Environment variables are encrypted in Vercel
- Automatic security headers
- Monitor function execution in Vercel dashboard