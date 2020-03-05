const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allContentfulBlogPost.edges

  posts.forEach((post, index) => {
    createPage({
      path: `/blog/${post.node.slug}/`,
      component: blogPost,
      context: {
        slug: post.node.slug,
      },
    })
  })
}
