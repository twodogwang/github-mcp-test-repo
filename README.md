# GitHub MCP 测试项目

这是一个用于测试 `github-mcp` 各项功能的示例项目。
本项目已通过 SSH 方式成功推送。

## 项目结构

- `src/index.ts`: 主入口
- `src/utils/math.ts`: 数学工具函数
- `src/models/user.ts`: 用户模型

## 可测试功能

1. **代码搜索 (`search_code`)**: 可以尝试搜索 `add` 或 `createUser` 等函数名。
2. **文件内容读取 (`get_file_contents`)**: 读取 `src` 目录下的文件。
3. **索引功能**: 验证 MCP 是否能正确索引并理解项目结构。

## 运行方式

```bash
npm install
npx ts-node src/index.ts
```
