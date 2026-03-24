const config = {
  plugins: {
    "@tailwindcss/postcss": {
      content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx,scss}",
      ],
    },
  },
};

export default config;
