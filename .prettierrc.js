module.exports = {
    tabWidth: 4,
    semi: true,
    trailingComma: "es5",
    singleQuote: false,
    printWidth: 80,
    endOfLine: "auto",
    overrides: [
        {
            files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
            options: {
                parser: "typescript",
            },
        },
        {
            files: ["*.md", "*.json", "*.yaml", "*.yml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
