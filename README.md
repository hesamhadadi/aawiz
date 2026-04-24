# Aawiz

A Next.js demo showcasing a reusable UI component library, a form with client-side validation, and an API-powered dashboard — all styled with Tailwind CSS.

🌐 **Live demo:** https://aawiz-theta.vercel.app

## Features

- 🎨 Reusable UI primitives: `Button`, `Card`, `Typography` with consistent tokens
- ✅ Form page with field-level validation and submission feedback
- 📊 Dashboard page fetching and rendering data from a public API
- 🧭 App Router layout with nested routes
- 💨 Tailwind CSS + CSS variables for theming
- 🧠 Typed throughout with TypeScript

## Stack

| Tool | Version |
|------|---------|
| Next.js | 15 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| ESLint | 9 |

## Project Structure

```
src/
├── app/
│   ├── form/            # Form with validation
│   └── dashboard/       # API-driven dashboard
├── components/
│   ├── layout/
│   └── ui/              # Button, Card, Typography
├── hooks/
└── lib/
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Author

Hesam Hadadi — [hesamhaddadi.com](https://hesamhaddadi.com)

## License

MIT
