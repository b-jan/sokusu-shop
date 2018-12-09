<template>
  <div class="arrows-container">
    <img
      v-for="arrowIndex in totalarrows"
      :key="arrowIndex"
      :style="{ 'opacity': currentHover === arrowIndex ? 1 : 0.5 }"
      src="~/assets/images/arrow-hover.png"
    >
  </div> 
</template>

<script>
  export default {
    name: 'FlashingArrows',
    data: function() {
      return {
        totalarrows: 6,
        currentHover: 1,
      }
    },
    mounted() {
      this.incrementCurrentHover()
    },
    methods: {
      incrementCurrentHover: function() {
        this.currentHover = (this.currentHover === 6) ? 1 : (this.currentHover + 1)
        setTimeout(this.incrementCurrentHover, 150)
      }
    }
  }
</script>

<style lang="scss" scoped>
.arrows-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
