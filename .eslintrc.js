module.exports = {
  "extends": [
    "next/core-web-vitals",
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react-hooks/exhaustive-deps": "off"
  }
}
