# Datathink Website

The marketing website for Datathink, built with [Next.js](https://nextjs.org) (App Router), React 19, and Tailwind CSS v4.

## Prerequisites

- [Node.js](https://nodejs.org) 24
- [pnpm](https://pnpm.io) 11 (this project uses pnpm as its package manager)

## Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/datathink/datathink-website.git
   cd datathink-website
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit files. Components live in `components/` and pages live in `app/`.

## Available Scripts

- `pnpm dev` — start the development server
- `pnpm build` — create a production build
- `pnpm start` — serve the production build
- `pnpm lint` — check the code with Biome
- `pnpm format` — format the code with Biome

## Contributing

We use a branch-and-pull-request workflow. Please do not commit directly to `main`.

1. Create a branch for your change:

   ```bash
   git checkout -b your-feature-branch
   ```

2. Make your changes and commit them. Before pushing, make sure linting and the build pass (these also run in CI):

   ```bash
   pnpm lint
   pnpm build
   ```

3. Push your branch and open a pull request:

   ```bash
   git push -u origin your-feature-branch
   gh pr create
   ```

4. Assign [Eli (`Ebj8`)](https://github.com/Ebj8) as the reviewer on your PR:

   ```bash
   gh pr edit --add-reviewer Ebj8
   ```

   Or add Eli as a reviewer from the PR page on GitHub.

Once Eli approves the PR, it can be merged.
