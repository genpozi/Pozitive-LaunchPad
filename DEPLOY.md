# Deployment Guide: POZITIVE AI Launchpad

This guide covers how to deploy the Launchpad to popular hosting providers and local environments.

## ⚠️ Important: API Key Security

This application is a **Single Page Application (SPA)** that runs entirely in the user's browser.
To enable the "Smart Search / Research" feature powered by **Gemini 2.5**, the application requires a Google Gemini API Key.

**How it works:**
The build process (via Vite) takes the `API_KEY` from your build environment and "bakes" it into the JavaScript bundle. This means:
1.  The key is technically visible to anyone who inspects the network traffic of your deployed site.
2.  **Recommendation**: For a public deployment, use an API Key restricted to your specific domain (e.g., `your-app.vercel.app`) via the Google Cloud Console to prevent unauthorized use.

---

## ⚡ Option 1: Vercel (Recommended)

1.  **Push Code**: Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2.  **Create Project**: Log in to [Vercel](https://vercel.com/) and click **"Add New..."** -> **"Project"**.
3.  **Import**: Select your repository.
4.  **Framework Preset**: Vercel will automatically detect `Vite`.
5.  **Environment Variables**:
    *   Expand the "Environment Variables" section.
    *   **Key**: `API_KEY`
    *   **Value**: Your Gemini API Key (starts with `AIza...`).
6.  **Deploy**: Click **Deploy**.

## ☁️ Option 2: Netlify

1.  **Push Code**: Push this repository to your git provider.
2.  **Create Site**: Log in to [Netlify](https://netlify.com/) and click **"New site from Git"**.
3.  **Configure**:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
4.  **Environment Variables**:
    *   Click **"Show advanced"**.
    *   Click **"New Variable"**.
    *   **Key**: `API_KEY`
    *   **Value**: Your Gemini API Key.
5.  **Deploy**: Click **Deploy site**.

## 🐳 Option 3: Docker

Create a file named `Dockerfile` in the root directory:

```dockerfile
# Stage 1: Build
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Inject API Key at build time
ARG API_KEY
ENV API_KEY=$API_KEY

RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
# Replace 'your_key_here' with your actual key
docker build --build-arg API_KEY=your_key_here -t pozitive-launchpad .
docker run -p 8080:80 pozitive-launchpad
```

## 💻 Option 4: Local Development

1.  **Install**: `npm install`
2.  **Config**: Create a `.env` file in the root directory:
    ```
    API_KEY=your_actual_api_key_starting_with_AIza...
    ```
3.  **Run**: `npm run dev`
4.  **View**: Open `http://localhost:5173` in your browser.
