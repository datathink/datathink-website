<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Development Rules

Please follow these rules when contributing code:

### General

- Only create an abstraction when it's actually needed.
- Prefer clear function/variable names over inline comments.
- Avoid helper functions when a simple inline expression would suffice.
- Don't use emojis.
- The `gh` cli is installed, use it.

### React

- Avoid massive JSX blocks and compose smaller components.
  Colocate code that changes together.
- Avoid `useEffect` unless absolutely necessary.

### Tailwind

- Mostly use built-in values, occasionally allow dynamic values, rarely globals.
- Always use v4 + global CSS file format + shadcn/ui

### TypeScript

- Don't unnecessarily add `try`/`catch` blocks.
- Don't cast `any`
