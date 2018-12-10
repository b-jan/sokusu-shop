<template>
  <ul v-if="products.length > 0" class="products__grid">
    <li v-for="product in products" :key="product._id" class="product">
      <router-link :to="'/product/' + product.slug.current" class="product__link">
        <PricedImage
          v-if="product.images[0]"
          :image="product.images[0]"
          :alt="product.title"
          class="product__image"
        >
          <p class="product__price">{{ getFormattedPrice(product.defaultProductVariant.price) }} €</p>
        </PricedImage>
        <h2 class="product__title">{{ product.title }}</h2>
      </router-link>
    </li>
  </ul>
</template>


<script>
import PricedImage from "~/components/PricedImage"
import lineClamp from "vue-line-clamp"
import numeral from "numeral"

export default {
  directives: {
    lineClamp
  },
  components: {
    PricedImage
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    getFormattedPrice(price) {
      return numeral(price).format("0.00")
    }
  }
}
</script>

<style lang='scss' scoped>
.products__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  margin: 0 auto;
}

.product {
  &__title {
    font-family: 'Lato-Light';
    font-size: 24px;
    letter-spacing: 1px;
    text-align: center;
  }

  &__price {
    font-family: 'Lato-Bold';
    color: $main-dark-color;
    font-size: 24px;
  }
}
</style>
