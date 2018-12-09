<template>
  <div
    :style="imageStyle"
    :alt="alt"
  />
</template>

<script>
import sanity from "../sanity"
import imageUrlBuilder from "@sanity/image-url"
const builder = imageUrlBuilder(sanity)

export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    alt: {
      type: String,
      default: "Missing caption"
    },
    width: {
      default: 200,
      type: Number
    },
    height: {
      default: 200,
      type: Number
    }
  },
  computed: {
    imageUrl: function() {
      return builder.image(this.image).width(this.width).height(this.height)
    },
    imageStyle: function() {
      return {
        'background-image': `url(${this.imageUrl})`,
        'width': this.width + 'px',
        'height': this.height + 'px'
      }
    }
  }
}
</script>
