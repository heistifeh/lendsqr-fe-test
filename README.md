# 🛠 Lendsqr Admin Console (Frontend Test)

This is a frontend technical test project for **Lendsqr**, designed as an Admin Console UI using **React 19**, **TypeScript**, **SCSS**, **TanStack Query**, and **Vite**.

The project includes 4 main pages:

- **Login** (UI-only)
- **Dashboard**
- **Users**
- **User Details**

---

## 🚀 Tech Stack

- ⚛ **React 19** + **TypeScript**
- ⚡ **Vite** for lightning-fast development
- 🎯 **TanStack React Query v5** — data fetching & caching
- 🎨 **SCSS** — modular, responsive styling
- 🌐 **React Router v7** — client-side routing
- 🔧 **ESLint** + **TypeScript ESLint** for code quality

---

## 📁 Project Structure

```
src/
├── api/               # API helpers (e.g., getUsers, getSingleUser)
├── assets/            # Fonts and images
├── components/        # Reusable UI components and page-level views
│   └── pages/         # Page components: Login, Dashboard, Users, UserDetails
├── icons/             # Custom icons
├── interface/         # Design-specific UI elements
├── layouts/           # Shared layouts (e.g., DashboardLayout)
├── styles/            # Global and component SCSS
├── utils/             # Utility functions
├── App.tsx            # Main routing + QueryClient setup
└── main.tsx           # React root entry
```

---

## 📄 Pages Overview

| Page            | Path                       | Description                                   |
| --------------- | -------------------------- | --------------------------------------------- |
| **Login**       | `/login`                   | Static UI only — no auth logic                |
| **Dashboard**   | `/`                        | Admin overview page with placeholder cards    |
| **Users**       | `/customers/users`         | User list table pulled via TanStack Query     |
| **User Detail** | `/customers/users/:userId` | Dynamic tabbed view: General, Bank, Documents |

---

## 🔁 Navigation (React Router)

Routing is defined inside `App.tsx` using `react-router-dom` v7. Here's how routes are set up:

```tsx
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/login" element={<Login />} />
  <Route path="/customers/users" element={<Users />} />
  <Route path="/customers/users/:userId" element={<UserDetails />} />
</Routes>
```

The entire app is wrapped in:

- `QueryClientProvider` from **@tanstack/react-query**
- `BrowserRouter` from **react-router-dom**

---

## 📦 Key Dependencies

```json
"react": "^19.1.0",
"react-router-dom": "^7.6.2",
"@tanstack/react-query": "^5.80.10",
"sass": "^1.89.2",
"vite": "^6.3.5"
```

Dev dependencies include:

- TypeScript (`~5.8.3`)
- ESLint with React & TypeScript plugins
- SCSS tooling

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/lendsqr-admin-test.git
cd lendsqr-admin-test
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

> App will run at `http://localhost:5173`

---

## ✅ Features Completed

- [x] Login page (UI only)
- [x] Responsive Dashboard layout
- [x] User table (API connected via TanStack Query)
- [x] Tab-based User Detail page with dynamic routing
- [x] Modular SCSS styling
- [x] Code linting with ESLint
- [x] Clean and clear routing logic in `App.tsx`

---

## 📝 Notes

- This is a **frontend-only** test project — no auth logic or backend integration.
- Data can be mocked if API endpoints are unavailable.
- Styling is scoped using **SCSS** and designed to be responsive.
- Routing structure is clean and easy to extend.

---
