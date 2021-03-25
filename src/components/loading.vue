<template lang="html">
  <div class="loading-page" v-if="loading">
    <div class="box">
      <div class="item item-1"></div>
      <div class="item item-2"></div>
      <div class="item item-3"></div>
      <div class="item item-4"></div>
    </div>
    <!-- <div id="loader">
      <div id="shadow"></div>
      <div id="box"></div>
    </div> -->
    <!-- <div class="loading">T-Medic</div> -->
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
      increase(num){ 
      }
    },
    mounted() {
      let loading = document.querySelector(".loading");
      if (loading) {
        let letters = loading.textContent.split("");
        loading.textContent = "";
        letters.forEach((letter, i) => {  
          let span = document.createElement("span");
          span.textContent = letter;
          span.style.animationDelay = `${i / 5}s`;
          loading.append(span);
        });
        
      }

    }
  }
</script>

<style lang="scss">
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.item {
  width: 50px;
  height: 50px;
  position: absolute;
}

.item-1 {
  background-color: #FA5667;
  top: 0;
  left: 0;
  z-index: 1;
  animation: item-1_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
}

.item-2 {
  background-color: #7A45E5;
  top: 0;
  right: 0;
  animation: item-2_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
}

.item-3 {
  background-color: #1B91F7;
  bottom: 0;
  right: 0;
  z-index: 1;
  animation: item-3_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
}

.item-4 {
  background-color: #FAC24C;
  bottom: 0;
  left: 0;
  animation: item-4_move 1.8s cubic-bezier(.6,.01,.4,1) infinite;
}

@keyframes item-1_move {
  0%, 100% {transform: translate(0, 0)} 
  25% {transform: translate(0, 100px)} 
  50% {transform: translate(100px, 100px)} 
  75% {transform: translate(100px, 0)} 
}

@keyframes item-2_move {
  0%, 100% {transform: translate(0, 0)} 
  25% {transform: translate(-100px, 0)} 
  50% {transform: translate(-100px, 100px)} 
  75% {transform: translate(0, 100px)} 
}

@keyframes item-3_move {
  0%, 100% {transform: translate(0, 0)} 
  25% {transform: translate(0, -100px)} 
  50% {transform: translate(-100px, -100px)} 
  75% {transform: translate(-100px, 0)} 
}

@keyframes item-4_move {
  0%, 100% {transform: translate(0, 0)} 
  25% {transform: translate(100px, 0)} 
  50% {transform: translate(100px, -100px)} 
  75% {transform: translate(0, -100px)} 
}
  .loading-page {
    position: fixed;
    width: 100%;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #2c2c2c6b;
    z-index:9999;
  }
  .loading {
    display: flex; 
    color: white;
    font-size: 3em;
    text-transform: uppercase;

  }
  .loading span {
      padding: 0 20px;
      line-height: 100px;
      background: #34495e;
      animation: bulge 2s infinite;
    }

  @keyframes bulge {
    50% {
      box-shadow: 0 20px 0 #eee;
      transform: translateY(-35px);
    }
  }
#loader {
  /* Uncomment this to make it run! */
  /*
     animation: loader 5s linear infinite; 
  */
  
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
}
@keyframes loader {
  0% { left: -100px }
  100% { left: 110%; }
}
#box {
  width: 50px;
  height: 50px;
  background: #fff;
  animation: animate .5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
}
@keyframes animate {
  17% { border-bottom-right-radius: 3px; }
  25% { transform: translateY(9px) rotate(22.5deg); }
  50% {
    transform: translateY(18px) scale(1,.9) rotate(45deg) ;
    border-bottom-right-radius: 40px;
  }
  75% { transform: translateY(9px) rotate(67.5deg); }
  100% { transform: translateY(0) rotate(90deg); }
} 
#shadow { 
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: shadow .5s linear infinite;
}
@keyframes shadow {
  50% {
    transform: scale(1.2,1);
  }
}


</style>
