export const SITE = {
  name: '单依纯',
  nameEn: 'Shan Yichun',
  tagline: '中国新生代歌手 · 用歌声温暖世界',
  description: '单依纯个人资讯站 — 了解单依纯的最新动态、音乐作品、演出信息和媒体资料',
  url: 'https://shanyichun.fans',
  locale: 'zh_CN',
  since: 2025,
};

export const SOCIAL_LINKS = [
  { name: '微博', url: 'https://weibo.com/u/7495645902', icon: 'weibo' },
  { name: '网易云音乐', url: 'https://music.163.com/artist/35497986', icon: 'music' },
  { name: 'QQ音乐', url: 'https://y.qq.com/artist/003R0dX80e8CCt', icon: 'music' },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/7nIi4E7jPbfXMXF1cZOF63', icon: 'spotify' },
  { name: 'Instagram', url: 'https://www.instagram.com/syichun_1223/', icon: 'instagram' },
];

export const NAV_ITEMS = [
  { label: '首页', href: '/' },
  { label: '个人简介', href: '/about' },
  { label: '音乐作品', href: '/music' },
  { label: '演出经历', href: '/events' },
  { label: '最新动态', href: '/news' },
  { label: '荣誉奖项', href: '/awards' },
  { label: '媒体库', href: '/media' },
] as const;
