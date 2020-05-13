<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>

    <Footer></Footer>

   
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Search from './components/ExpenseSearch.vue'


export default {
  name: 'App',
  components: {
    Header, Footer, Search
  },
  data() {
    return{
      expenses: [],
      message: ''
    }

  },
  methods: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
