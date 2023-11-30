const fs = require('fs-extra');

// 读取JSON文件
const jsonData = require('./nextjs-docs.json');

// 将JSON数据转换为Markdown格式
let markdownContent = '';
jsonData.forEach(item => {
  markdownContent += `# ${item.title}\n\n`;  // 标题
  markdownContent += `[链接](${item.url})\n\n`;  // 链接
  markdownContent += `${item.html}\n\n`;  // HTML内容
});

// 将Markdown内容写入新的.md文件
fs.writeFileSync('nextjs-docs.md', markdownContent, 'utf-8');
