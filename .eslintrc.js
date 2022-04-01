module.exports = {
  "extends": [
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended"
  ],
  "plugins": [
    "prettier",
    "tailwindcss"
  ],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react-hooks/exhaustive-deps": "off"
  }
}
