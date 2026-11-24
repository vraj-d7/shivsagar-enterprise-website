import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** All posts, newest first. */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog');
	return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.data.title.localeCompare(b.data.title));
}

/** A short plain-text summary: the post's description, or the start of its first paragraph. */
export function excerpt(post: Post, max = 170): string {
	if (post.data.description) return post.data.description;
	const first = (post.body ?? '').split(/\n\s*\n/).find((p) => p.trim() && !p.startsWith('#')) ?? '';
	const text = first.replace(/[*_`#>]/g, '').replace(/\s+/g, ' ').trim();
	return text.length > max ? text.slice(0, max).replace(/\s+\S*$/, '') + '…' : text;
}

export const fmtDate = (d: Date) => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
