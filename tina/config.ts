import { defineConfig } from 'tinacms';

const branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'biography',
        label: '个人简介',
        path: 'src/content/biography',
        format: 'md',
        fields: [
          { type: 'string', name: 'name', label: '姓名', required: true },
          { type: 'string', name: 'nameEn', label: '英文名' },
          { type: 'datetime', name: 'birthDate', label: '出生日期', required: true },
          { type: 'string', name: 'birthPlace', label: '出生地', required: true },
          { type: 'number', name: 'debutYear', label: '出道年份', required: true },
          { type: 'string', name: 'intro', label: '简介', ui: { component: 'textarea' }, required: true },
          { type: 'rich-text', name: 'body', label: '正文', isBody: true },
        ],
      },
      {
        name: 'discography',
        label: '音乐作品',
        path: 'src/content/discography',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: '标题', required: true },
          { type: 'string', name: 'titleEn', label: '英文标题' },
          {
            type: 'string', name: 'type', label: '类型',
            options: [
              { value: 'album', label: '专辑' },
              { value: 'single', label: '单曲' },
              { value: 'ost', label: 'OST' },
            ],
            required: true,
          },
          { type: 'datetime', name: 'releaseDate', label: '发行日期', required: true },
          { type: 'string', name: 'label', label: '唱片公司' },
          {
            type: 'object', name: 'tracks', label: '曲目', list: true,
            fields: [
              { type: 'number', name: 'number', label: '编号' },
              { type: 'string', name: 'name', label: '曲名' },
              { type: 'string', name: 'duration', label: '时长' },
            ],
          },
          {
            type: 'object', name: 'platforms', label: '收听平台', list: true,
            fields: [
              { type: 'string', name: 'name', label: '平台名称' },
              { type: 'string', name: 'url', label: '链接' },
            ],
          },
          { type: 'rich-text', name: 'body', label: '正文', isBody: true },
        ],
      },
      {
        name: 'events',
        label: '演出经历',
        path: 'src/content/events',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: '标题', required: true },
          { type: 'datetime', name: 'date', label: '日期', required: true },
          { type: 'datetime', name: 'endDate', label: '结束日期' },
          {
            type: 'string', name: 'type', label: '类型',
            options: [
              { value: 'concert', label: '演唱会' },
              { value: 'variety', label: '综艺' },
              { value: 'award', label: '颁奖礼' },
              { value: 'interview', label: '采访' },
              { value: 'fanmeeting', label: '粉丝见面会' },
              { value: 'other', label: '其他' },
            ],
          },
          { type: 'string', name: 'location', label: '地点' },
          { type: 'boolean', name: 'featured', label: '精选' },
          { type: 'rich-text', name: 'body', label: '正文', isBody: true },
        ],
      },
      {
        name: 'news',
        label: '最新动态',
        path: 'src/content/news',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: '标题', required: true },
          { type: 'datetime', name: 'publishDate', label: '发布日期', required: true },
          { type: 'string', name: 'source', label: '来源', required: true },
          { type: 'string', name: 'sourceUrl', label: '来源链接' },
          { type: 'string', name: 'summary', label: '摘要', ui: { component: 'textarea' }, required: true },
          { type: 'string', name: 'tags', label: '标签', list: true },
          { type: 'rich-text', name: 'body', label: '正文', isBody: true },
        ],
      },
      {
        name: 'awards',
        label: '荣誉奖项',
        path: 'src/content/awards',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'awardName', label: '奖项名称', required: true },
          { type: 'string', name: 'ceremony', label: '颁奖典礼', required: true },
          { type: 'number', name: 'year', label: '年份', required: true },
          { type: 'string', name: 'category', label: '类别', required: true },
          {
            type: 'string', name: 'result', label: '结果',
            options: [
              { value: 'won', label: '获奖' },
              { value: 'nominated', label: '提名' },
            ],
          },
          { type: 'string', name: 'work', label: '作品名' },
        ],
      },
    ],
  },
});
