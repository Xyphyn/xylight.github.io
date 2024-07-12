import { slugFromPath } from '$lib/blog.js'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
  try {
    const post = await import(`../content/${params.slug}.md`)
    return {
      content: post.default,
      meta: post.metadata,
    }
  } catch (err) {
    error(404)
  }
}
