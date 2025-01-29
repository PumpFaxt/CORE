const pm = process.env.npm_execpath || "";

if (!pm.includes("bun")) {
    console.error(
        "\n\n",
        "\x1b[31mThis project requires Bun. Please install Bun and use it instead of npm, yarn, pnpm or any other package manager/runtime.\x1b[0m",
        "\n\n"
    );
    process.exit(1); // Exit with error
}