<template>
  <figure class="featured-image">
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
      default: 200,
      type: Number
    },
    height: {
      default: 200,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.featured-image {
	position: relative;
  background-color: $main-hover-color;
  overflow: hidden;
  text-align: center;
}

.featured-image .image {
	opacity: 0.95;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale3d(1.05,1.05,1);
	transform: scale3d(1.05,1.05,1);
}

.featured-image:hover .image {
	opacity: 0.8;
	-webkit-transform: scale3d(1,1,1);
	transform: scale3d(1,1,1);
}

.featured-image figcaption {
  -webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.featured-image h2 {
	position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  margin: 0 auto;
	opacity: 0;
	-webkit-transition: opacity 0.35s;
	transition: opacity 0.35s;
}

.featured-image:hover h2 {
	opacity: 1;
	-webkit-transition-delay: 0.1s;	transition-delay: 0.1s;
}

.featured-image figcaption::before {
  pointer-events: none;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: $main-transparent-color;
	content: '';
	-webkit-transition: -webkit-transform 0.6s;
	transition: transform 0.6s;
	-webkit-transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
	transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,-100%,0);
}

.featured-image:hover figcaption::before {
	-webkit-transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
	transform: scale3d(1.9,1.4,1) rotate3d(0,0,1,45deg) translate3d(0,100%,0);
}
</style>
