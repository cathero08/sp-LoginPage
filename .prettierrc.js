module.exports = {
  semi: true, // 每個語句的結尾不需要分號
  tabWidth: 4, // Specify the number of spaces per indentation-level.
  rangeStart: 0, // 每个文件格式化的範圍是文件的全部内容
  useTabs: true, // 使用 Tab 縮排
  printWidth: 200,
  endOfLine: 'auto', // 換行符號使用
  singleQuote: true, // 字串使用單引號，而不是雙引號
  proseWrap: 'never', // 預設斷行
  insertPragma: false, // 不需要自動在文件開頭插入 @prettier
  requirePragma: false, // 不需要寫文件開頭的 @prettier
  bracketSpacing: true, // Print spaces between brackets in object literals.
  trailingComma: 'es5',
  jsxSingleQuote: false, // Use single quotes instead of double quotes in JSX.
  arrowParens: 'always', // Include parentheses around a sole arrow function parameter.
  quoteProps: 'as-needed', // Change when properties in objects are quoted.
  jsxBracketSameLine: false, // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
  vueIndentScriptAndStyle: true, //  Indent script and style tags in Vue files.
  htmlWhitespaceSensitivity: 'strict', // Whitespace (or the lack of it) around all tags is considered significant.
  noDuplicateAttributes: false // 屬性重複命名判別
}
