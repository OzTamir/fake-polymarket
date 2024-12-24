<div align="center">
  <a href="https://polymarketfaker.xyz">
    <img src="public/icon.svg" alt="Polymarket Faker Logo" width="128" height="128" />
  </a>
</div>

# Polymarket Faker

Create fake Polymarket UI for memes, shitposting, and other shenanigans. This tool lets you generate realistic-looking Polymarket prediction market interfaces for creative purposes.

## 🚀 Features

- Generate realistic Polymarket UI mockups
- Customize market details and prices
- Perfect for creating crypto memes and content
- Built with modern web technologies

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui Components
- Recharts for data visualization
- Date-fns for date handling
- Cloudflare Workers (for CORS proxy)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Wrangler CLI (for Cloudflare Workers)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/polymarket-faker.git
cd polymarket-faker
```

2. Install dependencies:

```bash
npm install
npm install -D wrangler concurrently
```

or with yarn:

```bash
yarn
yarn add -D wrangler concurrently
```

3. Run the development server:

```bash
npm run dev
```

This will start both:

- Vite dev server for the frontend
- Cloudflare Workers development server for the CORS proxy

Alternatively, you can run them separately:

```bash
npm run dev:worker  # Terminal 1: Start Cloudflare Workers
npm run dev        # Terminal 2: Start Vite dev server
```

4. Build the project:

```bash
npm run build
```

## 🧑‍💻 Development Scripts

- `npm run dev` - Start both frontend and worker development servers
- `npm run dev:worker` - Start only the Cloudflare Worker server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## 👨‍💻 Author

Created by [Oz Tamir](https://oztamir.com/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📢 Disclaimer

This tool is for entertainment purposes only. It is not affiliated with Polymarket and should not be used to create misleading or fraudulent content.
