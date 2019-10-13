const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
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
  const posts = result.data.allMarkdownRemark.edges
	
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

	const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
	console.log(numPages)
  Array.from({ length: numPages }).forEach((_, i) => {
		const indexPath = i === 0 ? `/` : `/indexpages/${i+1}`
		const previousIndexPath = i === 0 ? null  : `/indexpages/${i}`
    const nextIndexPath = i === numPages - 1 ? null : `/indexpages/${i + 2}` ;

		createPage({
      path: indexPath,
      component: path.resolve("./src/templates/blog-posts-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
				previousIndexPath,
				nextIndexPath
      },
    })
  });

	
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `slug`,
      node,
      value: `${node.frontmatter.url}`
    })
  }
}
