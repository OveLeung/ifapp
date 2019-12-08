<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ msg }}</div>
    <van-button type="default">默认按钮</van-button>
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello world"
    }
  },
  mounted() {
    this.getProxy()
  },
  methods: {
    getProxy() {
      this.axios.get("/api/hello").then(response => {
        this.msg = response.data
      })
    }
  }
}
</script>
