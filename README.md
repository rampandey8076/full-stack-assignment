

Build the frontend HTTP layer for **Threadbase**. The Express backend is **already finished** —
your job is the configured Axios instance and the service layer that the rest of the app calls.

## What's already done (don't touch)
- **`server/`** — Express API on port `3001` with CORS enabled:
  - `GET /api/threads` → returns the list of threads
  - `POST /api/threads` → adds a thread, returns it
- **`client/`** — React + Vite app on port `5173`. `App.jsx` already renders a thread list and an
  "Add thread" form, and logs `import.meta.env.VITE_API_URL` to the console for you.

## What YOU implement (2 files)
1. **`client/src/services/apiClient.js`** — an Axios instance (see the TODOs in the file).
2. **`client/src/services/threads.service.js`** — `getThreads()` and `createThread(data)`.

Until you implement these, the app shows a **"Service layer not implemented yet"** placeholder.

## Run it
```bash
npm run setup     # installs root + server + client dependencies
cp client/.env.development.example client/.env.development
npm run dev       # starts Express (3001) + Vite (5173) together
```
Open http://localhost:5173.

## Submit
1. Implement the two files.
2. Confirm the thread list renders and the console logs `http://localhost:3001` (not `undefined`).
3. Commit on a feature branch, push to **your fork**, open a **PR into `main` of your fork**.
4. Submit the PR link. **Include a screenshot of the console log in the PR description.**

> Reminder: `.env.development` is git-ignored on purpose. Never commit real env files —
> commit the `.example` instead.
