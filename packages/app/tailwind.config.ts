import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
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
                inherit: "inherit",
            },
            colors: {
                background: "rgb(var(--color-background) / <alpha-value>)",
                foreground: "rgb(var(--color-foreground) / <alpha-value>)",
                primary: {
                    DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
                    foreground:
                        "rgb(var(--color-primary-foreground) / <alpha-value>)",
                },
                secondary: {
                    DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
                    foreground:
                        "rgb(var(--color-secondary-foreground) / <alpha-value>)",
                },
                muted: {
                    DEFAULT: "rgb(var(--color-muted) / <alpha-value>)",
                    foreground:
                        "rgb(var(--color-muted-foreground) / <alpha-value>)",
                },
                destructive: {
                    DEFAULT: "rgb(var(--color-destructive) / <alpha-value>)",
                    foreground:
                        "rgb(var(--color-destructive-foreground) / <alpha-value>)",
                },
                gain: {
                    DEFAULT: "rgb(var(--color-gain) / <alpha-value>)",
                    foreground:
                        "rgb(var(--color-gain-destructive) / <alpha-value>)",
                },
                border: "rgb(var(--color-border) / <alpha-value>)",
            },
            height: { "2px": "2px" },
            fontFamily: {
                geist: "Geist, sans-serif",
            },
            aspectRatio: {
                card: "1.586",
            },
            zIndex: { "1": "1", "2": "2", "999": "999" },
        },
    },

    plugins: [
        function (i: any) {
            i.addBase({
                ":root": {
                    "--color-background": "1 1 1",
                    "--color-foreground": "235 236 239",
                    "--color-primary": "23 96 232",
                    "--color-primary-foreground": "230 230 230",
                    "--color-secondary": "37 37 37",
                    "--color-secondary-foreground": "245 245 245",
                    "--color-muted": "39 45 53",
                    "--color-muted-foreground": "255 255 255",
                    "--color-destructive": "239 68 68",
                    "--color-destructive-foreground": "250 250 250",
                    "--color-gain": "14 205 129",
                    "--color-gain-foreground": "15 15 15",
                    "--color-border": "49 49 53",
                    "--radius": "0.5rem",
                },
            });
        },
        function (i: any) {
            const utilities = {
                ".p-page": {
                    "@apply px-5": {},
                },
            };
            i.addUtilities(utilities);
        },
    ],
} satisfies Config;
