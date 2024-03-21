module.exports = {
  eslintIntegration: true,
  printWidth: 150, // 每行代码长度（默认80）
  tabWidth: 2, // 每个tab相当于多少个空格（默认4）
  useTabs: false, // 使用制表符 (tab) 缩进行而不是空格 (space)（默认false）
  semi: false, // 是否在语句末尾打印分号(默认true)
  singleQuote: true, // 使用单引号（默认false）
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  trailingComma: 'none', // 多行使用拖尾逗号（默认none）
  bracketSpacing: true, // 对象字面量的大括号间使用空格（默认true）
  jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
  proseWrap: 'always' // 超出print width（上面有这个参数）时就折行
}
