interface PostMetadata {
  title: string
  date: string
  description?: string
  [key: string]: unknown
}

// Define the structure of a post
interface Post extends PostMetadata {
  slug: string
}

export async function load() {
  const MAX_FILES = 20
  const modules = import.meta.glob('./content/*.{md,svx}')

  const posts: Post[] = await Promise.all(
    Object.entries(modules)
      .slice(0, MAX_FILES)
      .map(async ([path, resolver]) => {
        const { metadata } = (await resolver()) as any
        const slug = path.split('/').pop()?.split('.')[0]
        return { ...metadata, slug } as Post
      }),
  )

  return { posts: posts }
}
