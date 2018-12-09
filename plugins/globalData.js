import sanity from "~/sanity.js"

function isParentOf(collection, possibleParent) {
  if (possibleParent._id === collection._id) {
    return false
  }
  return (collection.parents || []).some(
    parent => parent._ref === possibleParent._id
  )
}

const attachCollections = (collection, allCollections) => {
  return {
    ...collection,
    children: allCollections.filter(otherCollection =>
      isParentOf(otherCollection, collection)
    )
  }
}

const query = `
  {
    "collections": *[_type == "collection"] {
      _id,
      title,
      slug,
      banner,
      parents
    },
    "genders": *[_type == "gender"] {
      _id,
      title,
      slug,
      banner,
      "productQty": count(*[_type == "product" && references(^._id)])
    }
  }
`

/**
 * We do this to achieve server side rendering for
 * content displayed by layouts components
 * ( layouts does not have an asyncData() method )
 */
export default ({ store }) => {
  return sanity.fetch(query).then(data => {
    const collections = data.collections.map(collection =>
      attachCollections(collection, data.collections)
    )
    data.collectionTree = collections.filter(
      collection => (collection.parents || []).length === 0
    )
    store.commit("globalData", data)
  })
}
