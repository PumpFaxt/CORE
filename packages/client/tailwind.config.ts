import type { Config } from "npm:tailwindcss";
import motion from "tailwindcss-motion";

export default {
  content: ["./src/**/*.{ts,tsx,jsx}"],
  theme: {
    extend: {
      fontSize: {
        "xxs": "10px",
      },
      borderRadius: {
        xs: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 2px)",
        DEFAULT: "var(--radius)",
        md: "calc(var(--radius) + 2px)",
        lg: "calc(var(--radius) + 4px)",
        xl: "calc(var(--radius) + 6px)",
      },
      colors: {
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        gain: {
          DEFAULT: "hsl(var(--gain))",
          foreground: "hsl(var(--gain-foreground))",
        },
        border: "hsl(var(--border))",
      },
      height: { "2px": "2px" },
      fontFamily: {
        openSans: "Open Sans, sans-serif",
      },
    },
  },
  plugins: [motion],
} satisfies Config;
