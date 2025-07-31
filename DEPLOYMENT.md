# Deployment Guide

## GitHub Actions Setup

This project uses GitHub Actions for CI/CD with automatic deployment to DigitalOcean.

### Required GitHub Secrets

Add these secrets in your GitHub repository settings (Settings → Secrets and variables → Actions):

#### Telegram Configuration
- `TELEGRAM_BOT_TOKEN` - Your Telegram bot token from BotFather
- `TELEGRAM_CHAT_ID` - Your Telegram channel/chat ID

#### DigitalOcean Server Configuration
- `DO_HOST` - Your DigitalOcean droplet IP address
- `DO_USERNAME` - SSH username (usually 'root' or 'ubuntu')
- `DO_SSH_KEY` - Private SSH key for server access
- `DO_PORT` - SSH port (optional, defaults to 22)

### DigitalOcean Server Setup

1. **Install Node.js and PM2:**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Setup PM2 to start on boot
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME
```

2. **Create application directory:**
```bash
sudo mkdir -p /var/www/lakegn
sudo chown $USER:$USER /var/www/lakegn
```

3. **Setup log directory:**
```bash
sudo mkdir -p /var/log/pm2
sudo chown $USER:$USER /var/log/pm2
```

4. **Configure Nginx (optional but recommended):**
```bash
sudo apt install nginx

# Create nginx config
sudo nano /etc/nginx/sites-available/lakegn
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/lakegn /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

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
- Deploys to DigitalOcean via SSH
- Uses PM2 for process management
- Creates backups of previous deployment

### Manual Deployment Commands

If you need to deploy manually:

```bash
# On your local machine
npm run build

# Copy files to server
scp -r .next package*.json next.config.js user@your-server:/var/www/lakegn/current/

# On the server
cd /var/www/lakegn/current
npm ci --only=production
pm2 restart lakegn-app
```

### Monitoring

Check application status:
```bash
pm2 status
pm2 logs lakegn-app
pm2 monit
```

### Troubleshooting

1. **Build fails**: Check if all environment variables are set in GitHub secrets
2. **SSH connection fails**: Verify DO_HOST, DO_USERNAME, and DO_SSH_KEY
3. **Application won't start**: Check PM2 logs with `pm2 logs lakegn-app`
4. **Environment variables missing**: Ensure secrets are properly configured in GitHub

### Security Notes

- Never commit `.env.local` or sensitive credentials
- Use SSH keys instead of passwords
- Regularly update server packages
- Monitor application logs for security issues