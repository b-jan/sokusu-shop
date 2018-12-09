<template>
  <div>
    <ul v-if="products.length > 0" class="products__grid">
      <li v-for="product in products" :key="product._id" class="product">
        <router-link :to="'/product/' + product.slug.current" class="link">
          <SanityImage
            v-if="product.images[0]"
            :image="product.images[0]"
            :alt="product.title"
            :width="300"
            class="image"
          />

          <div class="title">{{ product.title }}</div>
          <p class="blurb">{{ product.blurb }}</p>
        </router-link>

        <div class="price-and-button">
          <span class="price">{{ getFormattedPrice(product.defaultProductVariant.price) }}</span>

          <!-- Easy integration with snipcart. See readme for more info -->
          <button :data-item-name="product.title" :data-item-price="product.defaultProductVariant.price"
                  :data-item-id="product._id"
                  type="button"
                  class="snipcart-add-item"
                  data-item-url="/"
          >
            Add to cart
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import SanityImage from "~/components/SanityImage"
import lineClamp from "vue-line-clamp"
import numeral from "numeral"

export default {
  directives: {
    lineClamp
  },
  components: {
    SanityImage
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    getFormattedPrice(price) {
      return numeral(price).format("$0.00")
    }
  }
}
</script>

<style scoped>
.products__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
}

.products__grid .title {
  font-weight: 600;
}

.products__grid li {
  display: flex;
  flex-direction: column;
}

.products__grid .link {
  display: flex;
  flex-direction: column;
}

.products__grid .image {
  display: block;
  max-width: 100%;
  width: auto;
  height: 13rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  object-fit: contain;
}

.products__grid .price {
  display: block;
  font-size: 2em;
}

.products__grid .price-and-button {
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
  margin-top: auto;
}

.link {
  display: block;
}

.price {
  display: block;
}

.title {
  font-size: 1.2em;
}

.snipcart-add-item {
  font-size: 1.1em;
  padding: 0.5em 1em;
}

.link {
  text-decoration: none;
}

ul {
  display: block;
  margin: 0;
  padding: 0;
}

.product {
  display: flex;
}

.products__grid .product {
  padding-bottom: 3rem;
  position: relative;
}

.no-products {
  text-align: center;
  font-size: 1.5em;
  padding: 1em;
}
</style>
