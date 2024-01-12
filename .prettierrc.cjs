// "$schema": "https://json.schemastore.org/prettierrc",
module.exports = {
  // 箭头函数的参数当仅有一个的时候不允许丢弃括号
  arrowParens: "always",
  // 多行标签代码的时候，尾标签会单独成一行，放在下一行。
  bracketSameLine: false,
  // 在大括号内部添加空格
  bracketSpacing: true,
  // 控制全部文件以 lf 进行结尾
  endOfLine: "lf",
  // 一行代码最多展示120个字符
  printWidth: 120,
  // 强制添加分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // tab的宽度
  tabWidth: 2,
  // 对象数组的内部元素使用逗号分隔的时候最后一项不添加逗号
  trailingComma: "none",
  // 使用空格键代替tab键
  useTabs: false,
  // vue 文件中将 script 和 style 进行缩进
  vueIndentScriptAndStyle: false,
  // 启用 editorconfig
  useEditorconfig: true
}
