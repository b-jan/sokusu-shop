<template>
  <ul class="collection-list">
    <li v-for="collection in collections" v-if="collection.slug" :key="collection._id" class="collection">
      <nuxt-link :to="`collection/${collection.slug.current}`">
        <FeaturedImage
          v-if="collection.banner"
          :image="collection.banner"
          :width="250"
          :height="350"
          class="collection__image"
        >
          <h3 class="collection__title">{{ collection.title.en }}</h3>
        </FeaturedImage>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import FeaturedImage from "~/components/FeaturedImage"

export default {
  name: 'CollectionList',
  components: {
    FeaturedImage
  },
  props: {
    collections: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .collection-list {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-top: 30px;
  }

  .collection {
    position: relative;
    float: left;
    
    &__image {
      border: 5px solid $main-hover-color;
    }

    &__title {
      font-family: 'Moderne-Sans';
      color: $main-light-color;
      font-size: 30px;;
      text-transform: uppercase
    }
  }

</style>