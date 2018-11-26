const sanityClient = require("@sanity/client")

module.exports = sanityClient({
  projectId: "dogq9bhs",
  dataset: "production",
  useCdn: true
})
