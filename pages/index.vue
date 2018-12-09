<template>
  <div class="home-page">
    <section id="site-home" ref="main" @mousemove="shadow">
      <div ref="slogan" class="site-slogan">
        <h1>SOCKS</h1>
        <h1>THAT DON'T SUCK</h1>
      </div>
      <div v-scroll-to="{ el: '#site-genders', easing: 'ease-in-out', duration: 1000 }" class="content-scroll">
        <div class="roof" />
      </div>
    </section>

    <section id="site-genders">
      <GenderList :genders="this.$store.state.globalData.genders" />
    </section>

    <section id="collections">
      <h2>
        Les produits arrivent ...
      </h2>
    </section>

    <section id="instagram">
      <h2>
        Les produits arrivent ...
      </h2>
    </section>
  </div>
</template>

<script>
import GenderList from "~/components/GenderList"

export default {
  name: 'Home',
  components: {
    GenderList
  },
  methods: {
    shadow: function(e) {
      const main = this.$refs.main
      const slogan = this.$refs.slogan

      const { offsetWidth: width, offsetHeight: height } = main
      let {offsetX: x, offsetY: y } = e

      if(this !== e.target) {
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
      }

      const movement = 20
      const xMovement = (x / width * movement) - (movement / 2)
      const yMovement = (y / height * movement) - (movement / 2)

      slogan.style.textShadow = `
        ${xMovement}px ${yMovement}px 0 blue,
        ${2*xMovement}px ${2*yMovement}px 0 red,
        ${3*xMovement}px ${3*yMovement}px 0 pink
      `
    }
  }
}
</script>

<style lang='scss' scoped>
.home-page {
  display: flex;
  flex: 1;
  flex-direction: column;
}

#site-home {
  background-image: url('~assets/images/home.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .site-slogan {
    color: $main-light-color;
    letter-spacing: 12px;
    font-size: 80px;
    text-align: center;
    margin-top: 180px;
  }

  .content-scroll {
    display: flex;
    flex-direction: column;

    .roof {
      display: flex;
      align-self: center;
      justify-content: center;
      width: 0;
      height: 0;
      position: relative;
      border-left: 200px solid transparent;
      border-right: 200px solid transparent;
      border-bottom: 150px solid $main-light-color;
      cursor: pointer;
      transition: border-bottom-color .4s ease;
    }

    .roof:hover {
      border-bottom-color: $main-primary-color;
    }

    .roof:hover:after {
      color: $main-light-color;
    }
    
    .roof:after {
      content: 'SHOW ME!';
      letter-spacing: 0;
      font-family: 'Lato-Bold';
      color: $main-primary-color;
      font-size: 32px;
      position: relative;
      top: 75px;
      min-width: 20vw;
      text-align: center;
      animation: blink 2s infinite;
      transition: color .4s ease;
      text-shadow: 0 1px 3px rgba(0,0,0,0.5);
    }
  }
}

#site-genders {
  display: flex;
  width: 1000px;
  align-self: center;
}

</style>
