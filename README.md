# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

Use Node.js 22.17 or newer in the Node.js 22 release line. Dependencies are
installed locally with npm. Once a package-lock.json exists, use `npm ci`
for repeatable installs.

No API keys, database, or environment variables are required by the current
application. `.env.example` documents this; future local configuration belongs
in `.env.local`. Never store secrets in `VITE_*` variables, which are public.

To start on a fixed local address:

```sh
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

Open http://127.0.0.1:5173. Run `npm run build` to verify a production build.
In Windows PowerShell, use `npm.cmd` in place of `npm` if script arguments
such as `--host` are dropped by the PowerShell npm wrapper.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
