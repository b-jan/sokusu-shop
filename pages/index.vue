<template>
  <div class="home-page">
    <section id="site-home">
      <div class="site-slogan">
        <h1>SOCKS</h1>
        <h1>THAT DON'T SUCK</h1>
        <div v-scroll-to="{ el: '#new-products', easing: 'ease-in-out', duration: 1000 }" class="content-scroll">
          <div class="roof" />
        </div>
      </div>
    </section>
    <section id="new-products">
      <h2>
        Les produits arrivent ...
      </h2>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
  #site-home {
    background-image: url('~assets/images/home.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 842px;

    .site-slogan {
      color: $main-light-color;
      letter-spacing: 12px;
      font-size: 80px;
      text-align: center;
      padding-top: 120px;
    }

    .content-scroll {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      margin-top: 470px;

      @keyframes bouncing {
        0% {bottom: 0;}
        50% {bottom: 20px;}
        100% {bottom: 0;}
      }

      .roof {
        display: flex;
        align-self: center;
        justify-content: center;
        width: 0;
        height: 0;
        position: relative;
        top: -122px;
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
        font-size: 24px;
        position: relative;
        top: 80px;
        min-width: 20vw;
        text-align: center;
        animation: blink 2s infinite;
        transition: color .4s ease;
      }
    }
  }

  #new-products {
    display: flex;
    height: 150vh;
  }
</style>
