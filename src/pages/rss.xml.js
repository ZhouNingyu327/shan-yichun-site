import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@/utils/constants';

export async function GET(context) {
  const posts = (await getCollection('news'))
    .sort((a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime());

  return rss({
    title: `${SITE.name} · 最新动态`,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.summary,
      link: `/news/${post.id}/`,
    })),
    customData: `<language>zh-cn</language>`,
  });
}
