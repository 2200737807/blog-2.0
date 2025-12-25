// 从内容集合获取所有文章
export async function GET() {
  try {
    const { getCollection } = await import('astro:content')
    const posts = await getCollection('posts', ({ data }) => {
      // 只包含已发布的文章
      return data.draft !== true
    })

    // 准备搜索数据
    const searchData = posts.map((post) => {
      // 提取文章内容的纯文本（用于搜索）
      const content = post.body?.replace(/[#*`[\]]/g, '').substring(0, 1000) || ''

      // 构建文章的URL路径
      const url = `/posts/${post.id}/`

      return {
        title: post.data.title,
        content,
        description: post.data.description || content.substring(0, 200),
        date: post.data.pubDate,
        url,
      }
    })

    return new Response(JSON.stringify(searchData), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  catch (error) {
    console.error('Error generating search data:', error)
    return new Response(JSON.stringify({ error: 'Failed to generate search data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
