# 单依纯个人资讯站

[单依纯](https://shanyichun.fans) 的个人资讯网站，提供艺人简介、音乐作品、演出动态、新闻资讯、荣誉奖项等一站式信息查询。

## 技术栈

- **框架**：[Astro](https://astro.build) v7 — 零 JS 默认输出的内容站框架
- **样式**：[Tailwind CSS](https://tailwindcss.com) v4 — 原子化 CSS
- **内容管理**：MDX + Content Collections (通过 TinaCMS 可视化编辑)
- **部署**：Vercel — 全球 CDN，自动 HTTPS

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目目录

```
src/
├── components/     # UI 组件
│   ├── layout/     # 布局组件 (Header, Footer)
│   ├── sections/   # 页面区块 (HeroSection, DiscographyGrid, etc.)
│   ├── seo/        # SEO 组件 (BaseSEO, StructuredData)
│   └── ui/         # 通用组件 (Card, Tag, Container)
├── content/        # 内容文件 (MDX/MD)
│   ├── biography/  # 个人简介
│   ├── discography/ # 音乐作品
│   ├── events/     # 演出经历
│   ├── news/       # 最新动态
│   └── awards/     # 荣誉奖项
├── layouts/        # 页面布局
├── pages/          # 页面路由
└── styles/         # 样式
tina/               # TinaCMS 配置
```

## 内容管理

### 方法一：TinaCMS 可视化后台（推荐）

1. 前往 [Tina Cloud](https://tina.io/cloud/) 注册账号
2. 创建新项目，连接你的 GitHub 仓库
3. 获取 `TINA_CLIENT_ID` 和 `TINA_TOKEN`
4. 在 Vercel 项目设置中添加环境变量
5. 访问 `https://shanyichun.fans/admin/` 进入可视化编辑界面

### 方法二：直接编辑 MDX 文件

直接在 `src/content/` 目录下编辑 `.mdx` 文件，提交后自动部署。

### 方法三：GitHub 网页编辑

在 GitHub 仓库中找到对应文件，点击编辑按钮修改后提交 PR。

## 添加新内容

### 添加新闻

在 `src/content/news/` 目录下创建新的 `.mdx` 文件：

```mdx
---
title: '新闻标题'
publishDate: 2026-07-23
source: '来源'
summary: '新闻摘要内容'
tags: ['标签1', '标签2']
---

新闻正文内容...
```

### 添加音乐作品

在 `src/content/discography/` 目录下创建：

```mdx
---
title: '作品名称'
type: 'single'          # album | single | ost
releaseDate: 2026-07-23
label: '唱片公司'
platforms:
  - name: 'QQ音乐'
    url: 'https://y.qq.com/...'
tracks:
  - number: 1
    name: '曲目1'
    duration: '03:45'
tags: ['标签']
---
```

## 部署

### Vercel（推荐）

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 中导入该仓库
3. Vercel 会自动检测 Astro 框架并进行部署
4. 在 Vercel 项目设置中绑定自定义域名 `shanyichun.fans`
5. 如需 TinaCMS，添加环境变量 `TINA_CLIENT_ID` 和 `TINA_TOKEN`

### 环境变量

| 变量 | 说明 | 必需 |
|------|------|------|
| `TINA_CLIENT_ID` | Tina Cloud 客户端 ID | 使用 TinaCMS 时必需 |
| `TINA_TOKEN` | Tina Cloud 访问令牌 | 使用 TinaCMS 时必需 |

## 自定义域名

1. 购买域名 `shanyichun.fans`
2. 在域名 DNS 设置中添加 CNAME 记录指向 `cname.vercel-dns.com`
3. 在 Vercel 项目设置 -> Domains 中添加域名
4. Vercel 自动配置 SSL 证书

## SEO

- 全站 SSG 静态生成，默认零 JS
- JSON-LD 结构化数据 (Person, MusicAlbum Schema)
- Open Graph / Twitter Card 全覆盖
- 自动生成 Sitemap 和 RSS Feed
- 语义化 HTML 结构

## 路线图

- [x] 项目初始化与核心页面
- [x] 响应式设计
- [x] SEO 优化
- [x] RSS Feed
- [ ] TinaCMS 可视化编辑
- [ ] 暗色模式
- [ ] 全站搜索
- [ ] 中英双语
- [ ] 评论区

## 免责声明

本站为粉丝非官方站点，所有内容仅供信息参考。图片、音乐版权归原作者及所属公司所有。
