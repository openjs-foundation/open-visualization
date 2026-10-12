# Open Visualization

The Open Visualization Collaboration Space "OpenVis" is a forum within the OpenJS Foundation to neutrally govern the most comprehensive and widely adopted visualization libraries based on JavaScript and WebGL.

This is our website, built on [Next.js](https://nextjs.org/) and hosted on [Vercel](https://vercel.com/).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [Technology Stack](#technology-stack)
- [License](#license)
- [Links](#links)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.18.1 or higher (Volta recommended, but not required)
- **Yarn**: Version 1.22.22 (Yarn 1 is required as Vercel only supports Yarn 1)

You can check your versions by running:

```bash
node --version
yarn --version
```

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/openjs-foundation/open-visualization.git
cd open-visualization
```

2. **Install dependencies:**

```bash
yarn install
```

3. **Set up environment variables:**

```bash
cp .env.example .env.local
```

4. **Run the development server:**

```bash
yarn dev
```

This will start both the Next.js development server and Slice Machine concurrently.

5. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

The page auto-updates as you edit files in the `app/` directory.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in development mode with both Next.js and Slice Machine.

### `yarn next`

Runs only the Next.js development server on [http://localhost:3000](http://localhost:3000).

### `yarn build`

Builds the application for production. The build is optimized for best performance.

### `yarn start`

Starts the production server. You must run `yarn build` first.

### `yarn lint`

Runs the linter to check for code quality issues.

### `yarn slicemachine`

Starts the Slice Machine for managing Prismic slices.

## Environment Variables

See step 3 in the [Getting Started](#getting-started) section above for local setup.

For production, set `NEXT_PUBLIC_SITE_URL` to the appropriate production URL.

## Contributing

We welcome contributions to the Open Visualization website! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Run linting** (`yarn lint`)
5. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
6. **Push to the branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Contribution Ideas

- Improve documentation
- Fix bugs or issues
- Add new features
- Enhance UI/UX
- Write tests
- Optimize performance

Please ensure your code follows the project's coding standards and passes all linting checks.

For larger changes, please open an issue to discuss the proposal first.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Styled Components
- **CMS**: Prismic
- **UI Components**: Radix UI, Lucide Icons
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## License

This project is part of the OpenJS Foundation. Please refer to the OpenJS Foundation governance for licensing information.

## Links

- [OpenJS Foundation](https://openjsf.org/)
- [Open Visualization on GitHub](https://github.com/openjs-foundation/open-visualization)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prismic Documentation](https://prismic.io/docs)
