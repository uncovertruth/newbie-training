module.exports = {
  linters: {
    "*.pug": [
      "pug-lint"
    ],
    "*.md": [
      "prettier --write",
      "textlint --cache -c @uncovertruth/textlint-config-ja"
    ]
  },
  ignore: ['docs/**']
}
