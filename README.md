## Requirements

- Node.js 18.16.0
- npm 7.24.0

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```

## Tailwind CSS Installation

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```
  
  ```js
  // tailwind.config.js
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

  ```css
  /* src/index.css */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
    