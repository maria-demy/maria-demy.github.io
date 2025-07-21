# Prettier & Husky Setup

This project uses Prettier for code formatting and Husky with lint-staged for automatic formatting on commit.

## Setup

### Dependencies

- `prettier`: Code formatter
- `husky`: Git hooks
- `lint-staged`: Run linters on staged files

### Configuration Files

- `.prettierrc`: Prettier configuration
- `.prettierignore`: Files to ignore during formatting
- `.husky/pre-commit`: Pre-commit hook that runs lint-staged

## Usage

### Manual Formatting

```bash
# Format all files
npm run format

# Check formatting without changing files
npm run format:check
```

### Automatic Formatting

The pre-commit hook automatically formats staged files when you commit:

```bash
git add .
git commit -m "your message"
# Prettier will format all staged files before commit
```

### Lint-staged Configuration

The `package.json` includes lint-staged configuration:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,css,md}": "prettier --write"
  }
}
```

This runs Prettier on all staged JavaScript, TypeScript, JSON, CSS, and Markdown files.

## Prettier Configuration

The `.prettierrc` file contains:

- Single quotes for strings
- Semicolons at the end of statements
- 80 character line width
- 2 space indentation
- Trailing commas in objects and arrays
- Arrow function parentheses only when needed

## Ignored Files

The `.prettierignore` file excludes:

- `node_modules/` and `dist/` directories
- Package lock files
- Generated files (`.min.js`, `.min.css`)
- Log files
- Environment files
- IDE configuration files
- OS generated files

## Workflow

1. Make changes to your code
2. Stage files with `git add`
3. Commit with `git commit`
4. Husky pre-commit hook runs lint-staged
5. lint-staged runs Prettier on staged files
6. Commit proceeds with formatted code

This ensures all committed code is consistently formatted.
