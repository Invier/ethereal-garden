module.exports = {
  darkMode: ['class', '[data-prefers-color="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        border: "hsl(var(--border))",
        input: {
          DEFAULT: "hsl(var(--input))",
          text: "hsl(var(--input-text))",
        },
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blue: {
          DEFAULT: "hsl(var(--blue-background))",
          onHover: "hsl(var(--blue-background-hover))",
          secondary: "hsl(var(--blue-background-light))",
        },
        grey: {
          DEFAULT: "hsl(var(--grey))",
          secondary: "hsl(var(--grey-light))",
        },
      },
      boxShadow: {
        "inset": 'inset 0 0 0 2px hsl(var(--primary))',
        "inset-sm": 'inset 0 0 0 1px hsl(var(--primary))',
        "inset-md": 'inset 0 0 0 4px hsl(var(--primary))',
        "inset-lg": 'inset 0 0 0 8px hsl(var(--primary))',
        "inset-xl": 'inset 0 0 0 13px hsl(var(--primary))',
        "inset-2xl": 'inset 0 0 0 25px hsl(var(--primary))',
      },
    },
  },
}