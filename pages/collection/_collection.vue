<template>
  <div class="collection">
    <section class="collection__intro">
      <h1 class="collection__title">{{ collection.title }}</h1>
      <div class="collection__description" v-html="bodyHtml" />
    </section>

    <section :key="collection.id" class="collection__products">
      <ProductList v-if="collection.products" :products="collection.products" />
    </section>
  </div>
</template>

<script>
import sanity from "~/sanity.js"
import localize from "~/utils/localize"
import blocksToHtml from "@sanity/block-content-to-html"
import Price from "~/components/Price"
import ProductList from "~/components/ProductList"

const query = `
  *[_type == "collection" && slug.current == $collection] {
    _id,
    "collections": *[_type == 'collection' && references(^._id)],
    title,
    description,
    banner,
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
    Price,
    ProductList
  },
  data: function() {
    return {
      collection: {
        id: null,
        title: '',
        description: '',
        products: [],
      }
    }
  },
  computed: {
    bodyHtml: function() {
      if (!this.collection || !this.collection.description) {
        return "…"
      }
      return blocksToHtml({
        blocks: this.collection.description,
        dataset: sanity.clientConfig.dataset,
        projectId: sanity.clientConfig.projectId
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.collection {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 30px 0;

  &__intro {
    width: 1000px;
    margin: 50px auto;
  }

  &__title {
    font-size: 40px;
    font-family: 'Moderne-Sans';
    text-align: center;
  }

  &__description {
    font-size: 24px;
    font-family: 'Lato';
    text-align: center;
  }
}

.products-container {
  width: 1000px;
}


</style>
