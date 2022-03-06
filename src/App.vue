<template>
  <div id="app">
        <el-tabs v-model="activeName" @tab-click="navigate">
            <el-tab-pane v-for="menu in menuList" :label="menu.name" :name="menu.path" :key="menu.index"></el-tab-pane>
        </el-tabs>
        <router-view></router-view>

        
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      menuList: [
        {index:0, name:'Basic', path:"/basic"},
        {index:1, name:'Export', path:"/export"},
        {index:2, name:'Stock', path:"/stock"},
        {index:3, name:'Map', path:"/map"},
        {index:4, name:'Gant', path:"/gant"},
   

      ],
      activeName: '/basic',
      beforeActive: ''
    }
  },
  methods: {
    // 메뉴 이동
    navigate() {
        if(this.beforeActive !== this.activeName) {
            console.log(`route to ${this.activeName}`);
            this.$router.push(this.activeName);
            this.beforeActive = this.activeName;
        }
    }
  },
  mounted() {
        this.navigate();
  }
}
</script>

<style>

</style>
