<template>
  <div id="main">
    <!-- 头部区 -->
    <Header></Header>

    <!-- content -->
    <div class="content-wrap">
      <router-view></router-view>
    </div>

    <!-- footer -->

  </div>
</template>

<script>
import Header from '@/commonComponents/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>

</style>