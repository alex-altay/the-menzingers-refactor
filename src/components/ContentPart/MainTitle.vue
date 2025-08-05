<template>
  <div>
    <div v-if="$route.path == '/'" class="main-title"></div>
    <div
      v-else
      v-aimed-cursor
      v-expandable-cursor
      class="main-title"
      @click="$router.push('/')"
    ></div>
  </div>
</template>

<style scoped>
.main-title {
  margin-bottom: 72px;
  background-image: url(@/assets/sprite.svg);
  background-position: 0% 0%;
  background-size: 800px auto;
  width: 575px;
  height: 188px;

  @media (max-width: 1440px) {
    background-size: 557px auto;
    width: 400px;
    height: 135px;
  }

  @media (max-width: 600px) {
    margin: 0 0 40px;
    background-size: 417px auto;
    width: 300px;
    height: 102px;
  }

  @media (width > 600px) and (height < 900px) {
    margin-bottom: 30px;
  }
}
</style>
