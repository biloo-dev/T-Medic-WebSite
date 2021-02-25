<template lang="html">
  <div class="loading-page" v-if="loading">
    <div class="loading">T-Medic</div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: true
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    },
    mounted() {
      let loading = document.querySelector(".loading");
      let letters = loading.textContent.split("");
      loading.textContent = "";
      letters.forEach((letter, i) => {
        console.log('i : ',i)
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i / 5}s`;
        loading.append(span);
      });

    }
  }
</script>

<style scoped>
  .loading-page {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #2980b9;
    z-index:9999;
  }
  .loading {
    display: flex; 
    color: white;
    font-size: 3em;
    text-transform: uppercase;

    span {
      padding: 0 20px;
      line-height: 100px;
      background: #34495e;
      animation: bulge 2s infinite;
    }
  }

  @keyframes bulge {
    50% {
      box-shadow: 0 20px 0 #eee;
      transform: translateY(-35px);
    }
  }

</style>
