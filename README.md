# Bun + Elysia Fullstack

一个基于 Bun 的全栈应用模板，使用 Elysia 提供后端 API，React 提供前端界面。开发和生产环境都可以由同一个 Elysia 服务提供 API、静态资源和前端页面。

## 技术栈与能力

- **运行时与构建**：Bun，使用 `build.ts` 构建前后端
- **前端**：React 19、React Router、TanStack Query、Zustand
- **后端**：Elysia，包含 CORS、静态资源托管和 OpenAPI 文档
- **类型安全 API**：通过 `@elysia/eden` 从 Elysia 的 `App` 类型生成客户端调用
- **样式**：Tailwind CSS v4，通过 `bunfig.toml` 中的 Bun Tailwind 插件处理
- **前端页面**：`/`、`/about`、`/login`

## 环境要求

- [Bun](https://bun.sh/) 最新稳定版

## 安装

```bash
bun install
```

## 开发

启动后端（默认端口 `3000`）：

```bash
bun run dev:server
```

也可以使用快捷命令：

```bash
bun run dev
```

后端服务会同时提供：

- `http://localhost:3000/`：前端页面
- `http://localhost:3000/api/hello`：示例 API
- `http://localhost:3000/openapi`：OpenAPI 文档
- `public/`：静态资源

前端热更新开发服务器可单独启动：

```bash
bun run dev:frontend
```

前端 API 客户端默认请求当前服务根路径，因此通常直接启动 `dev:server` 即可使用完整应用。端口可以通过 `PORT` 环境变量修改：

```bash
PORT=4000 bun run dev:server
```

## 构建与运行

执行生产构建：

```bash
bun run build
```

构建脚本会：

1. 将 `index.html` 和 `server/index.ts` 编译到 `dist/`
2. 处理 Tailwind CSS
3. 将 `public/` 复制到 `dist/public/`

构建完成后运行生产服务：

```bash
cd dist
bun run index.js
```

生产服务默认监听 `3000` 端口，同样支持 `PORT` 环境变量：

```bash
PORT=4000 bun run index.js
```

## API

后端应用位于 `server/app.ts`，API 路由统一使用 `/api` 前缀。目前提供：

```http
GET /api/hello
```

响应示例：

```json
{
	"message": "Hello from Elysia!",
	"runtime": "bun",
	"framework": "elysia"
}
```

前端通过 `src/lib/eden.ts` 中的 Eden Treaty 客户端调用 API，客户端类型来自 `server/app.ts` 导出的 `App`，修改后端路由时可以同步获得 TypeScript 类型检查。

## 项目结构

```text
src/                 React 前端、页面、状态和 UI 组件
server/app.ts        Elysia API 定义与 App 类型
server/index.ts      服务启动、静态资源和 SPA 回退
public/              前端静态资源
build.ts             Bun 生产构建脚本
bunfig.toml          Bun 与 Tailwind 配置
```

## Scripts

| 命令 | 说明 |
| --- | --- |
| `bun run dev` | 启动后端开发服务 |
| `bun run dev:server` | 以 watch 模式启动 Elysia 服务 |
| `bun run dev:frontend` | 启动前端热更新服务 |
| `bun run build` | 构建前后端到 `dist/` |
| `bun run typecheck` | 执行 TypeScript 类型检查 |
