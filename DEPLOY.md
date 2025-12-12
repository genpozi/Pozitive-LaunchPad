# Deployment Guide: POZITIVE AI Launchpad

This guide covers how to deploy the Launchpad to popular hosting providers and local environments.

## 🔑 Prerequisite: Google Gemini API Key
This application uses the Gemini API for its "Smart Search" research capabilities.
You must obtain an API Key from [Google AI Studio](https://aistudio.google.com/).

In all deployment methods below, you must set the environment variable:
`API_KEY=your_gemini_api_key_here`

---

## ⚡ Option 1: Vercel (Recommended)

1.  Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2.  Log in to [Vercel](https://vercel.com/) and click **"Add New..."** -> **"Project"**.
3.  Import your repository.
4.  Vercel will automatically detect `Vite` as the framework.
5.  **Important**: In the "Environment Variables" section, add:
    *   Key: `API_KEY`
    *   Value: `your_actual_api_key`
6.  Click **Deploy**.

## ☁️ Option 2: Netlify

1.  Push this repository to your git provider.
2.  Log in to [Netlify](https://netlify.com/) and click **"New site from Git"**.
3.  Choose your repository.
4.  Netlify will detect the settings:
    *   Build command: `npm run build`
    *   Publish directory: `dist`
5.  Click **"Show advanced"** -> **"New Variable"**:
    *   Key: `API_KEY`
    *   Value: `your_actual_api_key`
6.  Click **Deploy site**.

## 🐳 Option 3: Docker

Create a file named `Dockerfile` in the root directory with the following content:

```dockerfile
# Stage 1: Build
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# Note: In a real build, we might bake the env var in, 
# or use a runtime config script. For simplicity, we assume
# the API key is passed as a build arg or handled via client-side injection.
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t pozitive-launchpad .
docker run -p 8080:80 pozitive-launchpad
```

## 💻 Option 4: Local Development

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Create a `.env` file in the root:
    ```
    API_KEY=your_actual_api_key
    ```
3.  Start the dev server:
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:5173` in your browser.
