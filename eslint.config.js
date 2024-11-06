module.exports = {
  extends: [
    "plugin:import/errors",
    "prettier",
    "next"
  ],
  settings: {
    "import/resolver": {
      "typescript": {}
    }
  }
}