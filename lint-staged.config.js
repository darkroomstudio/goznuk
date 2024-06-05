module.exports = {
  '*.{js,jsx,ts,tsx,mdx}': [
    'prettier --write',
    'eslint --no-ignore --max-warnings=0 --fix',
  ],
  '*.{md,json,yml,yaml}': ['prettier --write'],
}
