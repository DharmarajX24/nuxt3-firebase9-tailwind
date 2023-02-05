# Nuxt3 + Firebase v9 + Tailwind CSS Template

This is a template repository for building fast, scalable, and modern web applications using [Nuxt 3](https://nuxt.com), [Firebase](https://firebase.google.com) v9, and [Tailwind CSS](https://tailwindcss.com).<br>
Firebase Admin SDK is also included for server-side authentication.

## Setup
Make sure to install the dependencies:

```bash
yarn install
# or `npm install` if you prefer npm
```

## Configuration
> :warning: You don't need to use a service account if you are deploying to [Firebase Hosting](https://nitro.unjs.io/deploy/providers/firebase) or any other Google Cloud environment. You can use Application Default Credentials (ADC) instead. Checkout [the documentation](https://firebase.google.com/docs/admin/setup#initialize_the_sdk) for more information. A service account is required only when you are using a non-Google environment like Vercel.

Create a copy of `.env.example` and rename it to `.env`.<br>
Replace the values with your own Firebase project credentials.

If you want to use Firebase Admin SDK, copy fields from your service account JSON file to `.env` file. All service account fields are prefixed with `FIREBASE_SA_`. You must stringify the private key field. It should look like this:
```
FIREBASE_SA_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMI...k=\n-----END PRIVATE KEY-----\n"
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
NITRO_PRESET=firebase yarn build
firebase emulators:start
```

## Deployment
To deploy your web application on Firebase Hosting, run:

```bash
NITRO_PRESET=firebase yarn build
firebase deploy
```
You can deploy your application to any other hosting provider mentioned in [Nuxt 3 deployment documentation](https://nuxt.com/docs/getting-started/deployment).

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
