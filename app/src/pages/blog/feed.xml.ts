import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
	const blog = await getCollection('blog', ({data}) => data.published);

	return rss({
		title: 'Jofmar-me Blog',
		description: 'Ultimos posts del blog Jofmar-me',
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.description,
			link: `/blog/${post.id}`,
		})),
		customData: `<language>es</language>`,
	});
}