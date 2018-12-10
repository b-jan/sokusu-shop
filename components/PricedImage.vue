<template>
  <figure class="priced-image">
    <SanityImage
      :image="image"
      :width="width"
      :height="height"
      class="image"
    />
    <figcaption>
      <slot />
    </figcaption>			
  </figure>
</template>

<script>
import SanityImage from "~/components/SanityImage"

export default {
  name: 'PricedImage',
  components: {
    SanityImage
  },
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
      default: 300,
      type: Number
    },
    height: {
      default: 300,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.priced-image {
  position: relative;
  overflow: hidden;
}

.priced-image p {
  position: absolute;
	right: 0;
	bottom: 0;
	opacity: 0;
	-webkit-transform: translate3d(20px,20px,0);
	transform: translate3d(20px,20px,0);
}

.priced-image figcaption:before {
  position: absolute;
	right: -50px;
	bottom: -60px;
	width: 150px;
	height: 150px;
	border: 3px solid $main-dark-color;
	border-radius: 50%;
	box-shadow: 0 0 0 900px $second-transparent-color;
	content: '';
	opacity: 0;
	-webkit-transform: scale3d(0.5,0.5,1);
	transform: scale3d(0.5,0.5,1);
	-webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
}

.priced-image:hover figcaption:before {
	opacity: 1;
	-webkit-transform: scale3d(1,1,1);
	transform: scale3d(1,1,1);
}

.priced-image:hover p {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}
</style>
