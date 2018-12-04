<template>
  <section :key="collection.id" class="container">
    <div>
      <h1 class="title">{{ collection.title }}</h1>
      <div class="description">{{ collection.description }}</div>
      <ProductList v-if="collection.products" :products="collection.products" />
      <ul v-if="collection.collections" class="sub-collections">
        <li v-for="subCat in collection.collections" :key="subCat._id">
          <router-link :to="'/collection/' + subCat.slug.current">
            {{ subCat.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import sanity from "~/sanity.js"
import localize from "~/utils/localize"
import ImageViewer from "~/components/ImageViewer"
import Price from "~/components/Price"
import ProductList from "~/components/ProductList"

const query = `
  *[_type == "collection" && slug.current == $collection] {
    _id,
    "collections": *[_type == 'collection' && references(^._id)],
    title,
    description,
    "products": *[_type == "product" && references(^._id)]
  }[0]
`

export default {
  asyncData(context) {
    return sanity
      .fetch(query, context.route.params)
      .then(data => ({ collection: localize(data) }))
  },
  components: {
    ImageViewer,
    Price,
    ProductList
  },
  data: function() {
    return {
      collection: {
        id: null,
        products: [],
        collections: null
      }
    }
  }
}
</script>

<style scoped>
.sub-collections {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.sub-collections li {
  display: block;
  padding: 2em;
  text-align: center;
  font-size: 2em;
}

.sub-collections a {
  text-decoration: none;
}

.description {
  margin: 1em 0;
  max-width: 50em;
}
</style>
