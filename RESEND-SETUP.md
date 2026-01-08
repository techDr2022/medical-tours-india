# Resend Email Setup Guide

## Overview
The form submission system uses Resend to send emails directly to **info@techdr.in** without opening the user's email client.

## Setup Instructions

### 1. Create Resend Account
1. Go to https://resend.com
2. Sign up for a free account
3. Verify your email address

### 2. Get API Key
1. Go to https://resend.com/api-keys
2. Click "Create API Key"
3. Name it (e.g., "Medical Tours India Production")
4. Copy the API key (starts with `re_`)

### 3. Verify Domain (Recommended)
1. Go to https://resend.com/domains
2. Add your domain: `cost.medicaltoursindia.com`
3. Add the DNS records provided by Resend
4. Wait for verification (usually takes a few minutes)

### 4. Set Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_ZDq6D4w6_FeGe9rDp4JX3DFsf5BCDXK5j
RESEND_FROM_EMAIL=Medical Tours India <noreply@cost.medicaltoursindia.com>
```

**OR** if domain is not verified, use Resend's default domain:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
```

### 5. For Production (Vercel/Netlify/etc.)

Add these environment variables in your hosting platform:

- **RESEND_API_KEY**: Your Resend API key
- **RESEND_FROM_EMAIL**: Your verified email address

## How It Works

1. User submits the form
2. Form data is sent to `/api/send-email`
3. API route uses Resend to send email to **info@techdr.in**
4. WhatsApp message is also sent with form details
5. User sees success confirmation

## Email Format

The email sent to info@techdr.in includes:
- Patient name, country, WhatsApp, email
- Medical condition description
- Number of files attached
- Submission timestamp
- Source website

## Testing

1. Fill out the form on the website
2. Submit the form
3. Check info@techdr.in inbox for the email
4. Check WhatsApp for the message

## Troubleshooting

### Email not sending?
- Check RESEND_API_KEY is set correctly
- Verify the API key is active in Resend dashboard
- Check Resend dashboard for error logs
- Ensure FROM email is verified

### Domain not verified?
- Use `onboarding@resend.dev` as FROM email temporarily
- Complete domain verification for production

## Resend Limits (Free Tier)
- 3,000 emails/month
- 100 emails/day
- Perfect for lead generation forms

## Upgrade Options
If you need more emails, Resend offers paid plans:
- Pro: $20/month - 50,000 emails
- Business: Custom pricing
