<template>
  <ul class="gender-list">
    <li v-for="gender in genders" v-if="gender.slug" :key="gender._id" class="gender">
      <nuxt-link :to="gender.slug.current">
        <FeaturedImage
          v-if="gender.banner"
          :image="gender.banner"
          :width="450"
          :height="550"
          class="gender__image"
        >
          <h2 class="gender__title">{{ gender.title.en }}</h2>
        </FeaturedImage>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import FeaturedImage from "~/components/FeaturedImage"

export default {
  name: 'GenderList',
  components: {
    FeaturedImage
  },
  props: {
    genders: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .gender-list {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  .gender {
    position: relative;
    float: left;
    
    &__image {
      border: 5px solid $main-hover-color;
    }

    &__title {
      font-family: 'Moderne-Sans';
      color: $main-light-color;
      font-size: 40px;;
      text-transform: uppercase
    }
  }

</style>