# OctoFit Tracker Frontend Environment Variables

## VITE_CODESPACE_NAME

**Required for Codespaces deployment**

When deploying to GitHub Codespaces, set this environment variable to your Codespace name.

### How to use:

1. **Find your Codespace name** - It appears in the URL when you open your Codespace
2. **Set the environment variable** in `.env.local`:
   ```
   VITE_CODESPACE_NAME=your-codespace-name
   ```
3. **Reload the application** - The API URL will be constructed as:
   ```
   https://{CODESPACE_NAME}-8000.app.github.dev/api/[endpoint]
   ```

### Local Development:

If `VITE_CODESPACE_NAME` is not set or is empty, the application automatically falls back to:
```
http://localhost:8000/api/[endpoint]
```

### Examples:

**Codespaces:**
```
VITE_CODESPACE_NAME=super-space-fortnight-r777v6jgrp79c6rp
API Base URL: https://super-space-fortnight-r777v6jgrp79c6rp-8000.app.github.dev/api
```

**Local Development:**
```
VITE_CODESPACE_NAME=
API Base URL: http://localhost:8000/api
```
