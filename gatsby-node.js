exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const data = await graphql(`
      {
        allDataMenuJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
  
    if (data.errors) {
      console.log("Error retrieving data", data.errors)
      return
    }
  
    const productTemplate = require.resolve("./src/templates/ProductPage.js")
  
    data.data.allDataMenuJson.edges.forEach(edge => {
      createPage({
        path: `/menu/${edge.node.slug}/`,
        component: productTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  }
  